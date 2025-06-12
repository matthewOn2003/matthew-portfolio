// src/app/about/page.tsx

import Image from 'next/image';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript',
  'React', 'Next.js', 'Tailwind', 'Prisma',
];

const experience = [
  {
    year: '2025',
    role: 'Front-End Developer',
    company: 'Aurient Studio',
    desc: 'Building portfolio & demo apps with Next.js & Tailwind.',
  },
  {
    year: '2024',
    role: 'Back-End Engineer',
    company: 'Financial Corp',
    desc: 'Developed payment system features with Node.js.',
  },
  {
    year: '2023',
    role: 'IT Graduate',
    company: 'University of XYZ',
    desc: 'Completed BSc in Information Technology.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-16">
      <section className="max-w-3xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-5xl font-extrabold">About Me</h1>
          <p className="text-lg text-gray-600">
            Hi, I’m Matt — a builder of clean, user-friendly web experiences.
          </p>
        </header>

        {/* Profile */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src="/profile-placeholder.jpg"
              alt="Matt Profile"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="leading-relaxed text-gray-700">
              I graduated with a degree in IT and have experience building backend systems for
              financial payment platforms. Now I focus on crafting intuitive front-end interfaces
              and small full-stack tools that solve real-world problems.
            </p>
            <p className="leading-relaxed text-gray-700">
              My strengths include system thinking, minimalist design, and a passion for practical
              solutions. I believe in code that’s as clean as the interfaces it powers.
            </p>
          </div>
        </div>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Skills & Tools</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 bg-white rounded-lg shadow-sm text-center font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>
          <ol className="relative border-l-2 border-gray-300 pl-6 space-y-6">
            {experience.map(({ year, role, company, desc }) => (
              <li key={year} className="relative">
                <span className="absolute -left-4 top-1 w-3 h-3 bg-orange-500 rounded-full" />
                <div className="space-y-1">
                  <p className="text-lg font-semibold">
                    {year} &mdash; {role}
                  </p>
                  <p className="text-sm text-gray-600">{company}</p>
                  <p className="text-gray-700">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </section>
    </div>
  );
}
