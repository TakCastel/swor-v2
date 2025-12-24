import Link from 'next/link';
import { MessageCircle, ChevronRight, Globe, Shield, Users, Sparkles, Lock, Info, MessageSquare } from 'lucide-react';
import { Category } from '../types';
import { SectionHeader } from '@/shared/components/ui/SectionHeader';
import { Card, CardTitle, CardDescription } from '@/shared/components/ui/Card';
import { Button } from '@/shared/components/ui/Button';

interface ForumIndexProps {
  categories: Category[];
}

export default function ForumIndex({ categories }: ForumIndexProps) {
  const topHrp = categories.find(c => c.id === 10);
  const icEras = categories.filter(c => c.id >= 1 && c.id <= 3);
  const bottomHrp = categories.find(c => c.id === 20);
  const adminSections = categories.find(c => c.id === 30);

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-12 px-4">
      <SectionHeader 
        title="HoloNet" 
        subtitle="Archive" 
        description="Bienvenue sur SWOR.FR. Sélectionnez votre destination dans la galaxie."
        gradient
      />

      {/* 1. TOP HRP - Informations & Administration */}
      {topHrp && (
        <section className="space-y-6">
          <div className="flex items-center gap-4 px-2">
            <Info className="w-5 h-5 text-zinc-500" />
            <h2 className="text-xs font-bold font-mono tracking-[0.3em] text-zinc-600 uppercase">
              {topHrp.name}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {topHrp.forums.map((forum) => (
              <Link 
                key={forum.id} 
                href={`/forum/${forum.id}`}
              >
                <Card hover className="p-6 h-full flex flex-col justify-between group">
                  <div>
                    <CardTitle className="text-lg group-hover:text-white transition-colors">{forum.name}</CardTitle>
                    <CardDescription className="mt-1">{forum.description}</CardDescription>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-zinc-600 uppercase">
                    <span>{forum.topicsCount} Sujets</span>
                    <span className="group-hover:text-zinc-400 transition-colors">Consulter →</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 2. IC ERAS - The 3 Eras with Distinct Styles */}
      <section className="space-y-8 pt-4">
        <div className="flex items-center gap-4 px-2">
          <Globe className="w-5 h-5 text-zinc-500" />
          <h2 className="text-xs font-bold font-mono tracking-[0.3em] text-zinc-600 uppercase">
            Chronologies Galactiques
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {icEras.map((era) => (
            <div key={era.id} className={`group relative p-1 rounded-[2.5rem] transition-all duration-500 hover:scale-[1.02]
              ${era.id === 1 ? 'bg-gradient-to-br from-blue-500/20 via-transparent to-blue-500/5' : ''}
              ${era.id === 2 ? 'bg-gradient-to-br from-red-500/20 via-transparent to-red-500/5' : ''}
              ${era.id === 3 ? 'bg-gradient-to-br from-yellow-500/20 via-transparent to-yellow-500/5' : ''}
            `}>
              <div className="relative h-full p-8 rounded-[2.4rem] bg-zinc-950/90 backdrop-blur-xl border border-white/5 space-y-8 flex flex-col">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:rotate-12
                  ${era.id === 1 ? 'bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]' : ''}
                  ${era.id === 2 ? 'bg-red-500/10 border-red-500/20 text-red-400 group-hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)]' : ''}
                  ${era.id === 3 ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400 group-hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.5)]' : ''}
                `}>
                  {era.id === 1 && <Shield className="w-8 h-8" />}
                  {era.id === 2 && <Globe className="w-8 h-8" />}
                  {era.id === 3 && <Sparkles className="w-8 h-8" />}
                </div>

                <div className="flex-grow space-y-3">
                  <h2 className={`text-2xl font-bold font-cinzel leading-tight transition-colors
                    ${era.id === 1 ? 'text-blue-100' : ''}
                    ${era.id === 2 ? 'text-red-100' : ''}
                    ${era.id === 3 ? 'text-yellow-100' : ''}
                  `}>{era.name}</h2>
                  <p className="text-zinc-500 text-sm leading-relaxed">{era.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-zinc-600">
                    <span>Zones de Jeu</span>
                    <span>{era.forums.reduce((acc, f) => acc + f.topicsCount, 0)} Sujets</span>
                  </div>
                  <Link href={`/forum/${era.id}`}>
                    <Button 
                      variant={era.id === 1 ? 'era-blue' : era.id === 2 ? 'era-red' : 'era-yellow'}
                      className="w-full h-11"
                    >
                      Explorer l'Ère
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BOTTOM HRP - Communauté & Hors-Jeu */}
      {bottomHrp && (
        <section className="space-y-6 pt-8">
          <div className="flex items-center gap-4 px-2">
            <MessageSquare className="w-5 h-5 text-zinc-500" />
            <h2 className="text-xs font-bold font-mono tracking-[0.3em] text-zinc-600 uppercase">
              {bottomHrp.name}
            </h2>
          </div>
          <div className="grid gap-2">
            {bottomHrp.forums.map((forum) => (
              <Link 
                key={forum.id} 
                href={`/forum/${forum.id}`}
              >
                <Card hover className="flex items-center p-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mr-6 group-hover:bg-white/10 transition-colors">
                    <MessageCircle className="w-5 h-5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-lg group-hover:text-white transition-colors">{forum.name}</CardTitle>
                    <CardDescription className="line-clamp-1">{forum.description}</CardDescription>
                  </div>
                  <div className="hidden md:flex items-center gap-12 px-8 text-right shrink-0">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-zinc-300">{forum.topicsCount}</p>
                      <p className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold">Sujets</p>
                    </div>
                  </div>
                  <div className="p-2 shrink-0">
                    <ChevronRight className="w-5 h-5 text-zinc-800 group-hover:text-zinc-500 transition-colors" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 4. PRIVATE - Espaces Administratifs */}
      {adminSections && (
        <section className="space-y-6 pt-8">
          <div className="flex items-center gap-4 px-2">
            <Lock className="w-5 h-5 text-zinc-700" />
            <h2 className="text-xs font-bold font-mono tracking-[0.3em] text-zinc-700 uppercase">
              {adminSections.name}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {adminSections.forums.map((forum) => (
              <Link 
                key={forum.id} 
                href={`/forum/${forum.id}`}
              >
                <Card className="p-6 bg-black/40 border border-white/5 hover:border-white/10 transition-all flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                    <Shield className="w-5 h-5 text-zinc-700" />
                  </div>
                  <div className="flex-grow">
                    <CardTitle className="text-md text-zinc-500 group-hover:text-zinc-300 transition-colors">{forum.name}</CardTitle>
                    <CardDescription className="text-xs text-zinc-700">{forum.description}</CardDescription>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-mono text-zinc-800 tracking-tighter">RESTRICTED</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

