import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft } from "lucide-react";
import { collections, paintings } from "../data/artData";

export function CollectionScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const collection = collections.find(c => c.id === id);
  
  if (!collection) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Collection not found</p>
      </div>
    );
  }

  const collectionPaintings = paintings.filter(p => 
    collection.paintings.includes(p.id)
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="px-6 py-5 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 -ml-2 hover:bg-accent rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="font-['Inter'] font-bold text-lg tracking-tight">Collection</h1>
        </div>
      </header>

      <div className="px-6 py-8 space-y-8 pb-12">
        {/* Collection Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h2 className="font-['Playfair_Display'] text-3xl">{collection.name}</h2>
          <p className="text-sm text-muted-foreground">{collection.period}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {collection.description}
          </p>
          <div className="inline-block px-3 py-1.5 bg-accent rounded-full">
            <span className="text-xs font-medium">{collection.count} Artworks</span>
          </div>
        </motion.div>

        {/* Paintings Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 gap-6"
        >
          {collectionPaintings.map((painting, index) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/painting/${painting.id}`)}
              className="cursor-pointer group"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-accent border border-border mb-3 group-hover:border-muted-foreground/30 transition-all">
                <img
                  src={painting.imageUrl}
                  alt={painting.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-['Playfair_Display'] text-lg">{painting.title}</h3>
                <p className="text-sm text-muted-foreground">{painting.artist} • {painting.year}</p>
                <p className="text-sm text-muted-foreground/80 line-clamp-2">{painting.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
