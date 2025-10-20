import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type Mood = 'Happy' | 'Sad' | 'Anxious' | 'Excited' | 'Neutral';

const moods: { name: Mood; emoji: string }[] = [
  { name: 'Happy', emoji: '😄' },
  { name: 'Sad', emoji: '😢' },
  { name: 'Anxious', emoji: '😟' },
  { name: 'Excited', emoji: '🎉' },
  { name: 'Neutral', emoji: '😐' },
];

interface MoodSelectorProps {
  selectedMood: Mood | null;
  onSelectMood: (mood: Mood) => void;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, onSelectMood }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {moods.map(({ name, emoji }) => (
        <Button
          key={name}
          variant={selectedMood === name ? 'default' : 'outline'}
          className={cn(
            "flex flex-col items-center justify-center h-24 w-24 rounded-lg transition-transform transform hover:scale-105",
            selectedMood === name && "ring-2 ring-primary ring-offset-2"
          )}
          onClick={() => onSelectMood(name)}
        >
          <span className="text-4xl">{emoji}</span>
          <span className="mt-2 text-sm font-medium">{name}</span>
        </Button>
      ))}
    </div>
  );
};