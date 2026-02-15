import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { OnboardingScreen } from "./OnboardingScreen";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function RootContent() {
  const { theme } = useTheme();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem("dalekogled_onboarding_complete");
    if (!hasCompletedOnboarding) {
      setShowOnboarding(true);
    }
    setIsLoading(false);
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem("dalekogled_onboarding_complete", "true");
    setShowOnboarding(false);
  };

  if (isLoading) {
    return (
      <div className={`${theme === "dark" ? "dark" : ""} min-h-screen bg-background flex items-center justify-center`}>
        <div className="animate-pulse font-['Inter'] font-black text-xl tracking-tight">
          DALEKOGLED
        </div>
      </div>
    );
  }

  if (showOnboarding) {
    return (
      <div className={`${theme === "dark" ? "dark" : ""} min-h-screen bg-background text-foreground font-['Lora']`}>
        <div className="max-w-[430px] mx-auto min-h-screen bg-background shadow-2xl">
          <OnboardingScreen onComplete={handleOnboardingComplete} />
        </div>
      </div>
    );
  }

  return (
    <div className={`${theme === "dark" ? "dark" : ""} min-h-screen bg-[#0a0a0a] text-foreground font-['Lora']`}>
      <div className="max-w-[430px] mx-auto min-h-screen bg-background shadow-2xl">
        <Outlet />
      </div>
    </div>
  );
}

export function Root() {
  return (
    <ThemeProvider>
      <RootContent />
    </ThemeProvider>
  );
}
