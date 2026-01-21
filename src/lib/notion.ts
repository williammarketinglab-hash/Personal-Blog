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

export async function getBlogPosts() {
    const categories = [
        { id: process.env.MARKETING_LAB_PAGE_ID, name: "Marketing Skills", label: "行銷技巧" },
        { id: process.env.TECH_PULSE_PAGE_ID, name: "AI Tech", label: "AI 科技" },
        // Fallback or new categories if we find ID
        { id: process.env.TRAVEL_PAGE_ID, name: "Travel", label: "旅遊" },
        { id: process.env.APPAREL_PAGE_ID, name: "Apparel", label: "服飾" }
    ];

    const allPosts = [];

    for (const category of categories) {
        if (!category.id) continue;

        // Fetch only top-level blocks (pages), DO NOT recurse
        const blocks = await getBlocks(category.id, false);

        // Filter for child_page blocks which we treat as blog posts
        const posts = blocks
            .filter((block: any) => block.type === "child_page")
            .map((block: any) => ({
                id: block.id.replace(/-/g, ""),
                title: block.child_page.title,
                category: category.label || category.name, // Use label if available
                createdAt: block.created_time,
            }));

        allPosts.push(...posts);
    }

    return allPosts.sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}
