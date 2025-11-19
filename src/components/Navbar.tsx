import { Heart } from 'lucide-react';

function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="text-pink-500" size={28} />
            <span className="text-xl font-semibold text-gray-800">MindfulYou</span>
          </div>

          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('mood')}
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Mood Check
            </button>
            <button
              onClick={() => scrollToSection('journal')}
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Journal
            </button>
            <button
              onClick={() => scrollToSection('breathing')}
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Breathing
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Resources
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
