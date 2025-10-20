import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mood } from './MoodSelector';

export interface MoodEntry {
  mood: Mood;
  text: string;
  date: Date;
}

interface MoodHistoryProps {
  entries: MoodEntry[];
}

const moodEmojis: Record<Mood, string> = {
  Happy: '😄',
  Sad: '😢',
  Anxious: '😟',
  Excited: '🎉',
  Neutral: '😐',
};

export const MoodHistory: React.FC<MoodHistoryProps> = ({ entries }) => {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold text-center">Your Mood History</h2>
      {entries.length === 0 ? (
        <p className="text-center text-muted-foreground">No entries yet. Log your mood to see your history!</p>
      ) : (
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <Card key={index} className="text-left">
              <CardHeader>
                <CardTitle className="flex items-center gap-4">
                  <span className="text-3xl">{moodEmojis[entry.mood]}</span>
                  <div>
                    <span className="text-xl font-semibold">{entry.mood}</span>
                    <p className="text-sm font-normal text-muted-foreground">
                      {entry.date.toLocaleString()}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{entry.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};