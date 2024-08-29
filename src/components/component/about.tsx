"use client";
import React from "react";

export default function About() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2]"></div>
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-10 bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative z-20 container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I&aposm a passionate web developer with a strong background in front-end technologies. With over 5 years of
              experience, I&aposve honed my skills in creating visually appealing and user-friendly web applications. My
              expertise spans across HTML, CSS, JavaScript, and various front-end frameworks like React and Vue.js.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-gray-100 dark:bg-zinc-900 p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Front-End</h3>
              <p className="text-gray-700 dark:text-gray-400">
                HTML, CSS, JavaScript, React, Vue.js
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 dark:bg-zinc-900 p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Back-End</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Node.js, Express, MongoDB, SQL
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 dark:bg-zinc-900 p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Back-End</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Node.js, Express, MongoDB, SQL
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 dark:bg-zinc-900 p-6 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Back-End</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Node.js, Express, MongoDB, SQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
