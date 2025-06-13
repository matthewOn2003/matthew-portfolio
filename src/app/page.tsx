// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-red-100 via-white to-red-100 px-4">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
          Hi, I’m Matthew
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          A software engineer turning backend experience into clean, modern frontend apps—especially for SaaS and e‑commerce.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
        >
          View My Work
        </Link>
      </section>

      <main className="py-16 px-6 max-w-5xl mx-auto space-y-20">
        {/* Featured Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {['A', 'B', 'C'].map((name) => (
              <div
                key={name}
                className="bg-white border border-red-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="h-40 bg-gray-100 rounded-md mb-4" />
                <h3 className="text-xl font-semibold mb-2">Project {name}</h3>
                <p className="text-gray-600">
                  A brief description of Project {name} goes here.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About Preview */}
        <section className="flex flex-col items-center md:flex-row md:items-center gap-12">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 bg-gray-100 rounded-full overflow-hidden border-4 border-red-200">
              <Image
                src="/avatar.png"
                alt="Matthew’s avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="max-w-prose text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 mb-6">
              Software engineer with experience in full‑stack enterprise fintech systems and ERP QA, now creating clean frontend UIs with React, TypeScript, and Tailwind.
            </p>
            <Link
              href="/about"
              className="px-5 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to work together?</h2>
          <p className="text-gray-700 mb-6">
            Whether you have a project in mind or just want to say hello, I’m always open to new opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
          >
            Get in Touch
          </Link>
        </section>
      </main>
    </div>
  );
}
