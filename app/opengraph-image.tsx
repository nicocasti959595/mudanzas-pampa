import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.brandFull} — Fletes y mudanzas en CABA y GBA`;

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1100px 520px at 80% -12%, rgba(255,138,43,0.32), transparent 60%), radial-gradient(900px 500px at 0% 120%, rgba(59,182,255,0.18), transparent 60%), linear-gradient(135deg, #110d18 0%, #0a0810 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 78,
              height: 78,
              borderRadius: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #ffb15c, #df6a0e)",
            }}
          >
            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#1c1003" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 6.5h11.5v9.5H2z" />
              <path d="M13.5 9.5h3.4l3.1 3.3V16H13.5z" />
              <circle cx="6" cy="18" r="1.9" />
              <circle cx="16.7" cy="18" r="1.9" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 36, fontWeight: 800 }}>{site.name}</span>
            <span style={{ fontSize: 18, color: "#ffb15c", letterSpacing: 4 }}>
              FLETES &amp; MUDANZAS
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              background: "rgba(255,138,43,0.16)",
              border: "1px solid rgba(255,138,43,0.5)",
              color: "#ffcf9a",
              padding: "8px 18px",
              borderRadius: 999,
              fontSize: 22,
              fontWeight: 700,
              alignSelf: "flex-start",
            }}
          >
            <span style={{ width: 12, height: 12, borderRadius: 999, background: "#ff8a2b", display: "flex" }} />
            MUDANZAS DE HOGAR Y OFICINA
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0 18px",
              fontSize: 70,
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: 1000,
            }}
          >
            <span>Tu mudanza,</span>
            <span style={{ color: "#ffb15c" }}>sin estrés</span>
            <span>ni sorpresas</span>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#b6abc6", maxWidth: 920 }}>
            Embalaje · Armado de muebles · Guardamuebles · Mudanzas al interior
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 30, fontWeight: 700, color: "#ffb15c" }}>
            {site.phoneDisplay}
          </span>
          <span style={{ display: "flex", fontSize: 22, color: "#b6abc6" }}>
            CABA y GBA · Presupuesto sin cargo
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
