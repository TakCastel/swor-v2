import Link from 'next/link';
import { ChevronLeft, Plus, MessageSquare, Compass, MapPin, Send } from 'lucide-react';
import { Forum } from '../types';
import { Button } from '@/shared/components/ui/Button';
import { Badge } from '@/shared/components/ui/Badge';
import { Card, CardTitle, CardDescription } from '@/shared/components/ui/Card';

interface ForumDetailProps {
  forum: Forum;
}

export default function ForumDetail({ forum }: ForumDetailProps) {
  const isTravelable = forum.type === 'planet' || forum.type === 'location';

  return (
    <div className="max-w-6xl mx-auto space-y-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <Link 
            href="/forum" 
            className="inline-flex items-center text-sm text-zinc-500 hover:text-white transition-colors gap-1 group"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Retour à la Galaxie
          </Link>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Badge variant="yellow">{forum.type}</Badge>
              <h1 className="text-4xl font-bold font-cinzel text-white">{forum.name}</h1>
            </div>
            <p className="text-zinc-500 max-w-xl">{forum.description}</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          {isTravelable && (
            <Button variant="era-blue">
              <Send className="w-4 h-4" />
              Saut Hyperespace
            </Button>
          )}
          <Button>
            <Plus className="w-4 h-4" />
            Nouveau Sujet
          </Button>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          {/* Sous-forums / Lieux */}
          {forum.subForums && forum.subForums.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4">
              {forum.subForums.map(sub => (
                <Link 
                  key={sub.id} 
                  href={`/forum/${sub.id}`}
                >
                  <Card hover className="flex items-center p-6 group h-full">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mr-4 group-hover:bg-yellow-500/10 transition-colors">
                      {sub.type === 'planet' ? <Compass className="w-5 h-5 text-zinc-400 group-hover:text-yellow-500" /> : <MapPin className="w-5 h-5 text-zinc-400 group-hover:text-yellow-500" />}
                    </div>
                    <div>
                      <CardTitle className="text-base group-hover:text-white transition-colors">{sub.name}</CardTitle>
                      <CardDescription>{sub.description}</CardDescription>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Topics */}
          <div className="space-y-1">
            <div className="grid grid-cols-12 px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600 border-b border-white/5">
              <div className="col-span-8">Dernières Activités</div>
              <div className="col-span-4 text-right">Infos</div>
            </div>
            
            {forum.topics && forum.topics.length > 0 ? (
              <Card className="divide-y divide-white/[0.02] border-x border-b border-white/5 rounded-t-none overflow-hidden">
                {forum.topics.map((topic) => (
                  <div key={topic.id} className="grid grid-cols-12 items-center p-6 bg-white/[0.01] hover:bg-white/[0.03] transition-all">
                    <div className="col-span-8 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-4 h-4 text-zinc-500" />
                      </div>
                      <div>
                        <Link href={`/topic/${topic.id}`} className="text-lg font-medium text-zinc-200 hover:text-white transition-colors">
                          {topic.title}
                        </Link>
                        <p className="text-sm text-zinc-500">par {topic.author}</p>
                      </div>
                    </div>
                    <div className="col-span-4 text-right space-y-1">
                      <p className="text-sm text-zinc-300 font-medium">{topic.replies} Rép.</p>
                      <p className="text-[10px] text-zinc-600 uppercase font-bold">{topic.lastPostInfo}</p>
                    </div>
                  </div>
                ))}
              </Card>
            ) : !forum.subForums?.length && (
              <Card className="p-24 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center mx-auto text-zinc-700">
                  <Compass className="w-6 h-6" />
                </div>
                <p className="text-zinc-500 text-sm">Ce secteur est calme. Aucune transmission détectée.</p>
              </Card>
            )}
          </div>
        </div>

        {/* Sidebar / Infos Secteur */}
        <aside className="lg:col-span-4 space-y-6">
           <Card className="p-8 space-y-6">
              <h3 className="text-lg font-bold text-white font-cinzel">Rapport Télémétrique</h3>
              <div className="space-y-4">
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500">Population</span>
                    <span className="text-zinc-300 font-mono">1.2 Trillion</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500">Allégeance</span>
                    <Badge variant="blue">République</Badge>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-500">Climat</span>
                    <span className="text-zinc-300">Tempéré / Urbain</span>
                 </div>
              </div>
              <div className="pt-6 border-t border-white/5">
                 <p className="text-xs text-zinc-600 leading-relaxed italic">
                   "Les données indiquent une forte activité commerciale dans les niveaux supérieurs."
                 </p>
              </div>
           </Card>
        </aside>
      </div>
    </div>
  );
}

