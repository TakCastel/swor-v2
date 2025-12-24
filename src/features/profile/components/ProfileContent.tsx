import { User, Shield, Calendar, MessageSquare, Award, Plus } from 'lucide-react';
import { Card, CardTitle, CardDescription } from '@/shared/components/ui/Card';
import { Button } from '@/shared/components/ui/Button';
import { Badge } from '@/shared/components/ui/Badge';

const userData = {
  name: 'Tak Castel',
  title: 'Veteran Roleplayer',
  joined: '07.15.2024',
  posts: 156,
  faction: 'Indépendant',
  avatar: 'https://picsum.photos/seed/takcastel/256/256',
  signature: '<p><em>"No reward is worth this."</em> - Han Solo</p>'
};

const characters = [
  { name: 'Dax Valen', class: 'Contrebandier', era: 'Guerre Civile' },
  { name: 'Kaelen Voss', class: 'Jedi en Exil', era: 'Après-Empire' },
  { name: 'CT-7742 "Flash"', class: 'Soldat Clone', era: 'Guerre des Clones' }
];

export default function ProfileContent() {
  return (
    <div className="max-w-5xl mx-auto py-12 space-y-12">
      <Card className="relative p-12">
        <div className="absolute top-0 right-0 p-8">
           <Button variant="secondary" size="sm">
             Modifier le Profil
           </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="relative">
            <img 
              src={userData.avatar} 
              alt={userData.name} 
              className="w-40 h-40 rounded-[2.5rem] border-2 border-white/10 shadow-2xl" 
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-green-500 border-4 border-black"></div>
          </div>

          <div className="flex-grow space-y-6 text-center md:text-left">
            <div className="space-y-1">
              <CardTitle className="text-4xl tracking-tight">{userData.name}</CardTitle>
              <p className="text-yellow-500 font-semibold tracking-wider text-xs uppercase">{userData.title}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: Calendar, label: 'Inscrit le', value: userData.joined },
                { icon: MessageSquare, label: 'Messages', value: userData.posts },
                { icon: Shield, label: 'Faction', value: userData.faction },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-500">
                    <stat.icon className="w-3 h-3" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">{stat.label}</span>
                  </div>
                  <p className="text-lg font-medium text-zinc-200">{stat.value}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-6 border-t border-white/5">
               <p className="text-sm italic text-zinc-500" dangerouslySetInnerHTML={{ __html: userData.signature }} />
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Award className="w-5 h-5 text-yellow-500" />
          <h2 className="text-2xl font-cinzel text-white">Personnages Enregistrés</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {characters.map((char) => (
            <Card key={char.name} hover className="p-6 space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center">
                <User className="w-5 h-5 text-zinc-500" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold">{char.name}</CardTitle>
                <CardDescription>{char.class}</CardDescription>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Badge variant="yellow">{char.era}</Badge>
              </div>
            </Card>
          ))}
          
          <button className="p-6 rounded-[2.5rem] border-2 border-dashed border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-all flex flex-col items-center justify-center gap-2 group h-full w-full">
            <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus className="w-5 h-5 text-zinc-500" />
            </div>
            <span className="text-sm font-semibold text-zinc-500">Nouveau Personnage</span>
          </button>
        </div>
      </div>
    </div>
  );
}

