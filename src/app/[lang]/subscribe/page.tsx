import { Mail } from "lucide-react";

export default function SubscribePage() {
    return (
        <main className="container" style={{ padding: '6rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="glass" style={{ padding: '4rem', maxWidth: '600px', width: '100%', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,112,243,0.1) 0%, rgba(0,0,0,0) 100%)' }}>
                <Mail size={48} style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', display: 'inline-block' }} />
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>訂閱電子週報</h1>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                    每週一封，分享我對 AI 趨勢、數位行銷與創業思維的最新洞察。
                    <br />加入 1000+ 訂閱者的行列。
                </p>

                <form style={{ display: 'grid', gap: '1rem' }}>
                    <input type="email" placeholder="name@example.com" className="glass" style={{ padding: '1rem 1.5rem', borderRadius: '12px', fontSize: '1rem', width: '100%', color: '#ffffff' }} />
                    <button className="btn-primary" style={{ justifyContent: 'center', width: '100%', fontSize: '1.1rem' }}>
                        立即訂閱
                    </button>
                </form>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                    No spam, unsubscribe anytime.
                </p>
            </div>
        </main>
    );
}
