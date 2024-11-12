"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8 font-sans">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">My Projects</h2>

      {/* Project Section: Prodigy Info Tech */}
      <section className="bg-gray-800 p-6 rounded-lg mb-12">
        <h3 className="text-3xl font-semibold text-yellow-400 mb-4 text-center">Prodigy Info Tech</h3>
        <ul className="list-disc list-inside ml-6 text-gray-300">
          <li>Developed data pipelines for customer behavior analysis using Python and SQL.</li>
          <li>Implemented a machine learning model to predict customer churn, improving retention rates.</li>
          <li>Created automated reports using Power BI, enhancing decision-making for the sales team.</li>
        </ul>
      </section>

      {/* Project Section: CognoRise Info Tech */}
      <section className="bg-gray-800 p-6 rounded-lg mb-12">
        <h3 className="text-3xl font-semibold text-yellow-400 mb-4 text-center">CognoRise Info Tech</h3>
        <ul className="list-disc list-inside ml-6 text-gray-300">
          <li>Built interactive dashboards for sales data visualization, increasing reporting efficiency.</li>
          <li>Developed data cleaning pipelines to enhance predictive analytics accuracy.</li>
          <li>Optimized data models, reducing processing time by 30%.</li>
        </ul>
      </section>

      {/* Navigation Back to Home */}
      <div className="text-center mt-12">
        <Link href="/" className="text-yellow-400 hover:text-yellow-300 text-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
