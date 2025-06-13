// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa6';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

type SocialItem = {
  icon: React.ElementType;
  url: string;
  label: string;
};

const socialItems: SocialItem[] = [
  { icon: FaGithub, url: 'https://github.com/matthewOn2003', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://linkedin.com/in/on-wu-xu', label: 'LinkedIn' },
  { icon: FaWhatsapp, url: 'https://wa.me/601111135229', label: 'WhatsApp' },
  { icon: FaEnvelope, url: "mailto:onwuxu@gmail.com?subject=Let's%20Work%20Together", label: 'Email' },
];


export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 bg-red-600 z-50 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Matthew On
        </Link>

        {/* Desktop nav + socials */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Main links */}
          <nav className="flex space-x-4">
            {navItems.map(({ name, path }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`relative px-3 py-1 rounded text-sm font-medium transition-colors duration-200 ${isActive
                    ? 'bg-white text-red-600'
                    : 'text-white hover:bg-white hover:text-red-600'
                    }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            {socialItems.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 text-white hover:text-red-300 transition"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
            {/* Resume download */}
            <a
              href="/resume.pdf"
              download
              className="ml-4 inline-flex items-center px-3 py-1 bg-white text-red-600 rounded text-sm font-medium hover:bg-red-100 transition"
            >
              <ArrowDownTrayIcon className="w-5 h-5 mr-1" />
              Resume
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <nav className="md:hidden bg-red-600 border-t border-red-500">
          <ul className="flex flex-col py-2 space-y-1">
            {navItems.map(({ name, path }) => {
              const isActive = pathname === path;
              return (
                <li key={path}>
                  <Link
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium rounded transition-colors duration-200 ${isActive
                      ? 'bg-white text-red-600'
                      : 'text-white hover:bg-white hover:text-red-600'
                      }`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
            <li className="border-t border-red-500 mt-2 pt-2">
              <div className="flex flex-col space-y-2 px-4">
                {socialItems.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-red-300 transition"
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="mt-2 inline-flex items-center px-3 py-1 bg-white text-red-600 rounded text-sm font-medium hover:bg-red-100 transition"
                >
                  <ArrowDownTrayIcon className="w-5 h-5 mr-1" />
                  Resume
                </a>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
