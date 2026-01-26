import { getDictionary } from '../../dictionaries';
import BookingForm from '@/components/BookingForm';

export default async function BookingPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return <BookingForm dict={dict} lang={lang} />;
}
