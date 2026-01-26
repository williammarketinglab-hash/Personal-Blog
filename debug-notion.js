const { Client } = require('@notionhq/client');
require('dotenv').config({ path: '.env.local' });

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const rootId = process.env.TRAVEL_PAGE_ID;

async function getChildren(blockId) {
    let results = [];
    let cursor;
    try {
        while (true) {
            const response = await notion.blocks.children.list({ block_id: blockId, start_cursor: cursor });
            results.push(...response.results);
            if (!response.next_cursor) break;
            cursor = response.next_cursor;
        }
    } catch (e) {
        // console.error(`Failed to list children for ${blockId}: ${e.message}`);
    }
    return results;
}

async function recursiveFind(blockId, depth = 0) {
    if (depth > 4) return; // limit depth
    const children = await getChildren(blockId);

    for (const child of children) {
        if (child.type === 'child_page') {
            const title = child.child_page.title;
            const plainId = child.id.replace(/-/g, "");

            if (title.includes('哈比屯') || title.includes('Hobbiton')) {
                console.log(`\n!!! FOUND HOBBITON PAGE !!!`);
                console.log(`Title: ${title}`);
                console.log(`ID: ${plainId}`);
                console.log(`(This might be the ID accidentally set in Vercel)`);
                return;
            } else {
                // console.log(' '.repeat(depth * 2) + `- Checked: ${title}`);
            }

            await recursiveFind(child.id, depth + 1);
        } else if (child.has_children) {
            // For toggles, columns etc
            await recursiveFind(child.id, depth + 1);
        }
    }
}

async function debug() {
    console.log(`Searching for Hobbiton page starting from Root: ${rootId}...`);
    await recursiveFind(rootId);
    console.log("Search complete.");
}

debug();
