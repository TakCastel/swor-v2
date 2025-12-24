'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from 'lucide-react';
import { cn } from '@/shared/utils/cn';

const navLinks = [
  { path: '/', label: 'Portal' },
  { path: '/forum', label: 'Forum' },
  { path: '/rules', label: 'Règlement' },
  { path: '/universe', label: 'Univers' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center group py-2">
              <div className="flex flex-col items-center justify-center leading-[0] font-starwars text-yellow-500 transition-transform group-hover:scale-105">
                <span className="text-2xl tracking-tighter">SW</span>
                <span className="text-2xl tracking-tighter -mt-3">oR</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                      isActive 
                        ? "text-white bg-white/5" 
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/profile" 
              className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            >
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

