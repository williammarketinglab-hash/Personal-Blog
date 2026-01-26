import { getBlogPosts, getBlocks } from "@/lib/notion";
import Link from "next/link";
import { ArrowRight, Map } from "lucide-react";
import { NotionRenderer } from "@/components/NotionRenderer";

// Helper to remove dashes for ID comparison
const cleanId = (id: string) => id.replace(/-/g, "");

export default async function TravelPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    // 1. Fetch Shallow Blocks (Direct Children) for Intro & Continents
    const pageId = process.env.TRAVEL_PAGE_ID;
    let introBlocks: any[] = [];
    let continentPages: any[] = [];

    if (pageId) {
        try {
            const blocks = await getBlocks(pageId, false);
            introBlocks = blocks.filter((block: any) => block.type !== "child_page");
            continentPages = blocks.filter((block: any) => block.type === "child_page");
        } catch (e) {
            console.error("Error fetching travel blocks", e);
        }
    }

    // 2. Fetch All Deep Posts
    const allPosts = await getBlogPosts();
    // Filter for Travel category
    let travelPosts = allPosts.filter(post => post.category === "旅遊" || post.category === "Travel");

    // 3. Filter out the Continents themselves from the "Latest Articles" list
    // We assume anything in 'continentPages' is a folder/index, not a post.
    const continentIds = new Set(continentPages.map(c => cleanId(c.id)));
    travelPosts = travelPosts.filter(post => !continentIds.has(post.id));

    return (
        <main className="container" style={{ padding: '4rem 2rem' }}>
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                    旅遊
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    數位遊牧與世界足跡。
                </p>
            </header>

            {/* Section 1: Intro Content */}
            {introBlocks.length > 0 && (
                <div className="glass" style={{ padding: '3rem', marginBottom: '4rem' }}>
                    <NotionRenderer blocks={introBlocks} />
                </div>
            )}

            {/* Section 2: Continents Index (Direct Sub-pages) */}
            {continentPages.length > 0 && (
                <section style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Map className="w-6 h-6 text-[var(--accent-color)]" />
                        探索各大洲
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {continentPages.map((page: any) => (
                            <div key={page.id} className="glass" style={{
                                padding: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                cursor: 'default' // Currently just an index, non-clickable structure for now unless we add routes
                            }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
                                    {page.child_page.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Section 3: Latest Articles (Deep Fetch) */}
            <section>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem' }}>
                    最新文章
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                    {travelPosts.length > 0 ? (
                        travelPosts.slice(0, 6).map((post) => (
                            <Link key={post.id} href={`/${lang}/blog/${post.id}`} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                                    Travel
                                </span>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', flexGrow: 1 }}>{post.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                        {new Date(post.createdAt).toLocaleDateString('zh-TW')}
                                    </span>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p style={{ color: 'var(--text-secondary)' }}>暫無文章...</p>
                    )}
                </div>
            </section>
        </main>
    );
}
