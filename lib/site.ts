// =============================================================
//  DATOS DEL NEGOCIO — editá todo acá para adaptar el sitio.
//  Marca, teléfono, dirección y reseñas son FICTICIOS (demo).
// =============================================================

export const site = {
  name: "Mudanzas Pampa",
  legalName: "Pampa Fletes y Mudanzas",
  brandFull: "Pampa Fletes & Mudanzas",
  tagline: "Fletes y mudanzas",
  claim:
    "Mudanzas de casas, departamentos y oficinas con embalaje, montaje y camiones propios. Te mudamos rápido, prolijo y sin sorpresas.",

  // Contacto (placeholders — reemplazar por los reales)
  phoneDisplay: "+54 9 11 5555-0000",
  phoneRaw: "+5491155550000",
  whatsappRaw: "5491155550000", // sin + ni espacios, para wa.me
  email: "hola@mudanzaspampa.com.ar",

  // Ubicación / cobertura
  city: "Ciudad Autónoma de Buenos Aires",
  region: "CABA y Gran Buenos Aires",
  addressStreet: "Av. Juan B. Justo 4500",
  addressLocality: "Villa Crespo, CABA",
  addressRegion: "Buenos Aires",
  postalCode: "C1414",
  country: "AR",
  geo: { lat: -34.5998, lng: -58.4445 },

  hours: "Lun a Sáb de 8 a 20 hs · Coordinamos fines de semana",
  responseTime: "en el día",

  // Redes (placeholders)
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",

  // SEO
  url: "https://mudanzas-pampa.vercel.app",
  locale: "es_AR",
};

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsappRaw}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const telLink = `tel:${site.phoneRaw}`;

export const WA_DEFAULT_MSG =
  "Hola Mudanzas Pampa 👋 Quiero hacer una consulta sobre una mudanza/flete. ¿Me ayudan?";

export const WA_QUOTE_MSG =
  "Hola Mudanzas Pampa 👋 Quiero un presupuesto sin cargo para mi mudanza. Les cuento:";

export const WA_URGENT_MSG =
  "🚚 Necesito coordinar una mudanza/flete para esta semana. Les paso los datos:";
