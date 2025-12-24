'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { path: '/', label: 'Portal' },
  { path: '/forum', label: 'Forum' },
  { path: '/rules', label: 'Règlement' },
  { path: '/universe', label: 'Univers' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-black border-b-2 border-yellow-600 shadow-lg shadow-yellow-600/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 text-yellow-400 hover:text-yellow-300 transition-colors">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L9.44 8.65L2 9.71L7.55 14.88L6.18 22L12 18.5L17.82 22L16.45 14.88L22 9.71L14.56 8.65L12 2Z" />
              </svg>
              <span className="text-3xl font-bold font-cinzel tracking-wider">SWOR.FR</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "text-lg transition-colors duration-300 pb-1 border-b-2",
                    isActive 
                      ? "text-yellow-400 border-yellow-400" 
                      : "text-gray-300 hover:text-yellow-400 border-transparent"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center">
            <Link href="/profile" className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <User className="h-8 w-8" />
              <span className="hidden lg:inline">Mon Profil</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

