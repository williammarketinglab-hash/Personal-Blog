import Link from "next/link";
import { Wrench, ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/notion";
import { getDictionary } from "../../dictionaries";

export default async function ToolsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const allPosts = await getBlogPosts();
    const toolsPosts = allPosts.filter(post => post.category === "工具" || post.category === "Tools");

    return (
        <main className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                        <Wrench size={40} />
                        {dict.tools}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                        {dict.tools_subtitle}
                    </p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                    {toolsPosts.map((post) => (
                        <Link key={post.id} href={`/${lang}/blog/${post.id}`} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                                {dict.tools}
                            </span>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', flexGrow: 1 }}>{post.title}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                    {new Date(post.createdAt).toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US')}
                                </span>
                                <ArrowRight size={16} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
