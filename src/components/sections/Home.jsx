import { RevealOnScroll } from "../RevealOnScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  return (
    <section
      id="home"
      className="gradient-bg min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          {/* Typing Animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            <Typewriter
              words={["Hi, Welcome to Guliwe technologies.", "Building exceptional web experiences."]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          {/* Introduction */}
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            We specialize in front-end web development and UI/UX design. Our mission is to craft clean, scalable web applications that provide exceptional performance and a delightful user experience.
          </p>

          {/* Call-to-Actions */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="cta bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View our services
            </a>

            <a
              href="#contact"
              className="cta border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Us
            </a>

            <a
              href="https://drive.google.com/file/d/1ZC3NuuL1JHcAYVpWnEqcGPL4X9543njB/view?usp=drive_link"
              className="cta bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(34, 197, 94, 0.4)]"
              target="_blank" rel="noopener noreferrer"
              download
            >
              View Resume
            </a>
          </div>

          {/* Stats Section */}
          <div className="flex justify-center space-x-8 mt-12">
            <div>
              <h2 className="text-4xl font-bold text-blue-500">10+</h2>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-cyan-400">5+</h2>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-green-500">1+</h2>
              <p className="text-gray-400">Years of Experience</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a href="https://twitter.com/GuliweNeo23583" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="icon text-white transition hover:text-blue-500" />
            </a>
            <a href="https://www.linkedin.com/company/105955908/admin/dashboard" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon text-white transition hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/guliwe.tech" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="icon text-white transition hover:text-blue-500" />
            </a>
            <a href="https://wa.me/message/J4JDWERVSMQMM1" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" className="icon text-white transition hover:text-green-500" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
