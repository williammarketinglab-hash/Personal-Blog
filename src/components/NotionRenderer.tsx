import React from 'react';

const Text = ({ title }: { title: any[] }) => {
    if (!title) return null;
    return (
        <>
            {title.map((value, i) => {
                const {
                    annotations: { bold, code, color, italic, strikethrough, underline },
                    text,
                } = value;
                return (
                    <span
                        key={i}
                        style={{
                            fontWeight: bold ? '700' : 'inherit',
                            fontStyle: italic ? 'italic' : 'inherit',
                            textDecoration: [
                                strikethrough ? 'line-through' : '',
                                underline ? 'underline' : '',
                            ].join(' '),
                            color: color !== 'default' ? color : 'inherit',
                            backgroundColor: code ? 'rgba(255,255,255,0.1)' : 'transparent',
                            padding: code ? '0.2rem 0.4rem' : '0',
                            borderRadius: code ? '4px' : '0',
                            fontFamily: code ? 'monospace' : 'inherit',
                        }}
                    >
                        {text.link ? <a href={text.link.url} style={{ color: 'var(--accent-color)' }}>{text.content}</a> : text.content}
                    </span>
                );
            })}
        </>
    );
};

export const renderBlock = (block: any) => {
    const { type, id } = block;
    const value = block[type];

    switch (type) {
        case 'paragraph':
            return (
                <p key={id} style={{ marginBottom: '1.5rem', color: 'var(--text-primary)', opacity: 0.9 }}>
                    <Text title={value.rich_text} />
                </p>
            );
        case 'heading_1':
            return (
                <h1 key={id} style={{ fontSize: '2.5rem', fontWeight: 800, margin: '3rem 0 1.5rem', lineHeight: 1.2 }}>
                    <Text title={value.rich_text} />
                </h1>
            );
        case 'heading_2':
            return (
                <h2 key={id} style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1.2rem' }}>
                    <Text title={value.rich_text} />
                </h2>
            );
        case 'heading_3':
            return (
                <h3 key={id} style={{ fontSize: '1.4rem', fontWeight: 700, margin: '2rem 0 1.5rem' }}>
                    <Text title={value.rich_text} />
                </h3>
            );
        case 'bulleted_list_item':
        case 'numbered_list_item':
            return (
                <li key={id} style={{ marginBottom: '0.5rem', marginLeft: '1.5rem' }}>
                    <Text title={value.rich_text} />
                </li>
            );
        case 'to_do':
            return (
                <div key={id} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <input type="checkbox" readOnly checked={value.checked} />
                    <Text title={value.rich_text} />
                </div>
            );
        case 'toggle':
            return (
                <details key={id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid var(--glass-border)', borderRadius: '12px' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
                        <Text title={value.rich_text} />
                    </summary>
                    <div style={{ padding: '1rem 0 0' }}>
                        {block.children?.map((child: any) => renderBlock(child))}
                    </div>
                </details>
            );
        case 'code':
            return (
                <pre key={id} className="glass" style={{ padding: '1.5rem', overflowX: 'auto', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                    <code>
                        <Text title={value.rich_text} />
                    </code>
                </pre>
            );
        case 'quote':
            return (
                <blockquote key={id} style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    <Text title={value.rich_text} />
                </blockquote>
            );
        case 'callout':
            return (
                <div key={id} className="glass" style={{ display: 'flex', gap: '1rem', padding: '1.5rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.2rem' }}>{value.icon?.emoji || '💡'}</span>
                    <div><Text title={value.rich_text} /></div>
                </div>
            );
        case 'column_list':
            return (
                <div key={id} style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem', alignItems: 'flex-start', width: '100%' }}>
                    {block.children?.map((child: any) => renderBlock(child))}
                </div>
            );
        case 'column':
            return (
                <div key={id} style={{ flex: 1, minWidth: '300px' }}>
                    {block.children?.map((child: any) => renderBlock(child))}
                </div>
            );
        case 'image':
            const src = value.type === 'external' ? value.external.url : value.file.url;
            const caption = value.caption ? value.caption[0]?.plain_text : '';
            return (
                <figure key={id} style={{ margin: '2rem 0' }}>
                    <img src={src} alt={caption} style={{ width: '100%', borderRadius: '16px', display: 'block' }} />
                    {caption && <figcaption style={{ textAlign: 'center', marginTop: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{caption}</figcaption>}
                </figure>
            );
        default:
            return null;
    }
};
