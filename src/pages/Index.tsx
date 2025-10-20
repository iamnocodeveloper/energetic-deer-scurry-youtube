import { useState } from 'react';
import { MoodSelector, Mood } from '@/components/MoodSelector';
import { JournalInput } from '@/components/JournalInput';
import { MoodHistory, MoodEntry } from '@/components/MoodHistory';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { showSuccess } from '@/utils/toast';

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [journalText, setJournalText] = useState('');
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);

  const handleSaveEntry = () => {
    if (!selectedMood) {
      return;
    }

    const newEntry: MoodEntry = {
      mood: selectedMood,
      text: journalText,
      date: new Date(),
    };

    setMoodEntries([newEntry, ...moodEntries]);
    setSelectedMood(null);
    setJournalText('');
    showSuccess("Mood journal entry saved!");
  };

  return (
    <div className="container mx-auto max-w-3xl p-4 sm:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Mood Journal & Tracker</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Select your mood, write down your thoughts, and track your emotional well-being over time.
        </p>
      </header>

      <main className="space-y-12">
        <section className="space-y-6 p-8 bg-card rounded-lg shadow-sm border">
          <h2 className="text-2xl font-bold text-center">How are you feeling right now?</h2>
          <MoodSelector selectedMood={selectedMood} onSelectMood={setSelectedMood} />
        </section>

        <section className="space-y-6 p-8 bg-card rounded-lg shadow-sm border">
          <JournalInput
            journalText={journalText}
            setJournalText={setJournalText}
            onSave={handleSaveEntry}
            disabled={!selectedMood}
          />
        </section>

        <section>
          <MoodHistory entries={moodEntries} />
        </section>
      </main>

      <footer className="mt-16">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;