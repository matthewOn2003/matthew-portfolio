// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';


const isExternal = (url: string) => url.startsWith('http');


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
    title: 'HR Management Program',
    description: 'A Java-based HR program allowing both admin and employees to log in and perform HR-related tasks in a simulated environment.',
    path: 'https://github.com/matthewOn2003/hrms-program',
  }
];



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

      </section>

      <main className="py-16 px-6 max-w-5xl mx-auto space-y-20">
        {/* Featured Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-red-600">Featured Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ title, description, path }) => {
              const content = (
                <div className="bg-white border border-red-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition h-full">
                  {/* <div className="h-40 bg-gray-100 rounded-md mb-4" /> */}
                  <h3 className="text-xl font-semibold mb-2 text-red-700">{title}</h3>
                  <p className="text-gray-700">{description}</p>
                </div>
              );

              return isExternal(path) ? (
                <a
                  key={title}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:no-underline"
                >
                  {content}
                </a>
              ) : (
                <Link key={title} href={path} className="block hover:no-underline">
                  {content}
                </Link>
              );
            })}

          </div>
          <div className='text-center'>
            <Link
              href="/projects"
              className="mt-8 inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition"
            >
              View More &gt; &gt;
            </Link>

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
