import React from "react";
import { Button } from "../components/ui/Button";  // Agar tu ye button use nahi kar raha, toh hata bhi sakta hai

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 font-sans">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Prince kumar prasad </h1>
        <p className="text-lg text-gray-600">web Developer | Tech Enthusiast | Lifelong Learner</p>
        <div className="mt-4">
        <a href="/Prince_Resume.pdf" download>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Download Resume</button>
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Hey there! I'm Prince, a passionate developer with a love for creating clean, functional, and user-friendly web experiences. I enjoy learning new technologies and building projects that solve real-world problems.
        </p>
      </section>
      {/* Skills & Languages Section */}
<section className="mt-12">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Languages</h2>
  <ul className="list-disc list-inside text-gray-700 max-w-3xl mx-auto space-y-1">
    <li>Languages: HTML, CSS, JavaScript, C, Python</li>
    <li>Frameworks: React, TailwindCSS</li>
    <li>Tools: GitHub, VS Code, npm</li>
    <li>Other: Problem Solving, Debugging, UI Design Basics</li>
  </ul>
</section>


      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h2>
        <ul className="grid gap-6 md:grid-cols-2">
          <li className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold">VPN Game Website</h3>
            <p className="text-gray-600 text-sm">
              A mini-game site with 2048, Dino Game, Snake, and Flappy Bird clone using TailwindCSS & GitHub deployment.
            </p>
          </li>
          <li className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Personal Portfolio</h3>
            <p className="text-gray-600 text-sm">
              You're looking at it! Built with React and TailwindCSS to showcase my projects and skills.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-700">Email: princeprasad2200@gmail.com</p>
        <p className="text-gray-700">Phone: 6205254993</p>
        <p className="text-gray-700">GitHub: github.com/prince</p>
      </section>
    </main>
  );
}
