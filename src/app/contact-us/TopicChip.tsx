'use client';

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export type TopicChipProps = {
  id?: string;
  topic: string;
  isSelected: boolean;
  onToggle: (topic: string) => void;
};

export const TopicChip = ({
  id,
  topic,
  isSelected,
  onToggle,
}: TopicChipProps) => {
  const componentName = 'TopicChip';
  const rootId =
    id ?? `${componentName}-${topic.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <button
      id={rootId}
      data-component={componentName}
      type="button"
      onClick={() => onToggle(topic)}
      aria-pressed={isSelected}
      className={cn(
        'inline-flex min-h-[44px] items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer',
        isSelected
          ? 'border-foreground bg-foreground text-background hover:bg-foreground/90'
          : 'border-border bg-background text-foreground hover:border-foreground/50 hover:bg-muted/50'
      )}
    >
      {isSelected && <Check className="h-3 w-3" />}
      {topic}
    </button>
  );
};
