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

  const backendSkills = ["Figma", "Adobe"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Us
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all bg-gray-900">
            <p className="text-gray-300 mb-6">
              Welcome to Guliwe Tech! At Guliwe Tech, we are passionate about crafting clean, scalable web applications that provide exceptional performance and a delightful user experience. Our mission is to empower businesses and individuals by delivering top-notch technology solutions that drive success.
            </p>
            <p className="text-gray-300 mb-6">
              Our journey began in 2024 with a vision to revolutionize the digital landscape by creating innovative and user-friendly web solutions. Founded by Siyabonga Neo Guliwe, we have continuously grown and dedicated ourselves to excellence.
            </p>
            <p className="text-gray-300 mb-6">
              Our design team focuses on creating intuitive and engaging user interfaces that enhance user satisfaction and drive business success. We believe in the power of teamwork and collaboration to achieve great results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-gray-800">
                <h3 className="text-xl font-bold mb-4">Proficient Frontend Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all bg-gray-800">
                <h3 className="text-xl font-bold mb-4">Proficient UI/UX Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-gray-900">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Certificate In Software Engineering</strong> - AlX AFRICA (2024-2025)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, UI/UX Designing
                </li>
                <li>
                  <strong>National Senior Certificate</strong> - Palmridge Secondary School (2019-2023)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-gray-900">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Software Engineer at ALX AFRICA (2024)</h4>
                  <p>Developed and maintained web applications.</p>
                </div>

                <div>
                  <h4 className="font-semibold">Professional Foundations for the Digital Age (2025)</h4>
                  <p>Assisted in developing a web application that helps job seekers and employers connect with just a click!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
