import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/notion';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getBlogPosts();
    const baseUrl = 'https://william-lab.com';
    const languages = ['zh-TW', 'en'];

    // Static pages
    const staticRoutes = [
        '',
        '/marketing',
        '/ai-insights',
        '/travel',
        '/fashion',
        '/tools',
        '/booking',
        '/subscribe',
    ];

    const staticEntries: MetadataRoute.Sitemap = [];
    for (const lang of languages) {
        for (const route of staticRoutes) {
            staticEntries.push({
                url: `${baseUrl}/${lang}${route}`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: route === '' ? 1 : 0.8,
            });
        }
    }

    const postEntries: MetadataRoute.Sitemap = [];
    for (const lang of languages) {
        for (const post of posts) {
            postEntries.push({
                url: `${baseUrl}/${lang}/blog/${post.id}`,
                lastModified: new Date(post.createdAt),
                changeFrequency: 'weekly',
                priority: 0.7,
            });
        }
    }

    return [
        ...staticEntries,
        ...postEntries,
    ];
}
