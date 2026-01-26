"use client";

import { Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function SubscribePage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <main className="container" style={{ padding: '6rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="glass" style={{ padding: '4rem', maxWidth: '600px', width: '100%', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,112,243,0.1) 0%, rgba(0,0,0,0) 100%)' }}>

                {status === 'success' ? (
                    <div style={{ animation: 'fadeIn 0.5s' }}>
                        <CheckCircle size={64} style={{ color: '#4caf50', marginBottom: '1.5rem', display: 'inline-block' }} />
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>訂閱成功！</h1>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                            感謝您的訂閱！<br />
                            第一封電子週報將於下週一寄出。
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="btn-primary"
                            style={{ justifyContent: 'center', width: '100%', fontSize: '1.1rem', background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }}
                        >
                            返回
                        </button>
                    </div>
                ) : (
                    <>
                        <Mail size={48} style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', display: 'inline-block' }} />
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>訂閱電子週報</h1>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                            每週一封，分享我對 AI 趨勢、數位行銷與創業思維的最新洞察。
                            <br />加入 1000+ 訂閱者的行列。
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                            <input
                                required
                                type="email"
                                placeholder="name@example.com"
                                className="glass"
                                disabled={status === 'submitting'}
                                style={{ padding: '1rem 1.5rem', borderRadius: '12px', fontSize: '1rem', width: '100%', color: '#ffffff' }}
                            />
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="btn-primary"
                                style={{ justifyContent: 'center', width: '100%', fontSize: '1.1rem', opacity: status === 'submitting' ? 0.7 : 1 }}
                            >
                                {status === 'submitting' ? '處理中...' : '立即訂閱'}
                            </button>
                        </form>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                            No spam, unsubscribe anytime.
                        </p>
                    </>
                )}
            </div>
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </main>
    );
}
