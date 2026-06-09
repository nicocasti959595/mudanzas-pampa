import { site, waLink, telLink, WA_DEFAULT_MSG } from "@/lib/site";
import { TruckLogo, IconPhone, IconWhatsApp } from "./Icons";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#porque", label: "Por qué elegirnos" },
  { href: "#zonas", label: "Zonas de cobertura" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contacto" },
];

const SERV = [
  "Mudanzas de hogar",
  "Mudanzas de oficina",
  "Fletes y transporte",
  "Embalaje y armado",
  "Guardamuebles",
  "Mudanzas al interior",
];

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-line bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-brand-bright to-brand-deep text-ink">
                <TruckLogo className="h-6 w-6" />
              </span>
              <span className="leading-tight">
                <span className="block font-display font-extrabold text-white">{site.name}</span>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-brand">
                  Fletes &amp; Mudanzas
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm text-mist max-w-xs">
              Fletes y mudanzas en {site.region}. Mudanzas de hogar y oficina con
              embalaje, armado y personal asegurado.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href={telLink} className="inline-flex items-center gap-2 text-white font-semibold hover:text-brand transition">
                <IconPhone className="h-4 w-4 text-brand" /> {site.phoneDisplay}
              </a>
              <a
                href={waLink(WA_DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-mist hover:text-white transition"
              >
                <IconWhatsApp className="h-4 w-4 text-[#25D366]" /> WhatsApp directo
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-white">Navegación</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-mist hover:text-white transition">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white">Servicios</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERV.map((s) => (
                <li key={s} className="text-mist">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white">Atención</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-mist">
              <li>{site.hours}</li>
              <li>Presupuesto: {site.responseTime}</li>
              <li>{site.region}</li>
              <li>{site.email}</li>
            </ul>
            <div className="mt-5 flex gap-2">
              <a href="/privacidad" className="text-xs text-mist hover:text-white underline underline-offset-2">
                Privacidad
              </a>
              <span className="text-line">·</span>
              <a href="/terminos" className="text-xs text-mist hover:text-white underline underline-offset-2">
                Términos
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mist">
          <p>
            © {new Date().getFullYear()} {site.brandFull}. Todos los derechos
            reservados.
          </p>
          <p>
            Desarrollado por{" "}
            <a
              href="https://ideawebx.com"
              rel="dofollow"
              className="font-semibold text-brand hover:text-brand-bright underline underline-offset-2"
            >
              IdeaWebX
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-[11px] text-mist/60">
          Sitio de demostración. Marca, datos de contacto y reseñas son ilustrativos.
        </p>
      </div>
    </footer>
  );
}
