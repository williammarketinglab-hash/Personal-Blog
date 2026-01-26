import { getBlogPosts, getBlocks } from "@/lib/notion";
import Link from "next/link";
import { Map, ArrowRight } from "lucide-react";
import { NotionRenderer } from "@/components/NotionRenderer";
import { getDictionary } from "../../dictionaries";

export default async function TravelPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const allPosts = await getBlogPosts();
    const travelPosts = allPosts.filter(post => post.category === "旅遊" || post.category === "Travel");

    // Fetch continent links (nested pages in Notion)
    const pageId = process.env.TRAVEL_PAGE_ID;
    let continentBlocks: any[] = [];
    if (pageId) {
        try {
            const blocks = await getBlocks(pageId, false);
            // In Travel page, child_page blocks are continents/countries
            continentBlocks = blocks.filter((block: any) => block.type === "child_page");
        } catch (e) {
            console.error("Error fetching travel blocks", e);
        }
    }

    return (
        <main className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                        <Map size={40} />
                        {dict.travel}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        {dict.travel_subtitle}
                    </p>
                </header>

                {/* Continents Grid */}
                <section style={{ marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>
                        {dict.travel_continents}
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {continentBlocks.map((block: any) => (
                            <Link key={block.id} href={`/${lang}/travel/${block.id}`} className="glass" style={{ padding: '2rem', textAlign: 'center', transition: 'transform 0.3s' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{block.child_page.title}</h3>
                            </Link>
                        ))}
                    </div>
                </section>

                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}>
                    {dict.travel_posts_title}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                    {travelPosts.length > 0 ? (
                        travelPosts.slice(0, 6).map((post) => (
                            <Link key={post.id} href={`/${lang}/blog/${post.id}`} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                                    {dict.travel}
                                </span>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', flexGrow: 1 }}>{post.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                        {new Date(post.createdAt).toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </span>
                                    <ArrowRight size={16} />
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p style={{ color: 'var(--text-secondary)' }}>{dict.travel_empty}</p>
                    )}
                </div>
            </div>
        </main>
    );
}
