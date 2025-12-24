import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { RULES_DATA } from '../data/rules-data';

export default function RulesOverview() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h2 className="text-4xl font-bold font-cinzel text-white">Vue d'ensemble</h2>
        <p className="text-zinc-400 max-w-2xl leading-relaxed">
          Bienvenue sur le règlement officiel de SWOR.FR. Pour assurer une expérience de jeu de qualité et une ambiance saine, nous vous demandons de lire attentivement chaque section.
        </p>
      </header>

      <div className="grid gap-6">
        {RULES_DATA.map((section) => (
          <Link 
            key={section.id} 
            href={`/rules/${section.id}`}
            className="group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all flex items-center justify-between"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">{section.title}</h3>
              <p className="text-zinc-500 text-sm">{section.description}</p>
              <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest pt-2">
                {section.rules.length} articles disponibles
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-white" />
            </div>
          </Link>
        ))}
      </div>

      <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 space-y-4">
        <h3 className="text-xl font-bold text-white">Engagement du Joueur</h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          En vous inscrivant et en créant un personnage sur SWOR.FR, vous acceptez de respecter ce règlement dans son intégralité. L'équipe administrative se réserve le droit de modifier ces règles à tout moment pour le bien de la communauté.
        </p>
      </div>
    </div>
  );
}

