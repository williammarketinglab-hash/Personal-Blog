"use client";

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

// Define a subset of the Dictionary interface needed for this component, 
// or use 'any' if import is tricky, but better to be safe. 
// Since Dictionary is in app/dictionaries.ts which is server-only (implied by imports likely), 
// we should define the prop type here.
interface BookingDict {
    booking_title: string;
    booking_desc: string;
    booking_form_name: string;
    booking_form_name_placeholder: string;
    booking_form_email: string;
    booking_form_topic: string;
    booking_form_topic_consulting: string;
    booking_form_topic_ads: string;
    booking_form_topic_content: string;
    booking_form_topic_other: string;
    booking_form_message: string;
    booking_form_message_placeholder: string;
    booking_form_submit: string;
    booking_success_title: string;
    booking_success_desc: string;
    booking_success_btn: string;
}

export default function BookingForm({ dict, lang }: { dict: BookingDict, lang: string }) {
    const [submitted, setSubmitted] = useState(false);

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
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{dict.booking_success_title}</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        {dict.booking_success_desc}
                    </p>
                    <a href={`/${lang}`} className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex', textDecoration: 'none' }}>{dict.booking_success_btn}</a>
                </div>
            </main>
        );
    }

    return (
        <main className="container" style={{ padding: '6rem 2rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
                        {dict.booking_title}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        {dict.booking_desc}
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="glass" style={{ padding: '3rem', display: 'grid', gap: '2rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{dict.booking_form_name}</label>
                            <input required type="text" className="glass" style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box', color: '#ffffff' }} placeholder={dict.booking_form_name_placeholder} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{dict.booking_form_email}</label>
                            <input required type="email" className="glass" style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box', color: '#ffffff' }} placeholder="contact@example.com" />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{dict.booking_form_topic}</label>
                        <select className="glass" style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box', color: '#ffffff' }}>
                            <option value="consulting">{dict.booking_form_topic_consulting}</option>
                            <option value="ads">{dict.booking_form_topic_ads}</option>
                            <option value="content">{dict.booking_form_topic_content}</option>
                            <option value="other">{dict.booking_form_topic_other}</option>
                        </select>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{dict.booking_form_message}</label>
                        <textarea required rows={5} className="glass" style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box', fontFamily: 'inherit', color: '#ffffff' }} placeholder={dict.booking_form_message_placeholder} />
                    </div>

                    <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                        <Send size={18} style={{ marginRight: '8px' }} />
                        {dict.booking_form_submit}
                    </button>
                </form>
            </div>
        </main>
    );
}
