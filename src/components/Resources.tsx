import { Phone, Video, BookOpen, Users, ExternalLink } from 'lucide-react';

function Resources() {
  const resources = [
    {
      icon: Phone,
      title: 'Crisis Helplines',
      items: [
        { name: 'National Suicide Prevention Lifeline', info: '988 (US)', link: 'https://988lifeline.org/' },
        { name: 'Crisis Text Line', info: 'Text HOME to 741741', link: 'https://www.crisistextline.org/' },
        { name: 'SAMHSA National Helpline', info: '1-800-662-4357', link: 'https://www.samhsa.gov/find-help/national-helpline' }
      ]
    },
    {
      icon: Video,
      title: 'Meditation & Mindfulness',
      items: [
        { name: 'Headspace on YouTube', info: 'Free guided meditations', link: 'https://www.youtube.com/@Headspace' },
        { name: 'The Honest Guys', info: 'Relaxation & sleep meditations', link: 'https://www.youtube.com/@thehonestguys' },
        { name: 'Yoga With Adriene', info: 'Yoga for mental wellness', link: 'https://www.youtube.com/@yogawithadriene' }
      ]
    },
    {
      icon: BookOpen,
      title: 'Mental Health Resources',
      items: [
        { name: 'Mental Health America', info: 'Resources and screening tools', link: 'https://www.mhanational.org/' },
        { name: 'NAMI', info: 'National Alliance on Mental Illness', link: 'https://www.nami.org/' },
        { name: 'Psychology Today', info: 'Find a therapist', link: 'https://www.psychologytoday.com/' }
      ]
    },
    {
      icon: Users,
      title: 'Support Communities',
      items: [
        { name: '7 Cups', info: 'Free emotional support', link: 'https://www.7cups.com/' },
        { name: 'r/mentalhealth', info: 'Reddit support community', link: 'https://www.reddit.com/r/mentalhealth/' },
        { name: 'Support Groups Central', info: 'Find local support groups', link: 'https://www.supportgroupscentral.com/' }
      ]
    }
  ];

  return (
    <section id="resources" className="min-h-screen py-20 px-4 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Helpful Resources
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          You're not alone. Here are some trusted resources for support.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">{item.info}</p>
                        </div>
                        <ExternalLink className="text-gray-400 group-hover:text-purple-500 transition-colors ml-2 flex-shrink-0" size={18} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center shadow-xl">
          <p className="text-xl font-semibold mb-2">
            If you're in immediate danger, please call 911 or go to your nearest emergency room.
          </p>
          <p className="text-purple-100">
            Your life matters, and help is available 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resources;
