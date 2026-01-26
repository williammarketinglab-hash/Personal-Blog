"use client";

import { Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

// Helper Interface (similar to BookingForm)
// Ideally this should be imported or shared, but keeping it simple for now to avoid circular deps with server files
interface SubscribeDict {
    subscribe_page_title: string;
    subscribe_page_desc: string;
    subscribe_page_join: string;
    subscribe_form_placeholder: string;
    subscribe_form_submit: string;
    subscribe_form_submitting: string;
    subscribe_success_title: string;
    subscribe_success_desc: string;
    subscribe_success_btn: string;
    subscribe_spam_notice: string;
}

export default function SubscribeForm({ dict }: { dict: SubscribeDict }) {
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
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>{dict.subscribe_success_title}</h1>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                            {dict.subscribe_success_desc}
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="btn-primary"
                            style={{ justifyContent: 'center', width: '100%', fontSize: '1.1rem', background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }}
                        >
                            {dict.subscribe_success_btn}
                        </button>
                    </div>
                ) : (
                    <>
                        <Mail size={48} style={{ color: 'var(--accent-color)', marginBottom: '1.5rem', display: 'inline-block' }} />
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>{dict.subscribe_page_title}</h1>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                            {dict.subscribe_page_desc}
                            <br />{dict.subscribe_page_join}
                        </p>

                        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
                            <input
                                required
                                type="email"
                                placeholder={dict.subscribe_form_placeholder}
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
                                {status === 'submitting' ? dict.subscribe_form_submitting : dict.subscribe_form_submit}
                            </button>
                        </form>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
                            {dict.subscribe_spam_notice}
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
