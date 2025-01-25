export function HeroSection() {
    return (
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-50 to-gray-100">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Captivating Designs That Speak
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore my portfolio and discover a blend of creativity, strategy, and visual storytelling.
        </motion.p>
        <motion.button
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 focus:outline-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View Portfolio
        </motion.button>
      </section>
    );
  }
