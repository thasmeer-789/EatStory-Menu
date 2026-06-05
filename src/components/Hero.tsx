import { motion } from "framer-motion";

const Hero = () => {

  const scrollToMenu = () => {
    const section =
      document.getElementById("menu");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary flex items-center justify-center">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] bg-accent/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] bg-[#F5DAA7]/10 blur-[120px] rounded-full"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 w-full"
      >

        {/* Brand */}
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[0.18em] text-[#F5DAA7] font-['Playfair_Display'] leading-tight">          EAT STORY
      </h1>
        {/* Tagline */}
<p className="mt-5 text-sm sm:text-base md:text-lg text-cream/70 font-['Inter'] tracking-wide px-4">
  Every food has it's own Story
</p>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={scrollToMenu}
className="mt-8 px-7 sm:px-8 py-2.5 sm:py-4 rounded-full bg-accent text-cream text-sm sm:text-base font-semibold shadow-2xl hover:bg-[#A3485A] transition-all duration-300">
          Explore Menu
        </motion.button>

      </motion.div>
    </section>
  );
};

export default Hero;