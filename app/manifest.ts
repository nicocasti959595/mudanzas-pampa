import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brandFull,
    short_name: site.name,
    description: "Fletes y mudanzas en CABA y Gran Buenos Aires. Mudanzas de hogar y oficina con embalaje, armado y guardamuebles.",
    start_url: "/",
    display: "standalone",
    background_color: "#110d18",
    theme_color: "#110d18",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
