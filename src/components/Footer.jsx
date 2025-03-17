export const Footer = () => {
    return (
      <footer
        className="py-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Guliwe Tech. All rights reserved.
          </p>
          <div className="mt-4 flex items-center justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:example@gmail.com"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  };
  