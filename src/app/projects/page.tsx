// src/app/projects/page.tsx

import Link from 'next/link';

const projects = [
  {
    title: 'Mini CRM',
    description: 'A lightweight customer relationship management tool for small teams.',
    path: '/projects/mini-crm',
  },
  {
    title: 'Inventory Tracker',
    description: 'An ERP-inspired system to track stock, purchases, and sales.',
    path: '/projects/inventory-tracker',
  },
  {
    title: 'Multi-store Admin',
    description: 'Centralized dashboard for managing multiple e-commerce stores.',
    path: '/projects/multi-store-admin',
  },
  {
    title: 'Course Marketplace',
    description: 'Platform for browsing, purchasing, and consuming online courses.',
    path: '/projects/course-marketplace',
  },
  {
    title: 'Portfolio Builder',
    description: 'Customizable template system for freelancer websites.',
    path: '/projects/portfolio-builder',
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-16">
      <header className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">Projects</h1>
        <p className="text-lg text-gray-600">
          A curated selection of systems I’ve built — from business dashboards to public platforms.
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, path }) => (
          <Link
            key={path}
            href={path}
            className="block rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md hover:ring-1 hover:ring-orange-500"
          >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <span className="text-orange-600 font-medium hover:underline">
              View Details →
            </span>
          </Link>
        ))}
      </main>
    </div>
  );
}
