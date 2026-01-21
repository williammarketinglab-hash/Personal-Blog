import "server-only";

interface Dictionary {
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
    footer: string;
    home_hero_title_1: string;
    home_hero_title_2: string;
    home_hero_subtitle_1: string;
    home_hero_subtitle_2: string;
    home_hero_cta_booking: string;
    home_hero_cta_subscribe: string;
    home_topics_title: string;
    home_topics_marketing_desc: string;
    home_topics_ai_desc: string;
    home_topics_travel_desc: string;
    home_topics_fashion_desc: string;
    home_posts_title: string;
    home_posts_view_more: string;
    home_newsletter_title: string;
    home_newsletter_desc: string;
    home_newsletter_placeholder: string;
    home_newsletter_btn: string;
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
    "en": () => Promise.resolve({
        home: "Home",
        about: "About Me",
        blog: "Blog",
        marketing: "Marketing",
        ai_insights: "AI Insights",
        tech_pulse: "Tech Pulse",
        travel: "Travel",
        apparel: "Fashion",
        tools: "Tools",
        subscribe: "Subscribe",
        footer: "© 2026 William's Lab. Built with Next.js & Notion API.",
        home_hero_title_1: "William's",
        home_hero_title_2: "Lab",
        home_hero_subtitle_1: "Brand Ecommerce Growth Consultant × Tech Industry Analysis.",
        home_hero_subtitle_2: "Exploring Digital Growth and Tech Essence.",
        home_hero_cta_booking: "Book Consultation",
        home_hero_cta_subscribe: "Newsletter",
        home_topics_title: "Explore Topics",
        home_topics_marketing_desc: "SEO, Ads & Growth Strategy",
        home_topics_ai_desc: "Trends & Tools",
        home_topics_travel_desc: "Digital Nomad & Footprints",
        home_topics_fashion_desc: "Brand Image & Style Guide",
        home_posts_title: "Latest Posts",
        home_posts_view_more: "View More →",
        home_newsletter_title: "Get First-hand Digital Growth Intel",
        home_newsletter_desc: "Weekly AI tools & ecommerce strategies.",
        home_newsletter_placeholder: "Your Email",
        home_newsletter_btn: "Subscribe",
    }),
    "zh-TW": () => Promise.resolve({
        home: "首頁",
        about: "關於我",
        blog: "部落格",
        marketing: "行銷技巧",
        ai_insights: "AI 洞察",
        tech_pulse: "科技脈動",
        travel: "旅遊",
        apparel: "服飾",
        tools: "工具",
        subscribe: "訂閱",
        footer: "© 2026 William's Lab. 使用 Next.js & Notion API 建置。",
        home_hero_title_1: "William's",
        home_hero_title_2: "Lab",
        home_hero_subtitle_1: "品牌電商成長顧問 × 科技產業分析。",
        home_hero_subtitle_2: "探索數位增長與科技本質的實驗室。",
        home_hero_cta_booking: "預約諮詢",
        home_hero_cta_subscribe: "訂閱週報",
        home_topics_title: "探索主題",
        home_topics_marketing_desc: "SEO、廣告投放與增長策略",
        home_topics_ai_desc: "趨勢分析與工具應用",
        home_topics_travel_desc: "數位遊牧與世界足跡",
        home_topics_fashion_desc: "品牌形象與風格指南",
        home_posts_title: "最新文章",
        home_posts_view_more: "看更多文章 →",
        home_newsletter_title: "掌握第一手數位增長情報",
        home_newsletter_desc: "每週分享 AI 工具與電商增長策略，不錯過任何產業脈動。",
        home_newsletter_placeholder: "你的電子郵件",
        home_newsletter_btn: "訂閱",
    }),
};

export const getDictionary = async (locale: string) => {
    return dictionaries[locale]?.() ?? dictionaries["zh-TW"]();
};
