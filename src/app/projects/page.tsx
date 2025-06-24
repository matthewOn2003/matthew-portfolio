// src/app/projects/page.tsx

import Link from 'next/link';

const projects = [
  {
    title: 'Store Hub',
    description: 'A full-stack e-commerce platform inspired by Shopee, where customers can shop and vendors can manage their own stores.',
    path: 'https://store-hub-app.vercel.app/',
  },
  {
    title: 'Cinema Website',
    description: 'A mock GSC-like cinema website for booking a movie tickets and food. Browsing now showing movies, schedules, and ticket information.',
    path: 'https://github.com/matthewOn2003/My-Projects/tree/main/Projects/Project_Cinema%20Website',
  },
  {
    title: 'House Rental Program',
    description: 'A simple Java + MySQL CRUD program simulating a flat rental system with basic tenant and unit management.',
    path: 'https://github.com/matthewOn2003/My-Projects/tree/main/Projects/Project_House%20Rental%20System',
  },
  {
    title: 'HR Management Program',
    description: 'A Java-based HR program allowing both admin and employees to log in and perform HR-related tasks in a simulated environment.',
    path: 'https://github.com/matthewOn2003/hrms-program',
  },
  {
    title: 'Hotel Booking App',
    description: 'An Android app built with teammates to simulate a hotel booking experience with hotel listing and room reservation features.',
    path: '/projects/hotel-booking-app',
  },
  {
    title: 'Hotel Booking Program',
    description: 'A C++ version of the hotel booking system, featuring simple console interaction for room booking and status tracking.',
    path: '/projects/hotel-booking-cpp-program',
  },
  {
    title: 'Shop Lite',
    description: 'A minimal React + Tailwind e-commerce UI that displays a grid of products, mimicking a storefront homepage.',
    path: 'https://shop-lite-alpha.vercel.app/',
  }
];


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <header className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">Projects</h1>
        <p className="text-lg text-gray-700">
          A curated selection of systems I’ve built — from business dashboards to public platforms.
        </p>
      </header>

      <main className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, path }) => (
          <Link
            key={path}
            href={path}
            target="_blank"
            className="block rounded-2xl bg-red-50 border border-red-200 p-6 shadow-sm transition hover:shadow-md hover:ring-1 hover:ring-red-500"
          >
            <h2 className="text-2xl font-semibold text-red-700 mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <span className="text-red-600 font-medium hover:underline">
              View Details →
            </span>
          </Link>
        ))}
      </main>
    </div>
  );
}
