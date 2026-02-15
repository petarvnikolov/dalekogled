import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { ChevronLeft, Users, GraduationCap, Calendar, Heart } from "lucide-react";

export function AboutScreen() {
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
          <h1 className="font-['Inter'] font-bold text-lg tracking-tight">About Dalekogled</h1>
        </div>
      </header>

      <div className="px-6 py-8 space-y-8 pb-12">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3 pt-4"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-border">
            <Heart className="w-10 h-10" />
          </div>
          <h2 className="font-['Inter'] font-bold text-2xl tracking-tight">DALEKOGLED</h2>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
            A digital art gallery dedicated to unveiling the stories, techniques, and historical context behind masterpieces.
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="font-['Inter'] font-bold text-lg">Our Mission</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Dalekogled bridges the gap between classical art and modern technology. We believe every painting holds untold stories—from the artist's biography and creative techniques to the historical context and hidden symbolism. Our platform makes art history accessible, engaging, and interactive for everyone.
          </p>
        </motion.div>

        {/* Inspiration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="font-['Inter'] font-bold text-lg">Inspiration</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Inspired by museum audio guides and interactive art installations, we envisioned a mobile experience that brings the gallery into your pocket. The name "Dalekogled" combines the idea of looking far and wide—exploring beyond the surface to discover deeper meanings.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <h3 className="font-['Inter'] font-bold text-lg">Created By</h3>
          </div>
          
          <div className="space-y-3">
            <TeamMember name="Alexander Damianov" />
            <TeamMember name="Georgi Georgiev" />
            <TeamMember name="Petar Nikolov" />
          </div>
        </motion.div>

        {/* Institution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-5 bg-accent rounded-xl space-y-3"
        >
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-muted-foreground" />
            <h4 className="font-['Inter'] font-bold text-sm">Academic Project</h4>
          </div>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Computer Science Bachelor Program</p>
            <p>3rd Year • 2026</p>
            <p className="pt-2 font-medium">University of Library Studies and Information Technologies (ULSIT)</p>
            <p>Sofia, Bulgaria</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center pt-4 space-y-2"
        >
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>2026</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Made with passion for art and technology
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function TeamMember({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-border flex items-center justify-center flex-shrink-0">
        <span className="text-sm font-bold">{name.split(" ").map(n => n[0]).join("")}</span>
      </div>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">Computer Science Student</p>
      </div>
    </div>
  );
}
