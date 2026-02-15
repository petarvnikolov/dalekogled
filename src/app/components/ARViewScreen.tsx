import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ChevronLeft, Camera, RotateCw, Move, ZoomIn } from "lucide-react";
import { useState } from "react";

export function ARViewScreen() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);

  const handleStartAR = () => {
    setIsScanning(true);
    // Simulate AR initialization
    setTimeout(() => {
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Header */}
      <header className="px-6 py-5 border-b border-white/10 absolute top-0 left-0 right-0 bg-black/60 backdrop-blur-md z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="p-2 -ml-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="font-['Playfair_Display'] text-lg tracking-wide">AR View</h1>
        </div>
      </header>

      {/* AR Camera View Simulation */}
      <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Scanning overlay */}
        {isScanning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-20"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: "100vh" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
            <div className="absolute inset-0 bg-blue-500/5" />
          </motion.div>
        )}

        {/* Corner Markers */}
        <div className="absolute inset-0 p-6">
          <div className="relative w-full h-full">
            <CornerMarker position="top-left" />
            <CornerMarker position="top-right" />
            <CornerMarker position="bottom-left" />
            <CornerMarker position="bottom-right" />
          </div>
        </div>

        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center px-8 space-y-8"
        >
          <div className="space-y-3">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-24 h-24 mx-auto relative"
            >
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl" />
              <div className="absolute inset-2 border-2 border-white/40 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-10 h-10 text-white/80" />
              </div>
            </motion.div>
            <h2 className="font-['Playfair_Display'] text-2xl">View in Your Space</h2>
            <p className="text-sm text-white/60 max-w-xs mx-auto leading-relaxed">
              Point your camera at a wall to place and experience the painting in augmented reality
            </p>
          </div>

          <button
            onClick={handleStartAR}
            disabled={isScanning}
            className="px-8 py-4 bg-white text-black font-['Playfair_Display'] rounded-full hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isScanning ? "Scanning Surface..." : "Start AR Experience"}
          </button>
        </motion.div>

        {/* Control Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-8 left-6 right-6 z-10"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 space-y-3">
            <h3 className="font-['Playfair_Display'] text-sm text-center mb-3">AR Controls</h3>
            <div className="grid grid-cols-2 gap-3">
              <ControlItem icon={<Move className="w-4 h-4" />} label="Move" />
              <ControlItem icon={<RotateCw className="w-4 h-4" />} label="Rotate" />
              <ControlItem icon={<ZoomIn className="w-4 h-4" />} label="Scale" />
              <ControlItem icon={<Camera className="w-4 h-4" />} label="Capture" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CornerMarker({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`absolute ${positions[position]}`}
    >
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H10V2H2V10H0V0Z" fill="white" fillOpacity="0.5" />
      </svg>
    </motion.div>
  );
}

function ControlItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-white/70">
      <div className="text-white/50">{icon}</div>
      <span className="text-xs">{label}</span>
    </div>
  );
}
