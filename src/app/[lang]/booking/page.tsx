"use client";

import { useState } from 'react';
import { Calendar, Send, CheckCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function BookingPage() {
    const [submitted, setSubmitted] = useState(false);
    const params = useParams<{ lang: string }>();
    const lang = params.lang || 'zh-TW';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 這裡未來會串接 Supabase 或 API
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <main className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
                <div className="glass" style={{ padding: '4rem', maxWidth: '600px', margin: '0 auto' }}>
                    <CheckCircle size={64} style={{ color: '#10b981', margin: '0 auto 1.5rem' }} />
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>預約請求已送出</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        感謝您的諮詢！我已收到您的訊息，將會盡快透過 Email 與您聯繫安排時間。
                    </p>
                    <Link href={`/${lang}`} className="btn-primary" style={{ marginTop: '2rem' }}>返回首頁</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
                        預約諮詢
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        品牌成長遇到瓶頸？填寫下方表單，讓我們聊聊如何突破現狀。
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="glass" style={{ padding: '3rem', display: 'grid', gap: '2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>姓名</label>
                            <input required type="text" className="glass" style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box' }} placeholder="您的稱呼" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</label>
                            <input required type="email" className="glass" style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box' }} placeholder="contact@example.com" />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>諮詢主題</label>
                        <select className="glass" style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box', color: 'var(--text-primary)' }}>
                            <option value="consulting">品牌數位成長顧問</option>
                            <option value="ads">廣告代操優化</option>
                            <option value="content">內容行銷整合</option>
                            <option value="other">其他合作洽談</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>目前遇到的挑戰 / 需求描述</label>
                        <textarea required rows={5} className="glass" style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box', fontFamily: 'inherit' }} placeholder="請簡述您目前的業務狀況與想解決的問題..." />
                    </div>

                    <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                        <Send size={18} style={{ marginRight: '8px' }} />
                        送出預約請求
                    </button>
                </form>
            </div>
        </main>
    );
}
