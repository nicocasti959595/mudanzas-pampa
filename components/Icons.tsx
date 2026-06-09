import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* Logo: camión de mudanza (vista lateral) */
export function TruckLogo(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M2 6.5h11.5v9.5H2z" />
      <path d="M13.5 9.5h3.4l3.1 3.3V16H13.5z" />
      <path d="M14 9.5v6.5" />
      <circle cx="6" cy="18" r="1.9" />
      <circle cx="16.7" cy="18" r="1.9" />
    </svg>
  );
}

/* ===== Servicios ===== */
export function IconHome(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function IconOffice(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v15" />
      <path d="M13 21V10h6a1 1 0 0 1 1 1v10" />
      <path d="M7 9h3M7 13h3M7 17h3M16 14h1M16 17h1" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function IconTruck(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M2 6h11.5v10H2z" />
      <path d="M13.5 9.5h3.6l3.1 3.4V16H13.5z" />
      <circle cx="6.5" cy="18.5" r="1.7" />
      <circle cx="16.8" cy="18.5" r="1.7" />
      <path d="M2 16h2.4M8.2 16h5.3M15.1 16h.7" />
    </svg>
  );
}

export function IconBox(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 7.5 12 4l8.5 3.5V16L12 20l-8.5-4z" />
      <path d="M3.5 7.5 12 11l8.5-3.5" />
      <path d="M12 11v9" />
      <path d="M7.8 5.8 16.2 9.4" />
    </svg>
  );
}

export function IconStorage(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="12.5" width="8" height="7.5" rx="1" />
      <rect x="13" y="12.5" width="8" height="7.5" rx="1" />
      <rect x="8" y="4" width="8" height="7.5" rx="1" />
      <path d="M6 12.5v7.5M17 12.5v7.5M11 4v7.5" />
    </svg>
  );
}

export function IconAssemble(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 5.5a3 3 0 0 0 3.9 3.9l1.6 1.6a1 1 0 0 1 0 1.4l-1.4 1.4" />
      <path d="M6.5 11.5 4 14a2 2 0 1 0 2.8 2.8l4.4-4.4" />
      <path d="M14.5 5.5 9 11l1.5 1.5" />
      <path d="M16 16l4 4" />
    </svg>
  );
}

export function IconRoute(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="2.2" />
      <path d="M6 8.2V12a3 3 0 0 0 3 3h4a3 3 0 0 1 3 3v.2" />
      <path d="M18 21s2.6-2.6 2.6-4.6a2.6 2.6 0 1 0-5.2 0C15.4 18.4 18 21 18 21z" />
      <circle cx="18" cy="16.3" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconHoist(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v3" />
      <path d="M12 5a2 2 0 0 1 2 2c0 1-1 1.4-1 2.4" />
      <rect x="6.5" y="11.5" width="11" height="8.5" rx="1" />
      <path d="M6.5 15h11" />
      <path d="M11 11.5v3.5M13 11.5v3.5" />
    </svg>
  );
}

export function IconTeam(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="8" r="2.6" />
      <circle cx="16.5" cy="9" r="2.2" />
      <path d="M3.5 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <path d="M14.5 14.4A4.6 4.6 0 0 1 20.5 19" />
    </svg>
  );
}

export function IconShield(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 2.5v5c0 4.4-3 7.8-7 9.5-4-1.7-7-5.1-7-9.5v-5z" />
      <path d="M9 12l2 2 4-4.2" />
    </svg>
  );
}

/* ===== Por qué elegirnos / UI ===== */
export function IconClock(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconWallet(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="6" width="17" height="13" rx="2.5" />
      <path d="M3.5 10h17" />
      <circle cx="16.5" cy="13.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBadge(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l2.2 1.6 2.7-.2.9 2.6 2.2 1.6-.9 2.6.9 2.6-2.2 1.6-.9 2.6-2.7-.2L12 21l-2.2-1.6-2.7.2-.9-2.6L4 15.6l.9-2.6L4 10.4l2.2-1.6.9-2.6 2.7.2z" />
      <path d="M9.5 12l1.8 1.8 3.4-3.6" />
    </svg>
  );
}

export function IconMap(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function IconPhone(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
    </svg>
  );
}

export function IconWhatsApp(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export function IconArrow(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export function IconStar(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.9 6.2 20.95l1.1-6.5-4.7-4.6 6.5-.95z" />
    </svg>
  );
}

export const iconMap = {
  home: IconHome,
  office: IconOffice,
  truck: IconTruck,
  box: IconBox,
  storage: IconStorage,
  assemble: IconAssemble,
  route: IconRoute,
  hoist: IconHoist,
  team: IconTeam,
  shield: IconShield,
  clock: IconClock,
  wallet: IconWallet,
  badge: IconBadge,
  map: IconMap,
} as const;
