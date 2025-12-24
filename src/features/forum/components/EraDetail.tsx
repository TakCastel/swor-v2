import { ChevronLeft, ChevronRight, Map as MapIcon, Compass, Radio } from 'lucide-react';
import { Category } from '../types';
import { Card, CardTitle, CardDescription } from '@/shared/components/ui/Card';
import { Badge } from '@/shared/components/ui/Badge';

interface EraDetailProps {
  era: Category;
}

export default function EraDetail({ era }: EraDetailProps) {
  return (
    <div className="max-w-6xl mx-auto space-y-12 py-12">
      <header className="space-y-6">
        <Link 
          href="/forum" 
          className="inline-flex items-center text-sm text-zinc-500 hover:text-white transition-colors gap-1 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Retour au HoloNet
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold font-cinzel text-white leading-tight">{era.name}</h1>
            <p className="text-zinc-400 max-w-xl">{era.description}</p>
          </div>
          
          <div className="flex gap-4">
             <Card className="px-6 py-4 rounded-2xl flex items-center gap-4">
                <Radio className="w-5 h-5 text-green-500 animate-pulse" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Comlink Status</p>
                  <p className="text-sm font-medium text-zinc-300">Signal Stable</p>
                </div>
             </Card>
          </div>
        </div>
      </header>

      {/* Carte de la Galaxie Simplifiée */}
      <Card className="relative aspect-[21/9] w-full rounded-[3rem] border border-white/5 overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
        
        {/* Cercles de Région */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80%] aspect-square border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="w-[60%] aspect-square border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
          <div className="w-[40%] aspect-square border border-white/5 rounded-full" />
        </div>

        {/* Points de données des régions */}
        <div className="relative z-10 h-full w-full p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {era.forums.map((region) => (
            <Link 
              key={region.id}
              href={`/forum/${region.id}`}
              className="group/item flex flex-col justify-center items-center text-center space-y-4 hover:scale-110 transition-transform"
            >
              <div className="relative w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-yellow-500/50 transition-colors">
                <Compass className="w-6 h-6 text-zinc-500 group-hover/item:text-yellow-500 transition-colors" />
                <div className="absolute inset-0 rounded-full bg-yellow-500/10 scale-0 group-hover/item:scale-150 blur-xl transition-transform duration-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">{region.name}</h3>
                <p className="text-[10px] text-zinc-500 font-mono mt-1">{region.topicsCount} SEC / {region.postsCount} LOC</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-8 left-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
          <MapIcon className="w-3 h-3 text-yellow-500" />
          Secteurs Cartographiés
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        {era.forums.map((region) => (
          <Card key={region.id} className="p-8 space-y-6">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">{region.name}</CardTitle>
              <Link href={`/forum/${region.id}`} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <CardDescription className="text-sm leading-relaxed">{region.description}</CardDescription>
            
            <div className="grid grid-cols-3 gap-4">
              {region.subForums?.map(sector => (
                <Link 
                  key={sector.id} 
                  href={`/forum/${sector.id}`}
                >
                  <Card hover className="p-4 rounded-2xl bg-white/5 border-white/5 text-center space-y-2 h-full">
                    <p className="text-xs font-bold text-zinc-300 truncate">{sector.name}</p>
                    <p className="text-[10px] text-zinc-600 font-mono">{sector.subForums?.length || 0} Planètes</p>
                  </Card>
                </Link>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

