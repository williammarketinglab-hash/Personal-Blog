import { getBlogPosts } from "@/lib/notion";
import Link from "next/link";
import { ArrowRight, Mail, Calendar } from "lucide-react";
import { getDictionary } from "../dictionaries";

export const revalidate = 3600; // Revalidate every hour

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const posts = await getBlogPosts();
  const dict = await getDictionary(lang);

  return (
    <main className="container">
      {/* Hero Section */}
      <section style={{ textAlign: 'center', margin: '4rem 0 6rem', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,112,243,0.15) 0%, rgba(0,0,0,0) 70%)',
          zIndex: -1, pointerEvents: 'none'
        }} />
        <h1 className="title-gradient" style={{ fontSize: '4.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: 1.1 }}>
          {dict.home_hero_title_1}<br />{dict.home_hero_title_2}
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
          {dict.home_hero_subtitle_1}<br />
          {dict.home_hero_subtitle_2}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href={`/${lang}/booking`} className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            <Calendar size={20} style={{ marginRight: '8px' }} /> {dict.home_hero_cta_booking}
          </Link>
          <Link href={`/${lang}/subscribe`} className="glass" style={{ padding: '1rem 2rem', borderRadius: '50px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid var(--glass-border)', color: 'var(--text-primary)' }}>
            <Mail size={20} /> {dict.home_hero_cta_subscribe}
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', textAlign: 'center' }}>{dict.home_topics_title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {[
            { title: dict.marketing, desc: dict.home_topics_marketing_desc, link: `/${lang}/marketing`, color: '#0070f3' },
            { title: dict.ai_insights, desc: dict.home_topics_ai_desc, link: `/${lang}/ai-insights`, color: '#7928ca' },
            { title: dict.travel, desc: dict.home_topics_travel_desc, link: `/${lang}/travel`, color: '#f5a623' },
            { title: dict.apparel, desc: dict.home_topics_fashion_desc, link: `/${lang}/fashion`, color: '#ff0080' },
          ].map((cat) => (
            <Link key={cat.title} href={cat.link} className="glass" style={{ padding: '2rem', borderRadius: '24px', transition: 'all 0.3s', display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid var(--glass-border)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: cat.color, opacity: 0.8 }} />
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{cat.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Posts */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem' }}>{dict.home_posts_title}</h2>
          <Link href={`/${lang}/blog`} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{dict.home_posts_view_more}</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {posts.slice(0, 6).map((post) => (
            <Link key={post.id} href={`/${lang}/blog/${post.id}`} className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {post.category}
              </span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', flexGrow: 1 }}>{post.title}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {new Date(post.createdAt).toLocaleDateString(lang === 'zh-TW' ? 'zh-TW' : 'en-US')}
                </span>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="glass" style={{ margin: '6rem 0', padding: '4rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,112,243,0.1) 0%, rgba(0,0,0,0) 100%)' }}>
        <Mail size={40} style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }} />
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{dict.home_newsletter_title}</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{dict.home_newsletter_desc}</p>
        <div style={{ display: 'flex', gap: '0.5rem', maxWidth: '500px', margin: '0 auto' }}>
          <input type="email" placeholder={dict.home_newsletter_placeholder} className="glass" style={{ flexGrow: 1, padding: '1rem 1.5rem', borderRadius: '100px', fontSize: '1rem' }} />
          <button className="btn-primary">{dict.home_newsletter_btn}</button>
        </div>
      </section>
    </main>
  );
}
