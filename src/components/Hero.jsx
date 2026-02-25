export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-black text-white">
      <div className="text-center px-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
          RISHABH <span className="text-red-600">TIWARI</span>
        </h1>

        <p className="text-lg md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto">
          Cinematic Videos and Reels Editor. Transforming raw footage into visual masterpieces.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          {/* <button className="bg-red-600 px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition">
            Watch Showreel
          </button> */}
          <a href="#contact">
          <button className="border border-neutral-700 px-8 py-4 rounded-lg font-bold hover:bg-neutral-800 transition">
            Contact Me
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}