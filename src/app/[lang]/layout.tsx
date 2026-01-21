import type { Metadata } from "next";
import Script from "next/script";
import { getDictionary } from "../dictionaries";
import "../globals.css";

import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "William's Digital Growth & Tech Lab",
  description: "品牌電商成長顧問 × 科技產業分析。分享關於 AI、數位增長與技術本質的深度洞察。",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
        {/* Google Analytics via next/script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <Navigation lang={lang} dict={dict} />
        {children}
        <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{dict.footer}</p>
        </footer>
      </body>
    </html>
  );
}
