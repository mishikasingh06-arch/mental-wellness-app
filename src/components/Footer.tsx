import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <Heart className="text-pink-400 mr-2" size={28} />
          <span className="text-2xl font-semibold">MindfulYou</span>
        </div>

        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          "You are stronger than you know, braver than you believe, and more loved than you can imagine."
        </p>

        <p className="text-sm text-gray-400">
          Remember: This app provides supportive resources but is not a substitute for professional mental health care.
        </p>

        <p className="text-sm text-gray-400 mt-4">
          © 2025 MindfulYou. Take care of yourself.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
