import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckoutForm from '@/components/CheckoutForm';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <CheckoutForm />
      <Footer />
    </main>
  );
}
