import { Instagram, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl sm:text-5xl font-bold mb-16">
          Let's Create <span className="text-red-600">Something Epic</span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">

          {/* Instagram */}
          <a
            href="https://instagram.com/rishabharchives_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 
                       px-6 py-5 rounded-2xl hover:border-red-600 
                       hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]
                       transition-all duration-300 w-full sm:w-auto"
          >
            <div className="w-12 h-12 flex items-center justify-center 
                            rounded-xl bg-black border border-neutral-800 
                            text-neutral-400 hover:text-red-500 transition">
              <Instagram size={20} />
            </div>

            <div className="text-left">
              <p className="text-xs text-neutral-500 uppercase">Instagram</p>
              <p className="font-semibold text-white">
                rishabharchives_
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:tirishabh840@gmail.com"
            className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 
                       px-6 py-5 rounded-2xl hover:border-red-600 
                       hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]
                       transition-all duration-300 w-full sm:w-auto"
          >
            <div className="w-12 h-12 flex items-center justify-center 
                            rounded-xl bg-black border border-neutral-800 
                            text-neutral-400 hover:text-red-500 transition">
              <Mail size={20} />
            </div>

            <div className="text-left">
              <p className="text-xs text-neutral-500 uppercase">Email</p>
              <p className="font-semibold text-white break-all">
                tirishabh840@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+911234567890"
            className="flex items-center gap-4 bg-neutral-900 border border-neutral-800 
                       px-6 py-5 rounded-2xl hover:border-red-600 
                       hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]
                       transition-all duration-300 w-full sm:w-auto"
          >
            <div className="w-12 h-12 flex items-center justify-center 
                            rounded-xl bg-black border border-neutral-800 
                            text-neutral-400 hover:text-red-500 transition">
              <Phone size={20} />
            </div>

            <div className="text-left">
              <p className="text-xs text-neutral-500 uppercase">Phone</p>
              <p className="font-semibold text-white">
                +91 7830550394
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}