import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Music, Search, Loader2 } from "lucide-react";
import axios from "axios";

interface SpotifyTrack {
  id: string;
  name: string;
  artist: string;
  album: string;
  preview_url: string | null;
  external_url: string;
  iframe: string;
}

const SenderQuestion = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    spotifyLink: "",
    celebrationDate: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SpotifyTrack[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<SpotifyTrack | null>(null);

  const celebrationDates = [
    { value: "christmas", label: "Christmas (December 25, 2024)" },
    { value: "newyear", label: "New Year (January 1, 2025)" },
    { value: "valentine", label: "Valentine's Day (February 14, 2025)" },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        searchSpotifyTracks();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const searchSpotifyTracks = async () => {
    setIsSearching(true);
    try {
      const response = await axios.get(
        `https://49kdgk28-3001.asse.devtunnels.ms/api/search?query=${encodeURIComponent(
          searchQuery
        )}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching tracks:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const selectTrack = (track: SpotifyTrack) => {
    setSelectedTrack(track);
    setFormData((prev) => ({ ...prev, spotifyLink: track.external_url }));
    setSearchQuery("");
    setSearchResults([]);
  };

  const spotifyIFrame = (track: SpotifyTrack) => {
    return `
      <iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/track/${track.id}?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    `;
  };

  // const renderSpotifyEmbed = (track: SpotifyTrack) => (
  //   <div dangerouslySetInnerHTML={{ __html: track.iframe }} />
  // );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#62929A] shadow-md sticky top-0 flex items-center justify-center rounded-b-lg"
      >
        <div className="container mx-auto px-6 py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-white font-medium text-center"
          >
            Alenerl Teams
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-2xl font-medium text-[#62929A] mb-6">
              Send Your Message to Erlang!
            </h2>

            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-700 mb-2">Sender Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#62929A] focus:ring-1 focus:ring-[#62929A] transition"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Message Content
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#62929A] focus:ring-1 focus:ring-[#62929A] transition"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* Spotify Search */}
              <div className="space-y-2">
                <label className="block text-gray-700 mb-2 flex items-center">
                  <Music className="w-4 h-4 mr-2" />
                  Spotify Song (Optional)
                </label>

                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for a song..."
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#62929A] focus:ring-1 focus:ring-[#62929A] transition"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {isSearching && (
                    <Loader2 className="absolute right-3 top-2.5 w-5 h-5 animate-spin text-gray-400" />
                  )}
                </div>

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="absolute z-10 mt-1 w-full max-w-md max-h-60 overflow-auto bg-white rounded-lg border shadow-lg">
                    {searchResults.map((track) => (
                      <button
                        key={track.id}
                        className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
                        onClick={() => selectTrack(track)}
                        type="button"
                      >
                        <Music className="w-4 h-4 text-gray-400" />
                        <div className="truncate">
                          <div className="font-medium">{track.name}</div>
                          <div className="text-sm text-gray-500 truncate">
                            {track.artist} • {track.album}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Selected Track with Spotify Player */}
                {selectedTrack && (
                  <div className="mt-2 space-y-4">
                    <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-2">
                      <Music className="w-4 h-4 text-[#62929A]" />
                      <div>
                        <div className="font-medium">{selectedTrack.name}</div>
                        <div className="text-sm text-gray-500">
                          {selectedTrack.artist} • {selectedTrack.album}
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full"
                      dangerouslySetInnerHTML={{
                        __html: spotifyIFrame(selectedTrack),
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-gray-700 mb-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Celebration Date
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#62929A] focus:ring-1 focus:ring-[#62929A] transition"
                  value={formData.celebrationDate}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      celebrationDate: e.target.value,
                    })
                  }
                >
                  <option value="">Select Date</option>
                  {celebrationDates.map((date) => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default SenderQuestion;
