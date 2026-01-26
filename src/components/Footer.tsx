import Link from "next/link";
import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer({ lang = 'zh-TW' }: { lang?: string }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            borderTop: '1px solid var(--glass-border)',
            marginTop: 'auto',
            padding: '4rem 2rem 2rem',
            background: 'rgba(0,0,0,0.2)'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand Section */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }} className="title-gradient">
                            WILLIAM.LAB
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                            探索行銷科技、AI 趨勢與數位遊牧的無限可能。
                            <br />
                            Exploring MarTech, AI Trends, and Digital Nomadism.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
                            快速連結 / Quick Links
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <Link href={`/${lang}/marketing`} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', width: 'fit-content' }} className="hover-text">行銷技巧</Link>
                            <Link href={`/${lang}/ai-insights`} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', width: 'fit-content' }} className="hover-text">AI 洞察</Link>
                            <Link href={`/${lang}/travel`} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', width: 'fit-content' }} className="hover-text">旅人閱覽室</Link>
                            <Link href={`/${lang}/tools`} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', width: 'fit-content' }} className="hover-text">數位工具</Link>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
                            關注我們 / Follow Us
                        </h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                                <Facebook size={24} />
                            </a>
                            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                                <Instagram size={24} />
                            </a>
                            <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/williammarketinglab-hash" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} className="social-icon">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div style={{
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '0.8rem'
                }}>
                    © {currentYear} William Marketing Lab. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
