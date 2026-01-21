import Link from "next/link";
import { Wrench } from "lucide-react";
import { getBlogPosts } from "@/lib/notion";

export default async function ToolsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const allPosts = await getBlogPosts();
    const posts = allPosts.filter(post => post.category === "工具");

    return (
        <main className="container" style={{ padding: '4rem 2rem' }}>
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                    工具
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                    生產力工具與應用推薦。
                </p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                {posts.map((post) => (
                    <Link key={post.id} href={`/${lang}/blog/${post.id}`} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                            Tools
                        </span>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>{post.title}</h2>
                        {/* Description not available in current `post` object <p style={{ color: 'var(--text-secondary)', flexGrow: 1 }}>{post.description}</p> */}
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                            {new Date(post.createdAt).toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                    </Link>
                ))}
            </div>
        </main>
    );
}
