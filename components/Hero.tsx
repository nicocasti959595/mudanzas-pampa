import { site, waLink, telLink, WA_QUOTE_MSG } from "@/lib/site";
import {
  IconWhatsApp,
  IconPhone,
  IconCheck,
  IconStar,
  IconArrow,
  IconTruck,
  IconHome,
  IconOffice,
  IconShield,
  IconBox,
} from "./Icons";

const trust = [
  "Personal asegurado",
  "Presupuesto sin cargo",
  "Embalaje y armado",
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Fondos */}
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="absolute -top-40 -right-32 -z-10 h-[36rem] w-[36rem] rounded-full bg-brand/15 blur-[120px]" />
      <div className="absolute -bottom-48 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-route/10 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Columna texto */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand-bright">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-brand-bright animate-ping opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-bright" />
            </span>
            Coordinando mudanzas hoy · {site.region}
          </div>

          <h1 className="mt-6 font-display font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl text-white">
            Tu mudanza,{" "}
            <span className="text-gradient-brand">sin estrés</span> ni
            sorpresas
          </h1>

          <p className="mt-5 text-lg text-mist max-w-xl">
            {site.claim} Mudanzas de hogar y oficina en toda {site.region},
            con embalaje, armado y camiones propios. Presupuesto {site.responseTime}.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-white/90">
                <IconCheck className="h-5 w-5 text-brand" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={waLink(WA_QUOTE_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand px-7 py-4 text-base font-bold text-ink shadow-xl shadow-brand/25 hover:bg-brand-bright transition"
            >
              <IconWhatsApp className="h-5 w-5" />
              Pedir presupuesto
              <IconArrow className="h-4 w-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-line bg-white/5 px-7 py-4 text-base font-bold text-white hover:bg-white/10 hover:border-brand/40 transition"
            >
              <IconPhone className="h-5 w-5 text-brand" />
              {site.phoneDisplay}
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3 text-sm text-mist">
            <div className="flex -space-x-2">
              {["MS", "FL", "PG", "DR"].map((i) => (
                <span
                  key={i}
                  className="grid place-items-center h-8 w-8 rounded-full border-2 border-night bg-steel-2 text-[10px] font-bold text-brand"
                >
                  {i}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </span>
              <span className="font-semibold text-white">4,9</span>
              <span>· +300 mudanzas con reseña</span>
            </div>
          </div>
        </div>

        {/* Columna visual — tarjeta de ruta / presupuesto */}
        <div className="relative reveal" style={{ animationDelay: "120ms" }}>
          <div className="relative mx-auto max-w-md">
            <div className="glass rounded-3xl p-7 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="grid place-items-center h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-bright to-brand-deep text-ink animate-float">
                  <IconTruck className="h-9 w-9" />
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-3 py-1 text-xs font-bold text-brand">
                  <span className="h-2 w-2 rounded-full bg-brand animate-blink" />
                  MUDANZA EN CAMINO
                </span>
              </div>

              {/* Ruta origen → destino */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex flex-col items-center gap-1.5 w-16">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-night/70 border border-line text-route">
                    <IconHome className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] text-mist text-center">Origen</span>
                </div>

                <div className="relative flex-1 mx-1">
                  <svg viewBox="0 0 120 24" className="w-full h-6" fill="none">
                    <path d="M2 12h116" stroke="#2f2540" strokeWidth="3" strokeLinecap="round" />
                    <path
                      d="M2 12h116"
                      stroke="var(--color-brand)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="2 8"
                      className="animate-dash"
                    />
                  </svg>
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-brand-bright to-brand-deep text-ink shadow-lg shadow-brand/30 animate-truck">
                    <IconTruck className="h-5 w-5" />
                  </span>
                </div>

                <div className="flex flex-col items-center gap-1.5 w-16">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-night/70 border border-line text-route">
                    <IconOffice className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] text-mist text-center">Destino</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-line bg-night/60 p-4">
                  <p className="text-2xl font-display font-extrabold text-brand">
                    Hoy
                  </p>
                  <p className="text-xs text-mist">coordinamos tu visita</p>
                </div>
                <div className="rounded-2xl border border-line bg-night/60 p-4">
                  <p className="text-2xl font-display font-extrabold text-brand">
                    Precio
                  </p>
                  <p className="text-xs text-mist">cerrado, sin sorpresas</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-brand/20 bg-brand/5 p-3 text-sm text-white/90">
                <IconBox className="h-5 w-5 text-brand shrink-0" />
                Embalaje, desarme y armado de muebles incluido
              </div>
            </div>

            {/* Badge flotante (asegurada) */}
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-ink shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
              <IconShield className="h-6 w-6 text-route-deep" />
              <div className="leading-tight">
                <p className="text-xs text-slate-500">Mudanza</p>
                <p className="text-sm font-extrabold">Asegurada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
