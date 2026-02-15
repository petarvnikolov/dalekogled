import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ChevronLeft, MapPin } from "lucide-react";

const otherArtworks = [
  {
    id: 1,
    title: "The Haywain Triptych",
    year: "c. 1516",
    imageUrl: "https://images.unsplash.com/photo-1759940055041-7975ca830ffe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJvcXVlJTIwcGFpbnRpbmclMjBtYXN0ZXJwaWVjZSUyMGRldGFpbHxlbnwxfHx8fDE3NzA3OTQ0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "The Last Judgment",
    year: "c. 1482",
    imageUrl: "https://images.unsplash.com/photo-1521483756775-c37af386fce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtdXNldW0lMjBpbnRlcmlvciUyMGdhbGxlcnl8ZW58MXx8fHwxNzcwNzk0NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "The Temptation of St. Anthony",
    year: "c. 1501",
    imageUrl: "https://images.unsplash.com/photo-1742145415317-170c91dc7006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBwYWludGluZyUyMHJlbmFpc3NhbmNlJTIwYXJ0JTIwbXVzZXVtfGVufDF8fHx8MTc3MDc5NDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function ArtistScreen() {
  const navigate = useNavigate();

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
          <h1 className="font-['Inter'] font-bold text-lg tracking-tight">The Artist</h1>
        </div>
      </header>

      <div className="px-6 py-8 space-y-8">
        {/* Artist Portrait & Basic Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-accent border border-border">
              <img
                src="https://images.unsplash.com/photo-1732305829051-6e82db47d1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVyJTIwYXJ0aXN0JTIwcG9ydHJhaXQlMjBoaXN0b3JpY2FsfGVufDF8fHx8MTc3MDc5NDQwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hieronymus Bosch"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="font-['Playfair_Display'] text-2xl">Hieronymus Bosch</h2>
              <p className="text-sm text-muted-foreground">c. 1450 – 1516</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>'s-Hertogenbosch, Netherlands</span>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-4">
            <h3 className="font-['Inter'] font-bold text-lg">Biography</h3>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Hieronymus Bosch was a Dutch painter from the Early Netherlandish period. Known for his fantastic imagery, detailed landscapes, and illustrations of religious concepts and narratives, his work is characterized by intricate symbolism and extraordinary imagination.
              </p>
              <p>
                Little is known about Bosch's life or training. He spent most of his life in 's-Hertogenbosch, a thriving commercial center in the Duchy of Brabant. His paintings often depict sin and human moral failings, with complex, highly original, imaginative, and dense use of symbolic figures.
              </p>
              <p>
                Bosch's work was highly admired in his lifetime, and he received many commissions from both local patrons and foreign nobility. His influence can be seen in the work of later surrealist painters, though his own religious interpretations remain unique to the medieval worldview.
              </p>
            </div>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="space-y-3">
            <h3 className="font-['Inter'] font-bold text-lg">Artist's Journey</h3>
            <div className="relative h-48 bg-accent rounded-lg border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-8 h-8 mx-auto text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Interactive map of artist's life</p>
                  <p className="text-xs text-muted-foreground/70">Born and lived in 's-Hertogenbosch</p>
                </div>
              </div>
              {/* Map marker */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Other Artworks Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 pb-8"
        >
          <h3 className="font-['Inter'] font-bold text-lg">Other Notable Works</h3>
          <div className="grid grid-cols-2 gap-4">
            {otherArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-accent border border-border group-hover:border-muted-foreground/30 transition-all">
                  <img
                    src={artwork.imageUrl}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-2 space-y-1">
                  <p className="text-sm font-['Playfair_Display']">{artwork.title}</p>
                  <p className="text-xs text-muted-foreground">{artwork.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
