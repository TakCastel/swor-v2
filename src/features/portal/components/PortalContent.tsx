import Link from 'next/link';
import { ArrowRight, MessageSquare, Shield, Globe } from 'lucide-react';

import { Button } from '@/shared/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/shared/components/ui/Card';

const newsItems = [
  { title: 'New Era Begins!', content: 'The post-Empire roleplay section is now open. Create your characters and forge a new destiny.', date: '07.22.2024' },
  { title: 'Forum Rules Updated', content: 'Please review the updated rules regarding character creation and post length.', date: '07.20.2024' },
  { title: 'Welcome to SWOR.FR!', content: 'A long time ago, in a galaxy far, far away... a new community is born.', date: '07.15.2024' },
];

export function HeroSection() {
  return (
    <section className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-normal font-starwars text-gradient uppercase">
          Star Wars
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold font-cinzel text-white/90 tracking-[0.2em] uppercase">
          Online Roleplay
        </h2>
      </div>
      
      <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
        La galaxie vous appartient, c'est à vous d'en tracer le chemin.
      </p>
      
      <div className="flex items-center justify-center gap-4">
        <Link href="/forum">
          <Button size="lg" className="group">
            Accéder au Forum
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link href="/universe">
          <Button variant="secondary" size="lg">
            L'Univers
          </Button>
        </Link>
      </div>
    </section>
  );
}

export function FeaturesGrid() {
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {[
        { icon: MessageSquare, title: 'Roleplay Immersif', desc: 'Un système de jeu riche et une narration profonde.' },
        { icon: Shield, title: 'Règles Équitables', desc: 'Un environnement sain pour tous les joueurs.' },
        { icon: Globe, title: 'Multivers SW', desc: 'Trois époques majeures à explorer selon vos goûts.' },
      ].map((feature, i) => (
        <Card key={i} className="p-6 space-y-4">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
            <feature.icon className="w-5 h-5 text-zinc-400" />
          </div>
          <CardTitle className="text-lg">{feature.title}</CardTitle>
          <CardDescription className="leading-relaxed">{feature.desc}</CardDescription>
        </Card>
      ))}
    </section>
  );
}

export function NewsSection() {
  return (
    <section className="space-y-8">
      <div className="flex items-end justify-between border-b border-white/5 pb-4">
        <h2 className="text-2xl font-cinzel text-white">Dernières Transmissions</h2>
        <Link href="/news" className="text-sm text-zinc-500 hover:text-white transition-colors">Voir tout</Link>
      </div>
      
      <div className="grid gap-4">
        {newsItems.map((item) => (
          <Card key={item.title} hover className="p-6 flex justify-between items-center group">
            <div className="space-y-1">
              <h3 className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-zinc-500 text-sm">{item.content}</p>
            </div>
            <span className="text-xs font-mono text-zinc-600">{item.date}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function PortalContent() {
  return (
    <div className="max-w-5xl mx-auto space-y-24 py-12">
      <HeroSection />
      <FeaturesGrid />
      <NewsSection />
    </div>
  );
}

