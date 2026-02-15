import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ChevronLeft, Droplets, Layers, Sparkles } from "lucide-react";

const materials = [
  { icon: Droplets, label: "Oil on Oak Panels", description: "Traditional medium for durability" },
  { icon: Layers, label: "Triptych Format", description: "Three hinged panels forming one work" },
  { icon: Sparkles, label: "Natural Pigments", description: "Earth tones and mineral colors" },
];

export function TechniqueScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="px-6 py-5 border-b border-white/10 sticky top-0 bg-black/95 backdrop-blur-sm z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 -ml-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="font-['Playfair_Display'] text-lg tracking-wide">Technique & Materials</h1>
        </div>
      </header>

      <div className="px-6 py-8 space-y-8 pb-12">
        {/* Hero Image - Detail Shot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-56 rounded-lg overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1756363212205-2e242580a65c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGNhbnZhcyUyMHRleHR1cmUlMjBjbG9zZXVwfGVufDF8fHx8MTc3MDc5NDQwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Close-up of painting technique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs text-white/70">Detail showing brushwork and layering technique</p>
          </div>
        </motion.div>

        {/* Materials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="font-['Playfair_Display'] text-xl">Materials Used</h2>
          <div className="space-y-3">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-lg"
              >
                <div className="p-2 bg-white/10 rounded-lg">
                  <material.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-['Playfair_Display'] mb-1">{material.label}</h3>
                  <p className="text-xs text-white/60">{material.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="font-['Playfair_Display'] text-xl">Painting Process</h2>
          <div className="space-y-4 text-sm text-white/70 leading-relaxed">
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-['Playfair_Display']">
                  1
                </div>
                <div>
                  <h4 className="font-['Playfair_Display'] text-white/90 mb-1">Gesso Preparation</h4>
                  <p>The oak panels were prepared with multiple layers of white gesso (calcium carbonate in animal glue) to create a smooth, luminous surface for painting.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-['Playfair_Display']">
                  2
                </div>
                <div>
                  <h4 className="font-['Playfair_Display'] text-white/90 mb-1">Underdrawing</h4>
                  <p>Bosch created detailed preliminary sketches directly on the gesso using ink or paint, establishing the complex composition of figures and landscapes.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-['Playfair_Display']">
                  3
                </div>
                <div>
                  <h4 className="font-['Playfair_Display'] text-white/90 mb-1">Layered Painting</h4>
                  <p>Oil paints were applied in thin, translucent layers (glazes), building up color and depth gradually. This technique allowed for rich, luminous colors and intricate detail work.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-['Playfair_Display']">
                  4
                </div>
                <div>
                  <h4 className="font-['Playfair_Display'] text-white/90 mb-1">Fine Details</h4>
                  <p>Using fine brushes, Bosch added thousands of minute details—fantastical creatures, symbolic objects, and expressive faces—that reward close examination.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Innovation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-5 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-lg"
        >
          <h3 className="font-['Playfair_Display'] text-base mb-3">Innovation & Mastery</h3>
          <p className="text-sm text-white/70 leading-relaxed">
            Bosch's technical mastery is evident in his ability to paint incredible detail on a large scale while maintaining overall compositional harmony. His use of oil painting techniques was sophisticated for the time, achieving effects of light and atmosphere that influenced generations of artists.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
