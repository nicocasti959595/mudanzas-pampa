import { IconTruck } from "./Icons";

const items = [
  "Mudanzas de hogar",
  "Mudanzas de oficina",
  "Fletes y transporte",
  "Embalaje profesional",
  "Armado de muebles",
  "Guardamuebles",
  "Izaje por balcón",
  "Mudanzas al interior",
  "Presupuesto sin cargo",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-line bg-steel/40 py-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-night to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-night to-transparent z-10" />
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-3 px-6 text-mist">
            <IconTruck className="h-4 w-4 text-brand" />
            <span className="text-sm font-medium uppercase tracking-wide">{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
