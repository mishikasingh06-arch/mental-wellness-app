import { Sparkles } from 'lucide-react';

function Hero() {
  const scrollToMood = () => {
    const element = document.getElementById('mood');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-3xl">
        <div className="flex justify-center mb-6">
          <Sparkles className="text-purple-400" size={64} />
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          You Matter
        </h1>

        <p className="text-2xl md:text-3xl text-gray-600 mb-8">
          Take a moment for yourself
        </p>

        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Your mental health is important. This is a safe space to check in with yourself,
          reflect on your feelings, and practice mindfulness.
        </p>

        <button
          onClick={scrollToMood}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Start Check-In
        </button>
      </div>
    </section>
  );
}

export default Hero;
