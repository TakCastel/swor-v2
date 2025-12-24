'use client';

import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  History, 
  Users, 
  Globe, 
  Zap, 
  ChevronRight, 
  Search,
  BookOpen,
  Info,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/shared/utils/cn';
import { UNIVERSE_WIKI } from '../data/universe-wiki';
import { WikiArticle } from '../types';
import { Input } from '@/shared/components/ui/Input';
import { Card, CardContent } from '@/shared/components/ui/Card';
import { Badge } from '@/shared/components/ui/Badge';

export default function UniverseContent() {
  const [selectedArticleId, setSelectedArticleId] = useState<string>(UNIVERSE_WIKI[0].subCategories[0].articles[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([UNIVERSE_WIKI[0].id]);

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const allArticles = useMemo(() => {
    const articles: WikiArticle[] = [];
    UNIVERSE_WIKI.forEach(cat => {
      cat.subCategories.forEach(sub => {
        articles.push(...sub.articles);
      });
    });
    return articles;
  }, []);

  const selectedArticle = useMemo(() => 
    allArticles.find(a => a.id === selectedArticleId) || allArticles[0],
  [selectedArticleId, allArticles]);

  const filteredWiki = useMemo(() => {
    if (!searchQuery) return UNIVERSE_WIKI;
    
    return UNIVERSE_WIKI.map(cat => ({
      ...cat,
      subCategories: cat.subCategories.map(sub => ({
        ...sub,
        articles: sub.articles.filter(art => 
          art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(sub => sub.articles.length > 0)
    })).filter(cat => cat.subCategories.length > 0);
  }, [searchQuery]);

  const categoryIcons: Record<string, any> = {
    history: History,
    society: Users,
    geography: Globe,
    science: Zap
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Mobile Header */}
      <Card className="lg:hidden flex items-center justify-between mb-8 p-4 rounded-2xl">
        <h1 className="text-xl font-cinzel font-bold text-white tracking-wider">WIKI GALACTIQUE</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-zinc-400">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </Card>

      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Sidebar Navigation */}
        <aside className={cn(
          "lg:w-72 space-y-8 shrink-0 lg:block",
          isSidebarOpen ? "block" : "hidden"
        )}>
          <div className="space-y-4 px-4">
            <h1 className="text-3xl font-bold font-cinzel text-white">L'Univers</h1>
            <p className="text-zinc-500 text-sm">Les archives galactiques de SWOR.FR.</p>
          </div>

          {/* Search */}
          <div className="px-4">
            <Input 
              icon={Search}
              placeholder="Rechercher..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <nav className="space-y-2 px-2">
            {filteredWiki.map((category) => {
              const Icon = categoryIcons[category.id] || BookOpen;
              const isOpen = openCategories.includes(category.id);
              
              return (
                <div key={category.id} className="space-y-1">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 group",
                      isOpen ? "bg-white/5 text-white" : "text-zinc-500 hover:text-white hover:bg-white/[0.03]"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={cn(
                        "w-4 h-4 transition-colors",
                        isOpen ? "text-yellow-500" : "text-zinc-600 group-hover:text-zinc-400"
                      )} />
                      <span className="font-bold text-[10px] uppercase tracking-widest">{category.title}</span>
                    </div>
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isOpen ? "rotate-0 text-yellow-500" : "-rotate-90 text-zinc-600"
                    )} />
                  </button>
                  
                  {isOpen && (
                    <div className="ml-4 pl-4 border-l border-white/5 space-y-4 py-2">
                      {category.subCategories.map(sub => (
                        <div key={sub.id} className="space-y-1">
                          <div className="px-3 py-1 text-[9px] font-black text-zinc-600 uppercase tracking-tighter">
                            {sub.title}
                          </div>
                          <ul className="space-y-0.5">
                            {sub.articles.map(article => (
                              <li key={article.id}>
                                <button
                                  onClick={() => {
                                    setSelectedArticleId(article.id);
                                    if (window.innerWidth < 1024) setIsSidebarOpen(false);
                                  }}
                                  className={cn(
                                    "w-full text-left px-3 py-2 rounded-xl text-xs transition-all",
                                    selectedArticleId === article.id 
                                      ? 'bg-yellow-500/10 text-yellow-500 font-bold' 
                                      : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                                  )}
                                >
                                  {article.title}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <Card className="mx-4 p-6 bg-yellow-500/5 border-yellow-500/10 rounded-3xl">
            <p className="text-[10px] uppercase font-bold text-yellow-500 tracking-widest mb-2">Archives</p>
            <p className="text-xs text-zinc-500 leading-relaxed italic">
              "L'histoire est écrite par ceux qui survivent à l'hyperespace."
            </p>
          </Card>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 space-y-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            <span>Archives</span>
            <ChevronRight className="w-3 h-3 text-zinc-800" />
            <span className="text-zinc-500">Wiki</span>
            <ChevronRight className="w-3 h-3 text-zinc-800" />
            <span className="text-yellow-500/70">{selectedArticle.category}</span>
          </div>

          <div className="flex flex-col xl:flex-row gap-12">
            {/* Article Content */}
            <div className="flex-1 space-y-12">
              <header className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold font-cinzel text-white leading-tight">
                  {selectedArticle.title}
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed pl-6 border-l-2 border-yellow-500/30">
                  {selectedArticle.excerpt}
                </p>
              </header>

              <div className="prose prose-invert prose-zinc max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({node, ...props}) => (
                      <h2 className="text-2xl font-bold text-white font-cinzel mt-12 mb-6 flex items-center gap-4 border-b border-white/5 pb-4" {...props} />
                    ),
                    h3: ({node, ...props}) => (
                      <h3 className="text-xl font-bold text-white font-cinzel mt-8 mb-4" {...props} />
                    ),
                    p: ({node, ...props}) => (
                      <p className="text-zinc-400 leading-relaxed mb-6 text-lg" {...props} />
                    ),
                    ul: ({node, ...props}) => (
                      <ul className="list-disc list-inside space-y-2 mb-6 text-zinc-400" {...props} />
                    ),
                    li: ({node, ...props}) => (
                      <li className="text-lg" {...props} />
                    ),
                    strong: ({node, ...props}) => (
                      <strong className="text-yellow-500/90 font-bold" {...props} />
                    ),
                    blockquote: ({node, ...props}) => (
                      <blockquote className="border-l-4 border-yellow-500/20 pl-6 italic text-zinc-500 my-8" {...props} />
                    ),
                  }}
                >
                  {selectedArticle.content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Infobox */}
            <aside className="w-full xl:w-80 shrink-0">
              <Card className="sticky top-32">
                <div className="aspect-square bg-zinc-900/50 flex items-center justify-center relative border-b border-white/5">
                  <span className="text-8xl opacity-5 font-cinzel text-white select-none">{selectedArticle.title[0]}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <Badge variant="yellow">DONNÉES ARCHIVÉES</Badge>
                  </div>
                </div>
                
                <dl className="p-8 space-y-6">
                  {Object.entries(selectedArticle.metadata).map(([key, value]) => (
                    <div key={key} className="space-y-2 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <dt className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">{key}</dt>
                      <dd className="text-sm text-zinc-300 font-medium">
                        {Array.isArray(value) ? (
                          <div className="flex flex-wrap gap-2 mt-1">
                            {value.map(v => (
                              <Badge key={v} variant="outline" className="px-2 py-0.5 rounded-md bg-white/5 border-white/5 text-[10px] normal-case tracking-normal font-medium">
                                {v}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="bg-yellow-500/5 p-6 border-t border-white/5">
                  <div className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-yellow-500/50 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-zinc-500 leading-relaxed">
                      Archive officielle de la Bordure Intérieure. Mis à jour : {new Date().toLocaleDateString('fr-FR')}.
                    </p>
                  </div>
                </div>
              </Card>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

