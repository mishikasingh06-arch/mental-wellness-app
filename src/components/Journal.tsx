import { useState, useEffect } from 'react';
import { BookOpen, Save, Trash2 } from 'lucide-react';

interface JournalEntry {
  id: string;
  text: string;
  date: string;
}

function Journal() {
  const [entryText, setEntryText] = useState('');
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    const savedEntries = localStorage.getItem('journalEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const handleSaveEntry = () => {
    if (entryText.trim() === '') {
      alert('Please write something before saving!');
      return;
    }

    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      text: entryText,
      date: new Date().toLocaleString()
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));

    setEntryText('');

    alert('Entry saved successfully!');
  };

  const handleDeleteEntry = (id: string) => {
    const updatedEntries = entries.filter(entry => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
  };

  return (
    <section id="journal" className="min-h-screen py-20 px-4 bg-white/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <BookOpen className="text-purple-500 mr-3" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Daily Journal
          </h2>
        </div>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Express your thoughts freely. Your entries are private and saved locally.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <textarea
            value={entryText}
            onChange={(e) => setEntryText(e.target.value)}
            placeholder="How are you feeling today? What's on your mind?"
            className="w-full h-48 p-4 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none resize-none text-gray-700"
          />

          <button
            onClick={handleSaveEntry}
            className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center space-x-2 shadow-md"
          >
            <Save size={20} />
            <span>Save Entry</span>
          </button>
        </div>

        {entries.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Past Entries</h3>
            <div className="space-y-4">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <p className="text-sm text-gray-500 font-medium">{entry.date}</p>
                    <button
                      onClick={() => handleDeleteEntry(entry.id)}
                      className="text-red-400 hover:text-red-600 transition"
                      title="Delete entry"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <p className="text-gray-700 whitespace-pre-wrap">{entry.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {entries.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            <p className="text-lg">No entries yet. Start writing to see them here!</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Journal;
