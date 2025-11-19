import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MoodChecker from './components/MoodChecker';
import Journal from './components/Journal';
import BreathingTool from './components/BreathingTool';
import Resources from './components/Resources';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navbar />
      <Hero />
      <MoodChecker />
      <Journal />
      <BreathingTool />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
