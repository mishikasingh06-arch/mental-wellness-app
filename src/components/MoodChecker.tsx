import { useState } from 'react';
import { Smile, Frown, Zap, Flame, Moon } from 'lucide-react';

function MoodChecker() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = [
    {
      name: 'Happy',
      icon: Smile,
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'bg-yellow-50',
      message: 'That\'s wonderful! Keep spreading those positive vibes.',
      tip: 'Share your happiness with someone today - it multiplies joy!'
    },
    {
      name: 'Sad',
      icon: Frown,
      color: 'from-blue-400 to-indigo-400',
      bgColor: 'bg-blue-50',
      message: 'It\'s okay to feel sad. Your feelings are valid.',
      tip: 'Try writing down how you feel. Sometimes putting emotions on paper helps process them.'
    },
    {
      name: 'Stressed',
      icon: Zap,
      color: 'from-red-400 to-pink-400',
      bgColor: 'bg-red-50',
      message: 'Take a deep breath. You\'ve got this.',
      tip: 'Try the breathing exercise below or take a short walk to clear your mind.'
    },
    {
      name: 'Angry',
      icon: Flame,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      message: 'It\'s natural to feel angry sometimes.',
      tip: 'Count to 10, take deep breaths, or do some physical activity to release tension.'
    },
    {
      name: 'Tired',
      icon: Moon,
      color: 'from-purple-400 to-blue-400',
      bgColor: 'bg-purple-50',
      message: 'Rest is productive too. Listen to your body.',
      tip: 'Consider taking a short nap, having some water, or going to bed earlier tonight.'
    }
  ];

  const handleMoodClick = (moodName: string) => {
    setSelectedMood(moodName);
  };

  const selectedMoodData = moods.find(mood => mood.name === selectedMood);

  return (
    <section id="mood" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          How Are You Feeling?
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Select your current mood to get personalized support
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {moods.map((mood) => {
            const Icon = mood.icon;
            return (
              <button
                key={mood.name}
                onClick={() => handleMoodClick(mood.name)}
                className={`${mood.bgColor} p-6 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 ${
                  selectedMood === mood.name ? 'ring-4 ring-purple-400' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${mood.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <Icon className="text-white" size={32} />
                </div>
                <p className="text-gray-800 font-semibold text-center">{mood.name}</p>
              </button>
            );
          })}
        </div>

        {selectedMoodData && (
          <div className={`${selectedMoodData.bgColor} p-8 rounded-2xl shadow-lg border-2 border-gray-200 animate-fadeIn`}>
            <div className="flex items-start space-x-4">
              <div className={`bg-gradient-to-br ${selectedMoodData.color} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}>
                <selectedMoodData.icon className="text-white" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedMoodData.message}
                </h3>
                <p className="text-gray-700 text-lg">
                  <span className="font-semibold">Tip:</span> {selectedMoodData.tip}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MoodChecker;
