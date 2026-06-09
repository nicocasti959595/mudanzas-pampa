import { testimonials } from "@/lib/content";
import { IconStar } from "./Icons";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="opiniones" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Opiniones
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
              Familias y empresas que ya se mudaron con nosotros
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-line bg-steel/40 px-5 py-3">
            <span className="font-display text-3xl font-extrabold text-brand">4,9</span>
            <div>
              <span className="flex text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </span>
              <p className="text-xs text-mist">+300 reseñas</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 60}
              className="card-glow glass rounded-2xl p-6 flex flex-col"
            >
              <span className="flex text-brand">
                {Array.from({ length: 5 }).map((_, j) => (
                  <IconStar key={j} className="h-4 w-4" />
                ))}
              </span>
              <p className="mt-4 text-white/90 flex-1">“{t.text}”</p>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-line">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-gradient-to-br from-brand/30 to-brand-deep/30 text-brand font-bold text-sm ring-1 ring-brand/20">
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </span>
                <div className="leading-tight">
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-mist">{t.area}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
