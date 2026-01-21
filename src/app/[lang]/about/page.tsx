import React from 'react';

export default function AboutPage() {
    return (
        <main className="container" style={{ padding: '6rem 2rem' }}>
            <div className="glass" style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
                    關於我
                </h1>

                <div className="blog-content">
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
                        品牌電商成長顧問 × 廣告代操 × 行銷內容整合
                    </h3>
                    <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                        嗨，我是 William。
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        我擅長從宏觀視角洞察問題，快速掌握品牌與市場核心關鍵，具備強大的環境適應力與整合執行力。
                        熱衷於從數據中拆解消費行為邏輯，並以清晰思維打造具體可執行的策略。
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        讓我能同時處理策略制定與落地執行，從內容規劃、素材優化、數據分析到投放操作，實現高效率「一站式整合行銷服務」。
                        我們不預測股價漲跌，我們專注於科技產業的「技術本質」與「市場版圖」。
                    </p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '3rem 0 1.5rem', color: 'var(--text-primary)' }}>服務理念</h2>
                    <blockquote style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem', fontStyle: 'italic', margin: '2rem 0', color: 'var(--text-primary)' }}>
                        「真正的專業，是能夠以全局觀拆解問題，用清晰邏輯創造成果。」
                    </blockquote>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '3rem 0 1.5rem', color: 'var(--text-primary)' }}>專業經歷</h2>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {[
                            {
                                role: "品牌電商成長顧問",
                                company: "Independent Consultant",
                                period: "2023 - Present",
                                desc: "協助品牌進行 D2C 轉型，制定全通路行銷策略。專注於轉換率優化 (CRO) 與會員生命週期價值 (LTV) 提升。"
                            },
                            {
                                role: "數位行銷經理",
                                company: "Fashion Retail Group",
                                period: "2020 - 2023",
                                desc: "主導年度行銷預算配置與廣告投放策略。成功在預算不變情況下，達成營收 MoM 成長 45% 的成就。"
                            },
                            {
                                role: "內容策略師",
                                company: "Digital Agency",
                                period: "2018 - 2020",
                                desc: "負責品牌內容規劃與 SEO 佈局，透過精準的內容行銷策略，協助客戶自然流量成長 200%。"
                            }
                        ].map((job, i) => (
                            <div key={i} style={{ borderLeft: '2px solid var(--glass-border)', paddingLeft: '1.5rem', position: 'relative' }}>
                                <div style={{ position: 'absolute', left: '-5px', top: '0', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)' }}></div>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{job.role} <span style={{ fontWeight: 400, fontSize: '1rem', color: 'var(--text-secondary)' }}>@ {job.company}</span></h4>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.8rem' }}>{job.period}</span>
                                <p style={{ fontSize: '1rem', color: 'var(--text-primary)', opacity: 0.9 }}>{job.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
