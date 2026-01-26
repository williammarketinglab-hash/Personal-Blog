import { getDictionary } from "../../dictionaries";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <main className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
                        {dict.about_title}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: 500 }}>
                        {dict.about_role_title}
                    </p>
                </header>

                <section className="glass" style={{ padding: '3rem', marginBottom: '3rem' }}>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        <span style={{ fontSize: '1.4rem', fontWeight: 700, display: 'block', marginBottom: '1rem' }}>{dict.about_intro_1}</span>
                        {dict.about_intro_2}
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        {dict.about_intro_3}
                    </p>
                </section>

                <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{dict.about_philosophy_title}</h2>
                    <blockquote style={{
                        fontSize: '1.5rem',
                        fontStyle: 'italic',
                        color: 'var(--accent-color)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.4
                    }}>
                        {dict.about_philosophy_quote}
                    </blockquote>
                </section>

                <section>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}>
                        {dict.about_experience_title}
                    </h2>
                    <div style={{ display: 'grid', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                {dict.about_exp_role_1}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                {dict.about_exp_desc_1}
                            </p>
                        </div>
                        <div className="glass" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                {dict.about_exp_role_2}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                {dict.about_exp_desc_2}
                            </p>
                        </div>
                        <div className="glass" style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                {dict.about_exp_role_3}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                {dict.about_exp_desc_3}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
