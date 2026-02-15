import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Eye, Palette, Book, Sparkles } from "lucide-react";

interface OnboardingScreenProps {
  onComplete: () => void;
}

const slides = [
  {
    icon: Eye,
    title: "Discover Hidden Stories",
    description: "Every masterpiece holds secrets. Explore the narratives, symbolism, and history behind the world's greatest paintings.",
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
  },
  {
    icon: Palette,
    title: "Master the Techniques",
    description: "Learn about the materials, processes, and innovations that brought these artworks to life centuries ago.",
    gradient: "from-orange-500/20 via-red-500/20 to-pink-500/20",
  },
  {
    icon: Book,
    title: "Travel Through Time",
    description: "Understand the historical context and meet the artists who shaped the course of art history.",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Sparkles,
    title: "Experience in AR",
    description: "Bring masterpieces into your space with augmented reality. View paintings at their true scale on your walls.",
    gradient: "from-purple-500/20 via-blue-500/20 to-cyan-500/20",
  },
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-30`}
      />

      {/* Skip Button */}
      {currentSlide < slides.length - 1 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleSkip}
          className="absolute top-6 right-6 z-20 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
        >
          Skip
        </motion.button>
      )}

      {/* Logo/Brand */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute top-6 left-6 z-20"
      >
        <h1 className="font-['Inter'] font-black text-xl tracking-tight">DALEKOGLED</h1>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col items-center text-center space-y-8"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className="w-28 h-28 rounded-full bg-accent backdrop-blur-sm border border-border flex items-center justify-center">
                <Icon className="w-14 h-14" />
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
              />
            </motion.div>

            {/* Text Content */}
            <div className="space-y-4 max-w-sm">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-['Inter'] font-bold text-3xl tracking-tight"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground leading-relaxed"
              >
                {slide.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Section */}
      <div className="px-8 pb-12 space-y-6 relative z-10">
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className="group"
              whileTap={{ scale: 0.9 }}
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
                }`}
              />
            </motion.button>
          ))}
        </div>

        {/* Next/Get Started Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNext}
          className="w-full py-4 bg-primary text-primary-foreground rounded-full font-['Inter'] font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <span>{currentSlide === slides.length - 1 ? "Get Started" : "Continue"}</span>
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}
