import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32">
      {/* Grid background */}
      <div className="absolute inset-0 z-0 bg-black dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2]"></div>
      {/* Radial gradient for the container */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-50"></div>

      <div className="relative z-20 container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-100">
            Hi, I'm Pranshu Parashar
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-md mx-auto lg:mx-0">
            I'm a passionate designer and developer who specializes in creating beautiful and functional web experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4">
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-md shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            >
              View Portfolio
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 border border-gray-700 text-gray-100 text-sm font-medium rounded-md shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-lg">
            <img
              src="/image.jpg"
              width="550"
              height="550"
              alt="Hero"
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
