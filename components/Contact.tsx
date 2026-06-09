"use client";

import { useState } from "react";
import { site, waLink, telLink } from "@/lib/site";
import { IconWhatsApp, IconPhone, IconMap, IconClock, IconArrow } from "./Icons";

const SERVICES = [
  "Mudanza de casa / depto",
  "Mudanza de oficina",
  "Flete / transporte puntual",
  "Embalaje y materiales",
  "Guardamuebles",
  "Izaje por balcón",
  "Mudanza al interior",
  "Otro",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICES[0],
    origin: "",
    destination: "",
    message: "",
    company: "", // honeypot
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.company) return; // bot
    const msg =
      `Hola ${site.name} 👋 Quiero un presupuesto para mudanza/flete.%0A` +
      `%0A• Nombre: ${form.name || "-"}` +
      `%0A• Teléfono: ${form.phone || "-"}` +
      `%0A• Servicio: ${form.service}` +
      `%0A• Origen: ${form.origin || "-"}` +
      `%0A• Destino: ${form.destination || "-"}` +
      (form.message ? `%0A• Detalle: ${form.message}` : "");
    window.open(`https://wa.me/${site.whatsappRaw}?text=${msg}`, "_blank");
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contacto" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            Contacto
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">
            Pedí tu presupuesto sin cargo
          </h2>
          <p className="mt-4 text-mist">
            Completá el formulario y te abrimos WhatsApp con todo listo para
            enviar. O escribinos / llamanos directo.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nombre">
                <input
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Tu nombre"
                  className="inp"
                />
              </Field>
              <Field label="Teléfono">
                <input
                  required
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="11 5555-5555"
                  className="inp"
                  inputMode="tel"
                />
              </Field>
            </div>

            <Field label="Tipo de servicio">
              <select value={form.service} onChange={set("service")} className="inp">
                {SERVICES.map((s) => (
                  <option key={s} value={s} className="bg-night">
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Desde (origen)">
                <input
                  value={form.origin}
                  onChange={set("origin")}
                  placeholder="Ej. Caballito, CABA"
                  className="inp"
                />
              </Field>
              <Field label="Hasta (destino)">
                <input
                  value={form.destination}
                  onChange={set("destination")}
                  placeholder="Ej. Vicente López"
                  className="inp"
                />
              </Field>
            </div>

            <Field label="Contanos qué necesitás mudar">
              <textarea
                value={form.message}
                onChange={set("message")}
                rows={3}
                placeholder="Ej. Depto de 2 ambientes, 3er piso con ascensor, una heladera y un placar a desarmar…"
                className="inp resize-none"
              />
            </Field>

            {/* honeypot */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={set("company")}
              className="hidden"
              aria-hidden="true"
            />

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand px-6 py-4 text-base font-bold text-ink hover:bg-brand-bright transition shadow-lg shadow-brand/25"
            >
              <IconWhatsApp className="h-5 w-5" />
              Enviar por WhatsApp
              <IconArrow className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-mist">
              Al enviar aceptás ser contactado por este medio. No compartimos tus
              datos. Ver{" "}
              <a href="/privacidad" className="underline underline-offset-2 hover:text-white">
                privacidad
              </a>
              .
            </p>
          </form>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href={telLink}
              className="flex items-center gap-4 rounded-2xl border border-line bg-steel/40 p-5 hover:border-brand/40 transition"
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20">
                <IconPhone className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs text-mist">Llamanos</p>
                <p className="font-display font-bold text-white">{site.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line bg-steel/40 p-5 hover:border-brand/40 transition"
            >
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-[#25D366]/15 text-[#25D366] ring-1 ring-[#25D366]/30">
                <IconWhatsApp className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs text-mist">WhatsApp directo</p>
                <p className="font-display font-bold text-white">{site.phoneDisplay}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-steel/40 p-5">
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20">
                <IconClock className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs text-mist">Horario de atención</p>
                <p className="font-semibold text-white">{site.hours}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-steel/40 p-5">
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-brand/10 text-brand ring-1 ring-brand/20">
                <IconMap className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs text-mist">Base / cobertura</p>
                <p className="font-semibold text-white">{site.addressLocality}</p>
                <p className="text-xs text-mist">{site.region}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .inp {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-line);
          background: rgba(10,8,16,0.6);
          padding: 0.75rem 0.9rem;
          font-size: 0.95rem;
          color: #f1ecf7;
          outline: none;
          transition: border-color .2s, box-shadow .2s;
        }
        .inp::placeholder { color: #7a6e90; }
        .inp:focus {
          border-color: var(--color-brand);
          box-shadow: 0 0 0 3px rgba(255,138,43,0.15);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/85">{label}</span>
      {children}
    </label>
  );
}
