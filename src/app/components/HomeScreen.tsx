import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { Search, Sparkles, TrendingUp, Info, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { paintings, collections } from "../data/artData";

export function HomeScreen() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [showInfoMenu, setShowInfoMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleReplayOnboarding = () => {
    localStorage.removeItem("dalekogled_onboarding_complete");
    window.location.reload();
  };

  const featuredPainting = paintings.find(p => p.featured);
  const trendingPaintings = paintings.filter(p => !p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 pt-8 pb-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-['Inter'] font-black text-2xl tracking-tight"
            >
              DALEKOGLED
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-sm text-muted-foreground"
            >
              Stories Behind the Canvas
            </motion.p>
          </div>
          <div className="flex gap-2">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSearch(!showSearch)}
              className={`p-3 border rounded-full transition-colors ${
                showSearch 
                  ? 'bg-primary text-primary-foreground border-primary' 
                  : 'bg-accent border-border hover:bg-accent/80'
              }`}
            >
              {showSearch ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.03 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-3 bg-accent border border-border rounded-full hover:bg-accent/80 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 }}
              className="relative"
            >
              <button
                onClick={() => setShowInfoMenu(!showInfoMenu)}
                className="p-3 bg-accent border border-border rounded-full hover:bg-accent/80 transition-colors"
              >
                <Info className="w-5 h-5" />
              </button>
              
              {/* Info Menu */}
              {showInfoMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute right-0 top-14 w-56 bg-card backdrop-blur-xl border border-border rounded-xl overflow-hidden shadow-2xl z-50"
                >
                  <button
                    onClick={handleReplayOnboarding}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-accent transition-colors"
                  >
                    Replay Introduction
                  </button>
                  <button
                    onClick={() => {
                      navigate("/about");
                      setShowInfoMenu(false);
                    }}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-accent transition-colors border-t border-border"
                  >
                    About Dalekogled
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search artists, paintings, periods..."
                  autoFocus
                  className="w-full pl-11 pr-4 py-3.5 bg-accent border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:bg-background focus:border-primary/50 transition-all outline-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Featured Section */}
      {featuredPainting && (
        <section className="px-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <h2 className="font-['Inter'] font-bold text-lg tracking-tight">Featured Masterpiece</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/painting/${featuredPainting.id}`)}
            className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group border border-border"
          >
            <img
              src={featuredPainting.imageUrl}
              alt={featuredPainting.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            {/* Featured Badge */}
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full">
              <span className="text-xs text-yellow-500 font-bold">Featured</span>
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
              <p className="text-xs text-white/60 uppercase tracking-wider font-bold">{featuredPainting.period}</p>
              <h3 className="font-['Playfair_Display'] text-2xl mb-1 text-white">
                {featuredPainting.title}
              </h3>
              <p className="text-sm text-white/70">
                {featuredPainting.artist} • {featuredPainting.year}
              </p>
            </div>
          </motion.div>
        </section>
      )}

      {/* Trending Now */}
      <section className="px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <TrendingUp className="w-4 h-4 text-green-500" />
          <h2 className="font-['Inter'] font-bold text-lg tracking-tight">Trending Now</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {trendingPaintings.map((painting, index) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/painting/${painting.id}`)}
              className="cursor-pointer group"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-accent border border-border group-hover:border-muted-foreground/30 transition-all mb-2">
                <img
                  src={painting.imageUrl}
                  alt={painting.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h4 className="font-['Playfair_Display'] text-sm mb-0.5 line-clamp-1">
                {painting.title}
              </h4>
              <p className="text-xs text-muted-foreground line-clamp-1">{painting.artist}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="px-6 pb-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="font-['Inter'] font-bold text-lg tracking-tight mb-4"
        >
          Browse Collections
        </motion.h2>

        <div className="space-y-3">
          {collections.map((collection, index) => (
            <motion.button
              key={collection.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/collection/${collection.id}`)}
              className="w-full flex items-center justify-between p-4 bg-accent border border-border rounded-xl hover:bg-accent/60 hover:border-muted-foreground/30 transition-all"
            >
              <div className="text-left">
                <h3 className="font-['Playfair_Display'] text-sm mb-0.5">
                  {collection.name}
                </h3>
                <p className="text-xs text-muted-foreground">{collection.count} artworks • {collection.period}</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{collection.count}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Click outside to close menu */}
      {showInfoMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowInfoMenu(false)}
        />
      )}
    </div>
  );
}
