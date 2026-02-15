import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { User, Palette, MapPin, Maximize2, X, ChevronLeft } from "lucide-react";

export function MainPainting() {
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);

  const paintingUrl = "https://images.unsplash.com/photo-1742145415317-170c91dc7006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBwYWludGluZyUyMHJlbmFpc3NhbmNlJTIwYXJ0JTIwbXVzZXVtfGVufDF8fHx8MTc3MDc5NDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const handleZoom = () => {
    setIsZoomed(true);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isZoomed) {
      e.preventDefault();
      const delta = e.deltaY * -0.001;
      setScale(prev => Math.min(Math.max(1, prev + delta), 3));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Header */}
      <header className="px-6 py-5 border-b border-white/10">
        <div className="flex items-center justify-between">
          <button className="p-2 -ml-2 hover:bg-white/5 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="font-['Playfair_Display'] text-lg tracking-wide">DALEKOGLED</h1>
          <div className="w-9" />
        </div>
      </header>

      {/* Painting Image */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        <div className="relative w-full aspect-[3/4] max-h-[60vh]">
          <motion.img
            src={paintingUrl}
            alt="The Garden of Earthly Delights"
            className="w-full h-full object-cover rounded-sm shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <button
            onClick={handleZoom}
            className="absolute top-4 right-4 p-2.5 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="px-6 pb-6 space-y-6">
        <div>
          <h2 className="font-['Playfair_Display'] text-2xl mb-2">
            The Garden of Earthly Delights
          </h2>
          <p className="text-sm text-white/60 mb-4">Hieronymus Bosch • c. 1490–1510</p>
          <p className="text-sm text-white/80 leading-relaxed">
            A triptych depicting the Garden of Eden, the earthly world filled with nude figures and fantastical elements, and Hell. This masterwork explores humanity's relationship with pleasure, sin, and divine judgment through intricate symbolism.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 gap-3">
          <NavButton
            icon={<User className="w-5 h-5" />}
            label="Artist"
            onClick={() => navigate("/artist")}
          />
          <NavButton
            icon={<Palette className="w-5 h-5" />}
            label="Technique"
            onClick={() => navigate("/technique")}
          />
          <NavButton
            icon={<MapPin className="w-5 h-5" />}
            label="Scene"
            onClick={() => navigate("/scene")}
          />
          <NavButton
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            label="AR View"
            onClick={() => navigate("/ar")}
          />
        </div>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onWheel={handleWheel}
          >
            <button
              onClick={() => {
                setIsZoomed(false);
                setScale(1);
              }}
              className="absolute top-6 right-6 p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <motion.img
              src={paintingUrl}
              alt="The Garden of Earthly Delights - Zoomed"
              className="max-w-full max-h-full object-contain"
              style={{ scale }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs">
              Scroll to zoom • {Math.round(scale * 100)}%
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavButton({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all"
    >
      <div className="text-white/80">{icon}</div>
      <span className="text-sm font-['Playfair_Display']">{label}</span>
    </motion.button>
  );
}
