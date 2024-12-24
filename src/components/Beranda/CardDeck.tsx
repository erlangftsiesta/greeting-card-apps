import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Archive, Reply, Shuffle } from "lucide-react";
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";
import card4 from "../../assets/card-4.png";

interface Card {
  id: string;
  content: string;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl?: string;
  spotifySong?: string;
  isShuffling?: boolean
}

const CardDeck = () => {
  const [cards, setCards] = useState<Card[]>([
    {
      id: "card-1",
      title: "Meeting with Client",
      content: "Discussion about new project requirements and timeline",
      description:
        "Important meeting with ABC Company to discuss project scope and deliverables",
      category: "Work",
      date: "2024-12-21",
      imageUrl: card1, // Tambahkan path gambar sesuai kebutuhan
    },
    {
      id: "card-2",
      title: "Birthday Party",
      content: "Sarah's birthday celebration at Rainbow Cafe",
      description: "Don't forget to bring presents and party supplies",
      category: "Personal",
      date: "2024-12-22",
      imageUrl: card2, // Tambahkan path gambar sesuai kebutuhan
    },
    {
      id: "card-3",
      title: "Gym Session",
      content: "Weekly fitness training with personal trainer",
      description: "Focus on upper body and cardio exercises",
      category: "Health",
      date: "2024-12-23",
      imageUrl: card3, // Tambahkan path gambar sesuai kebutuhan
    },
    {
      id: "card-4",
      title: "Project Deadline",
      content: "Submit final project documentation",
      description:
        "Review and finalize all project deliverables before submission",
      category: "Work",
      date: "2024-12-24",
      imageUrl: card4, // Tambahkan path gambar sesuai kebutuhan
    },
    {
      id: "card-5",
      title: "Family Dinner",
      content: "Monthly family gathering at home",
      description: "Prepare dinner for 6 people, including vegetarian options",
      category: "Personal",
      date: "2024-12-25",
      imageUrl: card1, // Tambahkan path gambar sesuai kebutuhan
    },
  ]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleCardClick = (card: Card) => {
    if (!isShuffling) {
      setSelectedCard(card);
    }
  };

  const shuffleCards = () => {
    if (isShuffling) return;
    
    setIsShuffling(true);
    
    // Mark all cards as shuffling
    setCards(cards.map(card => ({ ...card, isShuffling: true })));

    // After animation, update the actual order and remove shuffling state
    setTimeout(() => {
      const shuffled = [...cards]
        .sort(() => Math.random() - 0.5)
        .map(card => ({ ...card, isShuffling: false }));
      setCards(shuffled);
      setIsShuffling(false);
    }, 800);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center gap-8">
        {/* Card Stack */}
        <div className="relative w-full max-w-md h-64 perspective-1000">
          <AnimatePresence>
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="absolute top-0 left-0 w-full cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                }}
                initial={false}
                animate={{
                  rotateY: card.isShuffling ? [0, -180, -360] : 0,
                  x: card.isShuffling ? [0, -100, 0] : index * 2,
                  y: card.isShuffling ? [0, -50, 0] : index * 2,
                  zIndex: cards.length - index,
                  scale: index === 0 ? 1 : 1 - index * 0.05,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
                whileHover={index === 0 && !isShuffling ? { scale: 1.05 } : {}}
                onClick={() => index === 0 && handleCardClick(card)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  {card.imageUrl && (
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-72 object-cover"
                    />
                  )}
                  {/* <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {card.description}
                    </p>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-2 mt-3">
          <div className="text-center text-primary font-medium">
            Cards Remain: {cards.length}
          </div>
          <button
            onClick={shuffleCards}
            disabled={isShuffling}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Shuffle className={isShuffling ? "animate-spin" : ""} size={20} />
            Shuffle Deck
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-xl w-full max-w-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-2">{selectedCard.title}</h2>
              {selectedCard.imageUrl && (
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img
                    src={selectedCard.imageUrl}
                    alt={selectedCard.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <p className="text-lg mb-2">{selectedCard.content}</p>
              <p className="text-gray-600 mb-4">{selectedCard.description}</p>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                  {selectedCard.category}
                </span>
                <span className="text-sm text-gray-500">{selectedCard.date}</span>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white">
                  <Archive size={20} />
                  Archive
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary">
                  <Reply size={20} />
                  Reply
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardDeck;