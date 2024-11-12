import Link from 'next/link';

export default function Profiles() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 font-sans">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">My Profiles</h2>
      <div className="space-y-8 text-center">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-yellow-400">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/ayesha-abro-246a702ba"
            target="_blank"
            className="text-yellow-400 hover:text-yellow-300"
          >
            Visit my LinkedIn
          </a>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-yellow-400">GitHub</h3>
          <a
            href="https://github.com/ayeshaabro25"
            target="_blank"
            className="text-yellow-400 hover:text-yellow-300"
          >
            Visit my GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
