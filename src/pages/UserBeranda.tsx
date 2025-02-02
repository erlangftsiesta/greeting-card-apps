import CardDeck from "../components/Beranda-1/CardDeck";
import Header from "../components/Beranda-1/Header";
import Footer from "../components/Beranda-1/Footer";
import Sidebar from "../components/Beranda-1/Sidebar";

const UserBeranda = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-purple-400 via-red-300 to-pink-400/90">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <CardDeck />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default UserBeranda;
