import React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface JournalInputProps {
  journalText: string;
  setJournalText: (text: string) => void;
  onSave: () => void;
  disabled: boolean;
}

export const JournalInput: React.FC<JournalInputProps> = ({ journalText, setJournalText, onSave, disabled }) => {
  return (
    <div className="w-full space-y-4">
      <Label htmlFor="journal-entry" className="text-lg font-semibold">How was your day?</Label>
      <Textarea
        id="journal-entry"
        placeholder="Write about your feelings, what happened today..."
        value={journalText}
        onChange={(e) => setJournalText(e.target.value)}
        className="min-h-[150px] text-base"
      />
      <Button onClick={onSave} disabled={disabled} className="w-full">
        Save Entry
      </Button>
    </div>
  );
};