import { site, waLink, telLink, WA_URGENT_MSG } from "@/lib/site";
import { IconWhatsApp, IconPhone, IconTruck } from "./Icons";

export default function EmergencyCTA() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand to-brand-bright px-6 py-12 sm:px-12 sm:py-14">
          <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay" />
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">
                <IconTruck className="h-4 w-4" /> ¿TE MUDÁS PRONTO?
              </p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-white">
                Asegurá tu fecha y mudate sin estrés
              </h2>
              <p className="mt-3 text-white/90 text-lg">
                Las mejores fechas se reservan rápido. Escribinos ahora, te pasamos
                el presupuesto sin cargo y coordinamos el día que más te convenga.
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full sm:w-auto shrink-0">
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-4 text-base font-extrabold text-brand-deep shadow-xl hover:bg-white/95 transition"
              >
                <IconPhone className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
              <a
                href={waLink(WA_URGENT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-ink/30 ring-1 ring-white/40 px-7 py-4 text-base font-bold text-white hover:bg-ink/40 transition"
              >
                <IconWhatsApp className="h-5 w-5" />
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
