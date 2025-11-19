import { useState, useEffect } from 'react';
import { Wind, Play, Pause } from 'lucide-react';

function BreathingTool() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('Ready');
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer: number;

    if (isActive) {
      const breathingCycle = [
        { text: 'Breathe In...', duration: 4000 },
        { text: 'Hold...', duration: 4000 },
        { text: 'Breathe Out...', duration: 4000 },
        { text: 'Rest...', duration: 2000 }
      ];

      let currentStep = 0;

      const runCycle = () => {
        if (currentStep >= breathingCycle.length) {
          currentStep = 0;
        }

        const step = breathingCycle[currentStep];
        setPhase(step.text);
        setCountdown(step.duration / 1000);

        let remaining = step.duration / 1000;
        const countdownInterval = setInterval(() => {
          remaining -= 1;
          setCountdown(remaining);
          if (remaining <= 0) {
            clearInterval(countdownInterval);
          }
        }, 1000);

        timer = window.setTimeout(() => {
          currentStep++;
          runCycle();
        }, step.duration);
      };

      runCycle();
    } else {
      setPhase('Ready');
      setCountdown(0);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isActive]);

  const toggleBreathing = () => {
    setIsActive(!isActive);
  };

  const getPhaseColor = () => {
    if (phase.includes('In')) return 'from-blue-400 to-cyan-400';
    if (phase.includes('Hold')) return 'from-purple-400 to-pink-400';
    if (phase.includes('Out')) return 'from-green-400 to-teal-400';
    return 'from-gray-300 to-gray-400';
  };

  const getPhaseScale = () => {
    if (phase.includes('In')) return 'scale-125';
    if (phase.includes('Out')) return 'scale-75';
    return 'scale-100';
  };

  return (
    <section id="breathing" className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Wind className="text-cyan-500 mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Breathing Exercise
          </h2>
        </div>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Take a moment to calm your mind with guided breathing
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <div className="mb-12">
            <div
              className={`w-48 h-48 mx-auto rounded-full bg-gradient-to-br ${getPhaseColor()} flex items-center justify-center transition-all duration-1000 ${getPhaseScale()} shadow-2xl`}
            >
              <div className="text-white">
                <p className="text-3xl font-bold mb-2">{phase}</p>
                {isActive && countdown > 0 && (
                  <p className="text-5xl font-bold">{Math.ceil(countdown)}</p>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={toggleBreathing}
            className={`${
              isActive
                ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600'
                : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
            } text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center space-x-3 mx-auto shadow-lg`}
          >
            {isActive ? <Pause size={24} /> : <Play size={24} />}
            <span>{isActive ? 'Stop Exercise' : 'Start Breathing Exercise'}</span>
          </button>

          <div className="mt-8 text-gray-600">
            <p className="mb-2">Follow the guide:</p>
            <p><span className="font-semibold">Breathe In</span> for 4 seconds</p>
            <p><span className="font-semibold">Hold</span> for 4 seconds</p>
            <p><span className="font-semibold">Breathe Out</span> for 4 seconds</p>
            <p><span className="font-semibold">Rest</span> for 2 seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BreathingTool;
