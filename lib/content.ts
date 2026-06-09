// =============================================================
//  CONTENIDO DE LA WEB — servicios, proceso, stats, FAQ, etc.
//  Todo editable para adaptar el sitio a cada cliente.
// =============================================================

export type IconName =
  | "home"
  | "office"
  | "truck"
  | "box"
  | "storage"
  | "assemble"
  | "route"
  | "hoist"
  | "team";

export const services: {
  icon: IconName;
  title: string;
  desc: string;
  tags: string[];
}[] = [
  {
    icon: "home",
    title: "Mudanzas de hogar",
    desc: "Casas, departamentos y PH. Embalamos, cargamos, trasladamos y armamos todo en tu nuevo lugar. Vos solo decinos cuándo.",
    tags: ["Casas y deptos", "Embalaje incluido"],
  },
  {
    icon: "office",
    title: "Mudanzas de empresas",
    desc: "Oficinas, locales y comercios. Coordinamos la mudanza fuera de horario para que tu actividad no pare ni un día.",
    tags: ["Oficinas", "Sin frenar tu negocio"],
  },
  {
    icon: "truck",
    title: "Fletes y transporte",
    desc: "Un mueble, un electrodoméstico o una entrega puntual. Fletes con o sin ayudante, al toque y a precio justo.",
    tags: ["Con o sin ayudante", "En el día"],
  },
  {
    icon: "box",
    title: "Embalaje y materiales",
    desc: "Cajas, film, burbuja, mantas y fundas. Protegemos cada objeto frágil como si fuera nuestro. Vendemos el kit de embalaje.",
    tags: ["Cajas y burbuja", "Objetos frágiles"],
  },
  {
    icon: "assemble",
    title: "Armado y desarme de muebles",
    desc: "Desarmamos placares, camas y bibliotecas en el origen y los volvemos a armar en destino. Sin tornillos perdidos.",
    tags: ["Desarme y armado", "Personal propio"],
  },
  {
    icon: "storage",
    title: "Guardamuebles",
    desc: "¿Necesitás guardar tus cosas un tiempo? Tenemos depósito seguro, limpio y vigilado. Por días, semanas o meses.",
    tags: ["Depósito seguro", "Por el tiempo que quieras"],
  },
  {
    icon: "hoist",
    title: "Izaje por balcón",
    desc: "Cuando el mueble no entra por la escalera ni el ascensor, lo subimos o bajamos por el balcón con aparejo y soga.",
    tags: ["Muebles grandes", "Pisos altos"],
  },
  {
    icon: "route",
    title: "Mudanzas al interior",
    desc: "Mudanzas de larga distancia a todo el país. Coordinamos viaje, seguro y entrega en fecha. Pedinos tu destino.",
    tags: ["Larga distancia", "A todo el país"],
  },
];

export const whyUs: {
  icon:
    | "shield"
    | "clock"
    | "wallet"
    | "badge"
    | "box"
    | "map"
    | "team"
    | "truck";
  title: string;
  desc: string;
}[] = [
  { icon: "shield", title: "Mudanza asegurada", desc: "Tus cosas viajan cubiertas. Trabajamos con seguro de carga para que estés tranquilo de punta a punta." },
  { icon: "team", title: "Personal propio", desc: "Nada de improvisados. Equipo de fleteros y embaladores capacitados, uniformados y de confianza." },
  { icon: "wallet", title: "Presupuesto sin cargo", desc: "Te visitamos o hacés la lista por WhatsApp y te pasamos el precio final cerrado. Sin costos ocultos." },
  { icon: "truck", title: "Camiones equipados", desc: "Flota propia con baúl cerrado, mantas, correas y rampa. El tamaño justo para que rinda el viaje." },
  { icon: "box", title: "Embalaje profesional", desc: "Protegemos lo frágil con burbuja, mantas y cajas dobles. Llega todo entero, como salió." },
  { icon: "map", title: "Cobertura total", desc: "CABA, todo el Gran Buenos Aires y mudanzas al interior del país. Decinos a dónde y vamos." },
];

export const steps: { n: string; title: string; desc: string }[] = [
  { n: "01", title: "Contanos qué mudás", desc: "Por WhatsApp o teléfono nos pasás qué tenés, desde dónde y hacia dónde. Te asesoramos al instante." },
  { n: "02", title: "Presupuesto sin cargo", desc: "Coordinamos una visita o lista de objetos y te pasamos el precio final cerrado, sin sorpresas." },
  { n: "03", title: "Embalamos y cargamos", desc: "El día pactado llegamos puntuales, embalamos, desarmamos lo necesario y cargamos con cuidado." },
  { n: "04", title: "Entregamos y armamos", desc: "Trasladamos, descargamos y volvemos a armar los muebles en tu nuevo lugar. Listo para vivir." },
];

export const stats: { value: number; suffix: string; label: string }[] = [
  { value: 17, suffix: "+", label: "años mudando familias" },
  { value: 12000, suffix: "+", label: "mudanzas y fletes realizados" },
  { value: 4.9, suffix: "★", label: "valoración de clientes" },
  { value: 100, suffix: "%", label: "presupuestos sin cargo" },
];

export const testimonials: { name: string; area: string; text: string }[] = [
  {
    name: "Marina S.",
    area: "Caballito",
    text: "Mudaron todo el departamento en una mañana. Embalaron la vajilla mejor que yo y no se rompió absolutamente nada. Súper prolijos y puntuales.",
  },
  {
    name: "Federico L.",
    area: "Vicente López",
    text: "Mudé la oficina un sábado y el lunes ya estábamos trabajando. Desarmaron y armaron todos los escritorios. Cero estrés, los recomiendo.",
  },
  {
    name: "Paula G.",
    area: "Palermo",
    text: "Tenía un placar enorme que no entraba por la escalera y lo subieron por el balcón con aparejo. Un trabajo impecable y a un precio muy justo.",
  },
  {
    name: "Diego R.",
    area: "La Plata",
    text: "Mudanza desde CABA al interior. Llegaron en la fecha pactada, todo entero y con seguro. La comunicación por WhatsApp durante el viaje, de diez.",
  },
  {
    name: "Carolina M.",
    area: "Belgrano",
    text: "Pedí un flete para una heladera y un sommier. Vinieron en el día, con ayudante, y lo dejaron todo en su lugar. Rápido y sin vueltas.",
  },
  {
    name: "Hernán T.",
    area: "San Isidro",
    text: "El presupuesto fue exactamente lo que pagué, sin sorpresas. Cuidaron cada mueble con mantas. Se nota que es gente que sabe lo que hace.",
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: "¿El presupuesto tiene costo?",
    a: "No. El presupuesto es totalmente sin cargo. Coordinamos una visita o nos pasás la lista de lo que mudás por WhatsApp y te damos el precio final cerrado antes de empezar. Recién ahí decidís.",
  },
  {
    q: "¿Incluyen el embalaje?",
    a: "Sí. Podemos encargarnos de todo el embalaje con cajas, film, burbuja y mantas, o venderte el kit de materiales para que lo armes vos. Los objetos frágiles los protegemos con especial cuidado.",
  },
  {
    q: "¿Desarman y arman los muebles?",
    a: "Sí. Nuestro personal desarma placares, camas, bibliotecas y escritorios en el origen y los vuelve a armar en el destino. Cuidamos cada tornillo y herraje para que quede todo como estaba.",
  },
  {
    q: "¿La mudanza está asegurada?",
    a: "Sí. Trabajamos con seguro de carga para que tus pertenencias viajen cubiertas durante todo el traslado. Ante cualquier duda te explicamos el alcance de la cobertura antes de contratar.",
  },
  {
    q: "¿Hacen mudanzas al interior del país?",
    a: "Sí. Realizamos mudanzas de larga distancia a todo el país. Coordinamos el viaje, el seguro y la fecha de entrega. Contanos tu destino y te armamos un presupuesto a medida.",
  },
  {
    q: "¿Qué pasa si mi mueble no entra por la escalera?",
    a: "No hay problema. Contamos con servicio de izaje por balcón con aparejo y soga para subir o bajar muebles grandes en pisos altos donde no entran por la escalera ni el ascensor.",
  },
  {
    q: "¿Puedo guardar mis cosas un tiempo?",
    a: "Sí. Tenemos servicio de guardamuebles en depósito seguro, limpio y vigilado. Podés guardar tus pertenencias por días, semanas o meses, ideal cuando todavía no tenés el nuevo lugar listo.",
  },
  {
    q: "¿Con cuánta anticipación tengo que reservar?",
    a: "Para mudanzas grandes recomendamos coordinar con algunos días de anticipación para asegurarte la fecha. Para fletes y traslados puntuales muchas veces podemos ir en el mismo día según la disponibilidad.",
  },
];

export const zones = [
  "Palermo", "Belgrano", "Caballito", "Recoleta", "Villa Crespo", "Almagro",
  "Flores", "Núñez", "Devoto", "Villa Urquiza", "Saavedra", "Colegiales",
  "Vicente López", "San Isidro", "Olivos", "Martínez", "Avellaneda",
  "Lanús", "Lomas de Zamora", "Quilmes", "Morón", "San Justo", "Ramos Mejía", "Tigre",
];
