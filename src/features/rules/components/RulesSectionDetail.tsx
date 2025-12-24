import { RuleSection } from '../types';
import { Card } from '@/shared/components/ui/Card';
import { Badge } from '@/shared/components/ui/Badge';

interface RulesSectionDetailProps {
  section: RuleSection;
}

export default function RulesSectionDetail({ section }: RulesSectionDetailProps) {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge variant="yellow">Règlement</Badge>
        </div>
        <h2 className="text-4xl font-bold font-cinzel text-white leading-tight">{section.title}</h2>
        <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
          {section.description}
        </p>
      </header>

      <div className="space-y-4">
        {section.rules.map((rule) => (
          <Card 
            key={rule.id} 
            hover
            className="p-8 group"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 font-mono text-sm text-yellow-500/50">
                {rule.id}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                  {rule.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {rule.content}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

