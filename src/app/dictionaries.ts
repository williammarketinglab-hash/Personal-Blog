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
    // About
    about_title: string;
    about_role_title: string;
    about_intro_1: string;
    about_intro_2: string;
    about_intro_3: string;
    about_philosophy_title: string;
    about_philosophy_quote: string;
    about_experience_title: string;
    about_exp_role_1: string;
    about_exp_desc_1: string;
    about_exp_role_2: string;
    about_exp_desc_2: string;
    about_exp_role_3: string;
    about_exp_desc_3: string;
    // Booking
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
    // Categories
    marketing_subtitle: string;
    ai_insights_title_page: string;
    ai_insights_subtitle: string;
    fashion_subtitle: string;
    fashion_empty: string;
    tools_subtitle: string;
    travel_subtitle: string;
    travel_continents: string;
    travel_posts_title: string;
    travel_empty: string;
    // Subscribe
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
        // About
        about_title: "About Me",
        about_role_title: "Ecommerce Growth Consultant × Ads Management × Content Strategy",
        about_intro_1: "Hi, I'm William.",
        about_intro_2: "I specialize in identifying core brand and market issues from a macro perspective, with strong adaptability and execution. I love decoding consumer behavior from data and crafting actionable strategies.",
        about_intro_3: "From strategy formulation to execution—content planning, creative optimization, data analysis, and ad operations—I provide efficient 'One-Stop Integrated Marketing Services'. We don't predict stock prices; we focus on 'Tech Essence' and 'Market Landscape'.",
        about_philosophy_title: "Philosophy",
        about_philosophy_quote: "True professionalism is deconstructing problems with a holistic view and creating results with clear logic.",
        about_experience_title: "Professional Experience",
        about_exp_role_1: "Brand Ecommerce Growth Consultant",
        about_exp_desc_1: "Assisting brands in D2C transformation and omnichannel marketing strategy. Focusing on CRO and LTV enhancement.",
        about_exp_role_2: "Digital Marketing Manager",
        about_exp_desc_2: "Led annual marketing budget and ad strategy. Achieved 45% MoM revenue growth within the same budget.",
        about_exp_role_3: "Content Strategist",
        about_exp_desc_3: "Responsible for brand content planning and SEO. Achieved 200% organic traffic growth through precise content marketing.",
        // Booking
        booking_title: "Book Consultation",
        booking_desc: "Facing growth bottlenecks? Fill out the form below, and let's talk about how to break through.",
        booking_form_name: "Name",
        booking_form_name_placeholder: "Your Name",
        booking_form_email: "Email",
        booking_form_topic: "Consultation Topic",
        booking_form_topic_consulting: "Digital Growth Consulting",
        booking_form_topic_ads: "Ads Management Optimization",
        booking_form_topic_content: "Content Marketing Integration",
        booking_form_topic_other: "Other Inquiries",
        booking_form_message: "Current Challenges / Requirements",
        booking_form_message_placeholder: "Briefly describe your current business status and the problems you want to solve...",
        booking_form_submit: "Submit Request",
        booking_success_title: "Request Sent",
        booking_success_desc: "Thank you for your inquiry! received your message and will contact you via Email shortly to arrange a time.",
        booking_success_btn: "Back to Home",
        // Categories
        marketing_subtitle: "Deconstructing essential marketing mindset for startups, from SEO to ad operations guide.",
        ai_insights_title_page: "AI Tech Finance",
        ai_insights_subtitle: "Exploring AI trends, tool applications, and market analysis. Mastering the pulse of FinTech.",
        fashion_subtitle: "Brand Image & Style Guide.",
        fashion_empty: "Fashion and brand content is being prepared...",
        tools_subtitle: "Productivity tools and application recommendations.",
        travel_subtitle: "Digital Nomad & World Footprints.",
        travel_continents: "Explore Continents",
        travel_posts_title: "Latest Articles",
        travel_empty: "No articles yet...",
        // Subscribe
        subscribe_page_title: "Subscribe to Newsletter",
        subscribe_page_desc: "Weekly AI tools & ecommerce strategies.",
        subscribe_page_join: "Join 1000+ subscribers.",
        subscribe_form_placeholder: "name@example.com",
        subscribe_form_submit: "Subscribe Now",
        subscribe_form_submitting: "Submitting...",
        subscribe_success_title: "Subscription Successful!",
        subscribe_success_desc: "Thank you for subscribing! The first newsletter will be sent next Monday.",
        subscribe_success_btn: "Go Back",
        subscribe_spam_notice: "No spam, unsubscribe anytime.",
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
        // About
        about_title: "關於我",
        about_role_title: "品牌電商成長顧問 × 廣告代操 × 行銷內容整合",
        about_intro_1: "嗨，我是 William。",
        about_intro_2: "我擅長從宏觀視角洞察問題，快速掌握品牌與市場核心關鍵，具備強大的環境適應力與整合執行力。熱衷於從數據中拆解消費行為邏輯，並以清晰思維打造具體可執行的策略。",
        about_intro_3: "讓我能同時處理策略制定與落地執行，從內容規劃、素材優化、數據分析到投放操作，實現高效率「一站式整合行銷服務」。我們不預測股價漲跌，我們專注於科技產業的「技術本質」與「市場版圖」。",
        about_philosophy_title: "服務理念",
        about_philosophy_quote: "「真正的專業，是能夠以全局觀拆解問題，用清晰邏輯創造成果。」",
        about_experience_title: "專業經歷",
        about_exp_role_1: "品牌電商成長顧問",
        about_exp_desc_1: "協助品牌進行 D2C 轉型，制定全通路行銷策略。專注於轉換率優化 (CRO) 與會員生命週期價值 (LTV) 提升。",
        about_exp_role_2: "數位行銷經理",
        about_exp_desc_2: "主導年度行銷預算配置與廣告投放策略。成功在預算不變情況下，達成營收 MoM 成長 45% 的成就。",
        about_exp_role_3: "內容策略師",
        about_exp_desc_3: "負責品牌內容規劃與 SEO 佈局，透過精準的內容行銷策略，協助客戶自然流量成長 200%。",
        // Booking
        booking_title: "預約諮詢",
        booking_desc: "品牌成長遇到瓶頸？填寫下方表單，讓我們聊聊如何突破現狀。",
        booking_form_name: "姓名",
        booking_form_name_placeholder: "您的稱呼",
        booking_form_email: "Email",
        booking_form_topic: "諮詢主題",
        booking_form_topic_consulting: "品牌數位成長顧問",
        booking_form_topic_ads: "廣告代操優化",
        booking_form_topic_content: "內容行銷整合",
        booking_form_topic_other: "其他合作洽談",
        booking_form_message: "目前遇到的挑戰 / 需求描述",
        booking_form_message_placeholder: "請簡述您目前的業務狀況與想解決的問題...",
        booking_form_submit: "送出預約請求",
        booking_success_title: "預約請求已送出",
        booking_success_desc: "感謝您的諮詢！我已收到您的訊息，將會盡快透過 Email 與您聯繫安排時間。",
        booking_success_btn: "返回首頁",
        // Categories
        marketing_subtitle: "拆解創業必備的行銷思維，從 SEO 到廣告投放的實戰指南。",
        ai_insights_title_page: "AI 科技金融",
        ai_insights_subtitle: "探索 AI 趨勢、工具應用與市場分析，掌握科技金融新脈動。",
        fashion_subtitle: "品牌形象與風格指南。",
        fashion_empty: "服飾與品牌內容準備中...",
        tools_subtitle: "生產力工具與應用推薦。",
        travel_subtitle: "數位遊牧與世界足跡。",
        travel_continents: "探索各大洲",
        travel_posts_title: "最新文章",
        travel_empty: "暫無文章...",
        // Subscribe
        subscribe_page_title: "訂閱電子週報",
        subscribe_page_desc: "每週一封，分享我對 AI 趨勢、數位行銷與創業思維的最新洞察。",
        subscribe_page_join: "加入 1000+ 訂閱者的行列。",
        subscribe_form_placeholder: "name@example.com",
        subscribe_form_submit: "立即訂閱",
        subscribe_form_submitting: "處理中...",
        subscribe_success_title: "訂閱成功！",
        subscribe_success_desc: "感謝您的訂閱！第一封電子週報將於下週一寄出。",
        subscribe_success_btn: "返回",
        subscribe_spam_notice: "No spam, unsubscribe anytime.",
    }),
};

export const getDictionary = async (locale: string) => {
    return dictionaries[locale]?.() ?? dictionaries["zh-TW"]();
};
