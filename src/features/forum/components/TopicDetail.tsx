import { ChevronLeft, Share2, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { Topic } from '../types';
import { Card, CardTitle } from '@/shared/components/ui/Card';
import { Button } from '@/shared/components/ui/Button';

interface TopicDetailProps {
  topic: Topic;
}

export default function TopicDetail({ topic }: TopicDetailProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      <header className="space-y-6">
        <Link 
          href="/forum" 
          className="inline-flex items-center text-sm text-zinc-500 hover:text-white transition-colors gap-1 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Retour au Forum
        </Link>
        <div className="flex items-start justify-between">
          <CardTitle className="text-4xl max-w-2xl">{topic.title}</CardTitle>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="space-y-6">
        {topic.posts.map((post) => (
          <Card key={post.id} className="relative group p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={post.authorAvatar} alt="" className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <h3 className="font-bold text-white leading-none">{post.author}</h3>
                  <p className="text-xs text-yellow-500/80 mt-1 uppercase tracking-wider font-semibold">{post.authorTitle}</p>
                </div>
              </div>
              <span className="text-xs text-zinc-600 font-mono">{post.timestamp}</span>
            </div>

            <div 
              className="prose prose-zinc prose-invert max-w-none text-zinc-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex gap-4">
                <button className="text-xs font-semibold text-zinc-500 hover:text-white transition-colors">Répondre</button>
                <button className="text-xs font-semibold text-zinc-500 hover:text-white transition-colors">Citer</button>
              </div>
              <button className="text-xs font-semibold text-zinc-700 hover:text-red-500 transition-colors">Signaler</button>
            </div>
          </Card>
        ))}
      </div>
      
      <Card className="p-8 bg-white/[0.01] border-dashed border-white/10 text-center rounded-[2.5rem]">
        <Button size="lg">
          Publier une réponse
        </Button>
      </Card>
    </div>
  );
}

