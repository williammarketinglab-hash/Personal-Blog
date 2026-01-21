import { getPage, getBlocks } from "@/lib/notion";
import { renderBlock } from "@/components/NotionRenderer";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import Link from "next/link";

export const revalidate = 3600;

export default async function PostPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
    const { lang, id } = await params;

    try {
        const page: any = await getPage(id);
        // Fetch blocks recursively to ensure all content (including columns) is retrieved
        const blocks = await getBlocks(id, true);

        if (!page) {
            notFound();
        }

        const title = page.properties.title?.title[0]?.plain_text || "無標題";
        const date = new Date(page.created_time).toLocaleDateString("zh-TW");

        return (
            <article className="container" style={{ maxWidth: '800px', padding: '6rem 2rem' }}>
                <Link href={`/${lang}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '0.9rem' }}>
                    <ArrowLeft size={16} /> 返回首頁
                </Link>

                <header style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Clock size={14} /> {date}
                        </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Tag size={14} /> 分析解讀
                        </span>
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem' }}>{title}</h1>
                    <div style={{ height: '1px', background: 'linear-gradient(90deg, var(--accent-color) 0%, transparent 100%)', width: '100px' }}></div>
                </header>

                <section className="blog-content">
                    {blocks.map((block: any) => renderBlock(block))}
                </section>

                <footer style={{ marginTop: '6rem', paddingTop: '4rem', borderTop: '1px solid var(--glass-border)' }}>
                    <div className="glass" style={{ padding: '3rem', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>喜歡這篇文章嗎？</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>訂閱 William 的週報，每週獲取最新的數位增長情報。</p>
                        <div style={{ display: 'flex', gap: '0.5rem', maxWidth: '400px', margin: '0 auto' }}>
                            <input type="email" placeholder="你的電子郵件" className="glass" style={{ flexGrow: 1, padding: '0.8rem 1.2rem', borderRadius: '100px' }} />
                            <button className="btn-primary">訂閱</button>
                        </div>
                    </div>
                </footer>
            </article>
        );
    } catch (error) {
        console.error("Error fetching post:", error);
        notFound();
    }
}
