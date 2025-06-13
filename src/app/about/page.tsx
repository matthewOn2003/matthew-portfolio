// src/app/about/page.tsx

import Image from 'next/image';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Angular.js', 'Next.js', 'Axios', 'Bootstrap', 'TailwindCSS', 'Redux', 'npm',
  'Java', 'Spring Boot', 'Spring', 'Node.js', 'SQL', 'JUnit5', 'Mockito', 'Oracle', 'Kafka', 'Docker', 'Kubernetes', 'OpenShift',
  'Git', 'Maven', 'Postman', 'Jenkins', 'REST APIs'
];

const experience = [
  {
    year: 'Nov 2024 ~ June 2025',
    role: 'Software Engineer',
    company: 'Worldline International',
    desc: '- Carried out batch development of the backend system for the card issuance module to ensure that the logic and output met the requirements of the development documentation. \n- Maintained the Angular.js GUI of the enterprise payment system to ensure that the data could be displayed normally.\n- Used JUnit, Mockito and PowerMockito to unit test the program code to ensure 100% test coverage to meet the software quality requirements of Sonarqube.\n- Performed end-to-end testing of the ISO8583 message flow of the SRS system and debugged the routing component to ensure consistency and integrity during data transmission.'
  },
  {
    year: 'Feb 2024 ~ May 2024',
    role: 'Quality Assurance Intern',
    company: 'Goldsoft Sdn. Bhd.',
    desc: '- Test the form functions of different modules of the ERP backend and adjust the report layout to ensure data integrity. \n- Inspect the differences between the customized Java ERP system and the customer\'s existing Oracle ERP system to ensure consistency during system development. \n- Record any errors and exceptions encountered during quality testing and continue to work with the R&D team to ensure the high quality of the system.',
  },
  {
    year: 'Sept 2022 ~ Sept 2024',
    role: 'IT Graduate',
    company: 'New Era University College',
    desc: 'Completed Diploma in Computer Science.\nRelevant Courses: Database, Java, Android, C++, System Design, Data Structure & Algorithm, Networking',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <section className="max-w-3xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-5xl font-extrabold text-red-600">About Me</h1>
          <p className="text-lg text-gray-700">
            Hi, I’m Matthew — a builder of clean, user-friendly web experiences.
          </p>
        </header>

        {/* Profile */}
        <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
          <div className="flex justify-center w-full md:w-auto">
            <div className="w-60 h-60 bg-gray-100 rounded-full overflow-hidden border-4 border-red-100 shadow-md relative">
              <Image
                src="/avatar.png"
                alt="Matt Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 max-w-prose text-center md:text-left">
            <p className="leading-relaxed text-gray-800">
              I graduated with a diploma in computer science and working experience in building backend systems for
              financial payment platforms. Now I focus on crafting intuitive front-end interfaces
              and full-stack systems that solve real-world problems.
            </p>
            <p className="leading-relaxed text-gray-800">
              My strengths include system thinking, minimalist design, and a passion for practical
              solutions. I believe in code that’s as clean as the interfaces it powers.
            </p>
          </div>
        </div>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-red-600">Skills & Tools</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 bg-red-50 text-red-800 rounded-lg shadow-sm text-center font-medium border border-red-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-red-600">Experience</h2>
          <ol className="relative border-l-2 border-red-200 pl-6 space-y-6">
            {experience.map(({ year, role, company, desc }) => (
              <li key={year} className="relative">
                <span className="absolute -left-4 top-1 w-3 h-3 bg-red-500 rounded-full shadow-sm" />
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-gray-900">
                    {year} &mdash; {role}
                  </p>
                  <p className="text-sm text-gray-600">{company}</p>
                  {desc.split('\n').map((line, i) => (
                    <p key={i} className="text-gray-800">
                      {line}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </section>
    </div>
  );
}
