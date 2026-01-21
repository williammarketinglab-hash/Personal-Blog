import { getBlogPosts } from "@/lib/notion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function AiInsightsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const allPosts = await getBlogPosts();
    const posts = allPosts.filter(post => post.category === "AI 科技");

    return (
        <main className="container" style={{ padding: '4rem 2rem' }}>
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                    AI 科技金融
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    探索 AI 趨勢、工具應用與市場分析，掌握科技金融新脈動。
                </p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                {posts.map((post) => (
                    <Link key={post.id} href={`/${lang}/blog/${post.id}`} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            AI & Tech
                        </span>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', flexGrow: 1 }}>{post.title}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                {new Date(post.createdAt).toLocaleDateString('zh-TW')}
                            </span>
                            <ArrowRight size={16} />
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
