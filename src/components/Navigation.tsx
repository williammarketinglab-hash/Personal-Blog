"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
    lang: string;
    dict: {
        home: string;
        about: string;
        blog: string;
        marketing: string;
        ai_insights: string;
        tech_pulse: string;
        travel: string;
        apparel: string;
        tools: string;
        subscribe: string;
    };
}

export default function Navigation({ lang, dict }: NavigationProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const controlNavbar = () => {
            const win = typeof window !== 'undefined' ? window : (globalThis as any).window;
            if (!win) return;

            const currentScrollY = win.scrollY;

            if (currentScrollY === 0) {
                setIsVisible(true);
                setLastScrollY(0);
                return;
            }

            // Hide only on scroll down AND if scrolled past 100px
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                // Show on scroll up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        const win = typeof window !== 'undefined' ? window : (globalThis as any).window;
        if (win) {
            win.addEventListener("scroll", controlNavbar);
            return () => win.removeEventListener("scroll", controlNavbar);
        }
    }, [lastScrollY]);

    const navLinks = [
        { name: dict.marketing, href: `/${lang}/marketing` },
        { name: dict.ai_insights, href: `/${lang}/ai-insights` },
        { name: dict.travel, href: `/${lang}/travel` },
        { name: dict.apparel, href: `/${lang}/fashion` },
        { name: dict.tools, href: `/${lang}/tools` },
        { name: dict.about, href: `/${lang}/about` },
    ];

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(`${path}/`);
    };

    return (
        <nav
            className="glass"
            style={{
                position: "sticky",
                top: "1rem",
                zIndex: 100,
                margin: "1rem auto",
                maxWidth: "900px",
                padding: "0.8rem 2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backdropFilter: "blur(20px)",
                transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                transform: isVisible ? "translateY(0)" : "translateY(-150%)",
                opacity: isVisible ? 1 : 0,
            }}
        >
            <div style={{ fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.5px" }}>
                <Link href={`/${lang}`} style={{ textDecoration: "none", color: "var(--text-primary)" }}>
                    WILLIAM.LAB
                </Link>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "1.5rem",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    alignItems: "center",
                }}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                        style={{
                            color: isActive(link.href) ? "var(--text-primary)" : "inherit",
                            transition: "color 0.2s",
                        }}
                    >
                        {link.name}
                    </Link>
                ))}
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    {/* Language Switcher can be improved */}
                    <Link href="/zh-TW" style={{ opacity: lang === 'zh-TW' ? 1 : 0.5, fontSize: '0.8rem', textDecoration: 'none', color: 'var(--text-primary)' }}>中文</Link>
                    <span style={{ fontSize: '0.8rem', opacity: 0.3 }}>|</span>
                    <Link href="/en" style={{ opacity: lang === 'en' ? 1 : 0.5, fontSize: '0.8rem', textDecoration: 'none', color: 'var(--text-primary)' }}>EN</Link>
                </div>
                <Link
                    href={`/${lang}/subscribe`}
                    className="btn-primary"
                    style={{ padding: "0.5rem 1rem", fontSize: "0.8rem" }}
                >
                    {dict.subscribe}
                </Link>
            </div>
        </nav>
    );
}
