import { getDictionary } from "../../dictionaries";
import SubscribeForm from "@/components/SubscribeForm";

export default async function SubscribePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return <SubscribeForm dict={dict} />;
}
