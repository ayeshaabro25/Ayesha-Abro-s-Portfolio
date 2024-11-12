"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Loading page component
const LoadingPage = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
    <motion.div
      className="text-4xl font-bold text-yellow-400"
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      Loading...
    </motion.div>
  </div>
);

// Function to render skills
function renderSkill(skill: string, percentage: number) {
  return (
    <div className="mb-6" key={skill}>
      <div className="flex justify-between mb-2">
        <span className="text-lg font-medium text-gray-300">{skill}</span>
        <span className="text-lg font-medium text-yellow-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <motion.div
          className="bg-yellow-400 h-3 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5 }}
        />
      </div>
    </div>
  );
}

// Main Home component
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 font-sans">
      {/* About Section */}
      <section className="bg-gray-800 p-6 rounded-lg mb-16">
        <h2 className="text-4xl font-bold text-yellow-400 mb-4 text-center">About Me</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          I’m Ayesha Abro, a dedicated Data Scientist skilled in data analysis, machine learning, and data visualization.
        </p>
      </section>

      {/* Experience Section */}
      <section className="bg-gray-700 p-6 rounded-lg mb-16">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8 text-gray-300">
          {/* CognoRise Info Tech */}
          <div>
            <p className="text-2xl font-semibold text-yellow-400">CognoRise Info Tech</p>
            <p>Data Analyst Intern (July 2024 - August 2024)</p>
            <ul className="list-disc list-inside ml-4">
              <li>Assisted in collecting, cleaning, and organizing large datasets for analysis.</li>
              <li>Utilized Python, SQL, and Excel for data analysis and reporting.</li>
              <li>Contributed to a dashboard project, enhancing data visualization efficiency.</li>
            </ul>
          </div>

          {/* Prodigy Info Tech */}
          <div>
            <p className="text-2xl font-semibold text-yellow-400">Prodigy Info Tech</p>
            <p>Data Science Intern (July 2024 - August 2024)</p>
            <ul className="list-disc list-inside ml-4">
              <li>Conducted data analysis to support business decisions using Python and SQL.</li>
              <li>Maintained and optimized databases, ensuring data quality and availability.</li>
              <li>Implemented a data quality control process, reducing data errors by 15%.</li>
            </ul>
          </div>

          {/* Applied Data Lab */}
          <div>
            <p className="text-2xl font-semibold text-yellow-400">Applied Data Lab</p>
            <p>Data Analyst Intern (November 2023 - February 2024)</p>
            <ul className="list-disc list-inside ml-4">
              <li>Performed exploratory data analysis (EDA) to uncover patterns and trends.</li>
              <li>Collaborated with senior analysts on machine learning projects for data insights.</li>
              <li>Developed comprehensive reports using Python, SQL, and visualization tools.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-800 p-6 rounded-lg mb-16">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Skills</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {renderSkill("Data Analysis", 90)}
          {renderSkill("Machine Learning", 75)}
          {renderSkill("Data Visualization", 85)}
          {renderSkill("Python", 95)}
          {renderSkill("SQL", 88)}
          {renderSkill("Power BI", 70)}
          {renderSkill("JavaScript", 70)}
          {renderSkill("TypeScript", 65)}
          {renderSkill("HTML", 80)}
          {renderSkill("CSS", 75)}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-700 p-6 rounded-lg text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-4">Email: abroayesha45@gmail.com</p>
        <div className="space-x-8 text-xl">
          <a href="https://www.linkedin.com/in/ayesha-abro-246a702ba" className="text-yellow-400 hover:text-yellow-300">LinkedIn</a>
          <a href="https://github.com/ayeshaabro25" className="text-yellow-400 hover:text-yellow-300">GitHub</a>
        </div>
      </section>

      {/* View Projects Link Section */}
      <div className="text-center mt-8">
        <Link href="/projects" className="text-yellow-400 hover:text-yellow-300 text-lg">
          View My Projects
        </Link>
      </div>
    </div>
  );
}
