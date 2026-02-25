import tools from "../assets/tools.png";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Crafting Visual <span className="text-red-600">Narratives</span>
          </h2>

          <p className="text-neutral-400 text-lg mb-8">
            I specialize in high-end video post-production, from instagram content to cinematic reels and youtube videos.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {["Premiere Pro", "DaVinci Resolve", "CapCut"].map((tool) => (
              <div
                key={tool}
                className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg font-bold"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-900 aspect-square rounded-xl">
          <img 
          src={tools} 
          alt="Tools I use" 
          className="mt-24 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}