// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-yellow-100 via-white to-yellow-100 px-4">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
          Hi, I’m Matthew
        </h1>
        <p className="mt-4 text-xl max-w-xl">
          I craft minimalist, high-impact web experiences that blend form and function.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition"
        >
          View My Work
        </Link>
      </section>

      <main className="py-20 px-8 max-w-5xl mx-auto space-y-20">
        {/* Featured Projects */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {['A', 'B', 'C'].map((name) => (
              <div
                key={name}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="h-40 bg-gray-200 rounded-md mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Project {name}</h3>
                <p className="text-gray-600">A brief description of Project {name} goes here.</p>
              </div>
            ))}
          </div>
        </section>

        {/* About Preview */}
        <section className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-40 h-40 bg-gray-200 rounded-full mb-6 md:mb-0" />
          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 mb-4">
              I’m a web developer passionate about building clean, user-friendly interfaces and
              intuitive experiences.
            </p>
            <Link
              href="/about"
              className="px-5 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to work together?</h2>
          <p className="text-gray-600 mb-6">
            Whether you have a project in mind or just want to say hello, I’m always open to new
            opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-900 transition"
          >
            Get in Touch
          </Link>
        </section>
      </main>
    </div>
  );
}
