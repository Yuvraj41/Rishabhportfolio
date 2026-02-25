export default function Services() {
  const services = [
    "YouTube Editing",
    "Instagram Reels",
    "Color Grading",
  ];

  return (
    <section id="services" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Professional <span className="text-red-600">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="p-8 text-center bg-black border border-neutral-800 rounded-xl hover:border-red-600 transition hover:border-red-600"
            >
              <h3 className="text-xl font-bold">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}