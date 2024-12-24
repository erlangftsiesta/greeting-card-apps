import CardDeck from "../components/Beranda/CardDeck";
import Footer from "../components/Beranda/Footer";
import Header from "../components/Beranda/Header";


const UserBeranda = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-100 to-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <CardDeck />
      </main>
      <Footer />
    </div>
  );
};

export default UserBeranda;
