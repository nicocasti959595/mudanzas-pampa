import { whyUs } from "@/lib/content";
import { iconMap } from "./Icons";
import Reveal from "./Reveal";

export default function WhyUs() {
  return (
    <section id="porque" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-1/3 right-0 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Por qué elegirnos
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
              Mudarte tiene que ser fácil, y de eso nos ocupamos
            </h2>
            <p className="mt-4 text-mist max-w-lg">
              Trabajamos con transparencia total: precio cerrado antes de empezar,
              personal propio asegurado e identificado, y el cuidado de tratar tus
              cosas como si fueran nuestras.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "100%", v: "presupuesto sin cargo" },
                { k: "17+", v: "años de experiencia" },
                { k: "4,9★", v: "valoración media" },
              ].map((x) => (
                <div key={x.v} className="rounded-2xl border border-line bg-steel/40 p-4 text-center">
                  <p className="font-display text-2xl font-extrabold text-brand">{x.k}</p>
                  <p className="mt-1 text-[11px] leading-tight text-mist">{x.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {whyUs.map((w, i) => {
              const Icon = iconMap[w.icon as keyof typeof iconMap];
              return (
                <Reveal
                  key={w.title}
                  delay={i * 70}
                  className="rounded-2xl border border-line bg-gradient-to-b from-white/[0.05] to-transparent p-6 hover:border-brand/30 transition"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display font-bold text-white">{w.title}</h3>
                  <p className="mt-1.5 text-sm text-mist">{w.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
