import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ChevronLeft, Eye, Flame, Leaf } from "lucide-react";

const symbolElements = [
  { 
    icon: Leaf, 
    title: "Garden of Eden", 
    description: "The left panel depicts paradise before the fall, showing the creation of Eve and innocent creatures in harmony.",
    color: "from-green-500/20 to-emerald-500/10"
  },
  { 
    icon: Eye, 
    title: "Earthly Pleasures", 
    description: "The central panel shows humanity indulging in earthly delights and sensual pleasures, a world of excess and temptation.",
    color: "from-blue-500/20 to-purple-500/10"
  },
  { 
    icon: Flame, 
    title: "Hell & Damnation", 
    description: "The right panel portrays the consequences of sin with nightmarish imagery of punishment and suffering.",
    color: "from-red-500/20 to-orange-500/10"
  },
];

export function SceneScreen() {
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
          <h1 className="font-['Inter'] font-bold text-lg tracking-tight">Scene & Context</h1>
        </div>
      </header>

      <div className="px-6 py-8 space-y-8 pb-12">
        {/* Historical Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="font-['Inter'] font-bold text-xl">Historical Context</h2>
          <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>
              Created during the Northern Renaissance (c. 1490–1510), this triptych was commissioned likely by Engelbrecht II of Nassau, or possibly by the House of Orange-Nassau. The work reflects the religious and moral concerns of late medieval Europe.
            </p>
            <p>
              The late 15th century was marked by religious turmoil, plague, and social upheaval. The Catholic Church's teachings on sin, redemption, and the afterlife heavily influenced art and culture. Bosch's work embodied these anxieties through vivid, imaginative allegory.
            </p>
            <p>
              Originally displayed in the palace of the Counts of Nassau in Brussels, the painting later entered the Spanish Royal Collection and now resides in the Museo del Prado in Madrid.
            </p>
          </div>
        </motion.div>

        {/* Triptych Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="font-['Inter'] font-bold text-xl">The Three Panels</h2>
          <div className="space-y-3">
            {symbolElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="relative overflow-hidden rounded-lg border border-border"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${element.color}`} />
                <div className="relative p-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-background/50 backdrop-blur-sm rounded-lg border border-border">
                      <element.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-['Playfair_Display'] text-base">{element.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-11">
                    {element.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Symbolism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="font-['Inter'] font-bold text-xl">Key Symbolism</h2>
          <div className="space-y-3">
            <SymbolCard
              title="The Strawberry"
              meaning="Represents fleeting earthly pleasure and the transience of life"
            />
            <SymbolCard
              title="Hybrid Creatures"
              meaning="Symbolize the corruption of nature and the consequences of sin"
            />
            <SymbolCard
              title="The Owl"
              meaning="Often associated with evil or heresy in medieval Christian iconography"
            />
            <SymbolCard
              title="Musical Instruments"
              meaning="Used as instruments of torture in Hell, subverting earthly pleasure"
            />
            <SymbolCard
              title="The Fountain"
              meaning="Represents the source of life but also the seduction of worldly desires"
            />
          </div>
        </motion.div>

        {/* Interpretation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-5 bg-gradient-to-br from-accent to-background border border-border rounded-lg space-y-3"
        >
          <h3 className="font-['Inter'] font-bold text-base">Modern Interpretation</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Scholars continue to debate the painting's exact meaning. Some view it as a moral warning against lust and sin, while others interpret it as a meditation on the lost innocence of Eden. The work's complexity allows for multiple readings, making it one of art history's most enigmatic masterpieces.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function SymbolCard({ title, meaning }: { title: string; meaning: string }) {
  return (
    <div className="flex gap-4 p-4 bg-accent border border-border rounded-lg hover:bg-accent/60 transition-colors">
      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-1.5" />
      <div className="flex-1 space-y-1">
        <h4 className="text-sm font-['Inter'] font-semibold">{title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">{meaning}</p>
      </div>
    </div>
  );
}
