import { getBlogPosts, getBlocks } from "@/lib/notion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NotionRenderer } from "@/components/NotionRenderer";
import { getDictionary } from "../../dictionaries";

export default async function FashionPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const allPosts = await getBlogPosts();
    // Filter for Apparel/Fashion category
    const posts = allPosts.filter(post => post.category === "服飾" || post.category === "Apparel" || post.category === "Fashion");

    // Fetch intro content (blocks that are NOT child_page)
    const pageId = process.env.APPAREL_PAGE_ID;
    let introBlocks: any[] = [];
    if (pageId) {
        try {
            const blocks = await getBlocks(pageId, false);
            introBlocks = blocks.filter((block: any) => block.type !== "child_page");
        } catch (e) {
            console.error("Error fetching fashion intro blocks", e);
        }
    }

    return (
        <main className="container" style={{ padding: '4rem 2rem' }}>
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                    {dict.apparel}
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    {dict.fashion_subtitle}
                </p>
            </header>

            {/* Intro Content from Notion */}
            {introBlocks.length > 0 && (
                <div className="glass" style={{ padding: '3rem', marginBottom: '4rem' }}>
                    <NotionRenderer blocks={introBlocks} />
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                {posts.map((post) => (
                    <Link key={post.id} href={`/${lang}/blog/${post.id}`} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            {dict.apparel}
                        </span>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', flexGrow: 1 }}>{post.title}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                {new Date(post.createdAt).toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US')}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {posts.length === 0 && (
                <div className="glass" style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-secondary)', marginTop: '2rem' }}>
                    <p>{dict.fashion_empty}</p>
                </div>
            )}
        </main>
    );
}
