export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h2 className="text-xl font-black uppercase tracking-tight">
          Rishabh tiwari
        </h2>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#home" className="hover:text-red-500 transition">Home</a>
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#portfolio" className="hover:text-red-500 transition">Portfolio</a>
          <a href="#services" className="hover:text-red-500 transition">Services</a>
          <a href="#contact" className="hover:text-red-500 transition">Contact</a>
        </nav>
        
        <a href="#contact">
        <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-sm font-bold transition">
          Hire Me
        </button>
        </a>
      </div>
    </header>
  );
}