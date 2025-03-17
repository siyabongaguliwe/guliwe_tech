import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "GIT",
    "GITHUB",
    "JAVASCRIPT",
    "TAILWINDCSS",
    "REACT",
  ];
  const designTools = ["Figma", "Adobe XD", "Canva"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 gradient-bg text-white"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Introduction */}
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all bg-gray-900">
            <p className="text-gray-300 mb-6">
              Hi there! I am <strong>Siyabonga Neo Guliwe</strong>, the mind behind <strong>Guliwe Tech</strong>. As a passionate developer and designer, I focus on building clean, scalable web applications and user-friendly interfaces that make a difference.
            </p>
            <p className="text-gray-300 mb-6">
              Guliwe Tech was established in <strong>2024</strong> with a vision to reshape the digital space by empowering businesses and individuals. While I’m just starting my professional journey, I’m constantly learning and exploring innovative ways to deliver impactful solutions.
            </p>
            <p className="text-gray-300">
              Every great accomplishment starts with a dream, and mine is to build tools that connect people, solve problems, and create exceptional user experiences.
            </p>
          </div>

          {/* Skills and Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Frontend Skills */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-gray-800">
              <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:shadow-[0_2px_10px_rgba(59,130,246,0.2)] transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Design Tools */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-gray-800">
              <h3 className="text-xl font-bold mb-4">UI/UX Tools</h3>
              <div className="flex flex-wrap gap-3">
                {designTools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-cyan-500/10 text-cyan-500 py-2 px-4 rounded-full text-sm font-medium hover:bg-cyan-500/20 hover:shadow-[0_2px_10px_rgba(34,211,238,0.2)] transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education and Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-gray-900">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>
                  <strong>Certificate in Software Engineering</strong> - ALX AFRICA (2024–2025)
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> Data Structures, Web Development, UI/UX Design
                </li>
                <li>
                  <strong>National Senior Certificate</strong> - Palmridge Secondary School (2019–2023)
                </li>
              </ul>
            </div>

            {/* Future Goals */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-gray-900">
              <h3 className="text-xl font-bold mb-4">🎯 Future Goals</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>Collaborate with innovative businesses to deliver impactful solutions.</li>
                <li>Enhance my expertise in frontend and UI/UX development.</li>
                <li>Launch projects that positively impact communities and users worldwide.</li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
