import { Client } from "@notionhq/client";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export async function getPage(pageId: string) {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
}

export async function getBlocks(blockId: string, recursive = true) {
    const blocks = [];
    let cursor;
    while (true) {
        const { results, next_cursor }: any = await notion.blocks.children.list({
            start_cursor: cursor,
            block_id: blockId,
        });

        // Recursively get children for blocks that have them (e.g. columns, toggles)
        if (recursive) {
            for (const block of results) {
                if (block.has_children) {
                    try {
                        // Avoid deep recursion for now, just 1-2 levels for columns usually
                        const children = await getBlocks(block.id, true);
                        block.children = children;
                    } catch (e) {
                        console.error(`Error fetching children for block ${block.id}`, e);
                    }
                }
            }
        }

        blocks.push(...results);
        if (!next_cursor) break;
        cursor = next_cursor;
    }
    return blocks;
}

// Helper to recursively find all child_page blocks (pages)
export async function getAllChildPages(blockId: string) {
    const pages: any[] = [];
    let cursor;

    while (true) {
        const { results, next_cursor }: any = await notion.blocks.children.list({
            start_cursor: cursor,
            block_id: blockId,
        });

        for (const block of results) {
            if (block.type === "child_page") {
                pages.push(block);
                // Also recursively check inside this page for sub-pages (folders)
                const subPages = await getAllChildPages(block.id);
                pages.push(...subPages);
            } else if (block.has_children) {
                // If it's a toggle, column, etc., look inside for pages
                // We use getBlocks logic but focused on finding pages
                const subPages = await getAllChildPages(block.id);
                pages.push(...subPages);
            }
        }

        if (!next_cursor) break;
        cursor = next_cursor;
    }
    return pages;
}

export async function getBlogPosts() {
    const categories = [
        { id: process.env.MARKETING_LAB_PAGE_ID, name: "Marketing Skills", label: "行銷技巧" },
        { id: process.env.TECH_PULSE_PAGE_ID, name: "AI Tech", label: "AI 科技" },
        // Fallback or new categories if we find ID
        { id: process.env.TRAVEL_PAGE_ID, name: "Travel", label: "旅遊" },
        { id: process.env.APPAREL_PAGE_ID, name: "Apparel", label: "服飾" }
    ];

    const allPosts = [];

    const categoryPromises = categories.map(async (category) => {
        if (!category.id) return [];

        // Use deep recursion to find nested pages for all categories
        const pages = await getAllChildPages(category.id);
        const posts = pages.map((block: any) => ({
            id: block.id.replace(/-/g, ""),
            title: block.child_page.title,
            category: category.label || category.name,
            createdAt: block.created_time,
        }));

        return posts;
    });

    const allPostsArrays = await Promise.all(categoryPromises);
    allPosts.push(...allPostsArrays.flat());

    return allPosts.sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}
