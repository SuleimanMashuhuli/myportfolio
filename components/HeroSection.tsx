

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white min-h-[100vh] text-center">
      <div className="w-full max-w-4xl flex flex-col items-center gap-4 sm:gap-6 z-10">
        {/* Intro Text */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
            Hi, I&apos;m Suleiman Ali
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-500">
            A Software Engineer
          </p>
        </div>

        {/* Main Heading - Fixed width issue */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-relaxed max-w-4xl">
          I am a full-stack developer. Specialized in building scalable applications.
          I&apos;ve done projects focusing on user experience.
        </h1>

        {/* Code Block */}
        <pre className="bg-gray-100 p-3 sm:p-4 rounded text-xs sm:text-sm w-full max-w-md overflow-x-auto text-left">
{`function Portfolio() {
  return (
    <h3 className="font-semibold mb-2">Soft Skills</h3>
    <ul className="list-disc list-inside mb-4 text-gray-700">
  );
}`}
        </pre>
      </div>
    </section>
  );
}
