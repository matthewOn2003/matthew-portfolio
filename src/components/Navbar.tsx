// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 bg-black z-50 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="text-xl font-bold text-white">
          Matthew On
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navItems.map(({ name, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`relative px-2 py-0.5 text-sm font-medium transition-colors ${isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
                  }`}
              >
                {name}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-yellow-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col py-2 space-y-1">
            {navItems.map(({ name, path }) => {
              const isActive = pathname === path;
              return (
                <li key={path}>
                  <Link
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium rounded transition-colors ${isActive
                        ? 'bg-yellow-400 text-black'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
