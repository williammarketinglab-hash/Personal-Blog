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
    }),
};

export const getDictionary = async (locale: string) => {
    return dictionaries[locale]?.() ?? dictionaries["zh-TW"]();
};
