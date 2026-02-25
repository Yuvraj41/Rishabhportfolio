export default function Portfolio() {
  const projects = [
    { title: "Client Work", category: "Reel",video:"https://drive.google.com/file/d/1736LH_3cpkxPCB_AtNavCnaTyT0x2NY4/preview" },
    { title: "Personal work", category: "Reel", video:"https://drive.google.com/file/d/1SLRce7CfbNXFXi6_TrZ-4v_wMs0T3OFm/preview" },
    { title: "Client Work", category: "Reel",video:"https://drive.google.com/file/d/16eMijZuQCj9vTd3UjrporhGkurASXnat/preview"  },
    { title: "Client Work", category: "Reel",video:"https://drive.google.com/file/d/1L3hm_FldLYlE97lxQVEuwUXT2Mf1n8-E/preview"  },
    { title: "Personal work", category: "Reel", video:"https://drive.google.com/file/d/1VMQZ2oIYlObDd19jKevrlpJ5xteoALE1/preview"},
    { title: "client Work", category: "Reel",video:"https://drive.google.com/file/d/1Ul-f3TgSbIvbO8y6X_5sGxSjVkbFfwga/preview" },
    { title: "client work", category: "Reel",video:"https://drive.google.com/file/d/16f4PCAWexeBkxv-ZLm56pqW8gU9dbVOO/preview" },
    { title: "client work", category: "Reel", video:"https://drive.google.com/file/d/1o3eWcDItTxnOu4Ka5gIE399q6_m3eO5-/preview" },
    { title: "Personal work", category: "Reel", video:"https://drive.google.com/file/d/1tn07f19bq3ulUeCFLe8FCq-IuZUwf45p/preview" },
    { title: "Personal work", category: "Reel", video:"https://drive.google.com/file/d/1kcJI2CkGa987lT74OFAoLTE1EvqBCO8X/preview" },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">
        Featured <span className="text-red-600">Works</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full aspect-video rounded-2xl 
             overflow-hidden bg-neutral-900 
             border border-neutral-800 
             hover:border-red-600 transition-all"
          >
            <iframe
      src={project.video}
      className="absolute inset-0 w-full h-full"
      allow="autoplay"
    ></iframe>
            {/* <p className="text-xs text-red-600 uppercase font-bold mb-1">
              {project.category}
            </p>
            <h3 className="text-xl font-bold">{project.title}</h3> */}
          </div>
        ))}
      </div>
    </section>
  );
}