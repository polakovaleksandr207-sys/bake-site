function Icon({ size = 24, color = 'currentColor', className = '', children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconWheat({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <path d="M12 22V12" />
      <path d="M12 12C12 12 8 10 6 7c-1-1.5-.5-4 1-5 1.5 1 2.5 3 2.5 3S11 3 12 2c1 1 1.5 3.5 1.5 5 0 0 1-2 2.5-3 1.5 1 2 3.5 1 5-2 3-5 3-5 3z" />
      <path d="M12 12c0 0-2-1-4 0M12 12c0 0 2-1 4 0" />
      <path d="M8 14c-1 1-1.5 2.5-1 4M16 14c1 1 1.5 2.5 1 4" />
    </Icon>
  );
}

export function IconMapPin({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  );
}

export function IconPhone({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.06 6.06l1.36-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
    </Icon>
  );
}

export function IconClock({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </Icon>
  );
}

export function IconMail({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </Icon>
  );
}

export function IconUser({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </Icon>
  );
}

export function IconLeaf({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </Icon>
  );
}

export function IconHands({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </Icon>
  );
}

export function IconFlame({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </Icon>
  );
}

export function IconHome({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </Icon>
  );
}

export function IconTimer({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <line x1="12" x2="12" y1="1" y2="3" />
      <path d="M16.56 3.44L15.15 4.85" />
      <path d="M18.5 8.5h2" />
      <circle cx="12" cy="14" r="7" />
      <polyline points="12 11 12 14 14 16" />
    </Icon>
  );
}

export function IconThermometer({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </Icon>
  );
}

export function IconList({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </Icon>
  );
}

export function IconCake({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3" />
      <path d="M12 8v3" />
      <path d="M17 8v3" />
      <path d="M7 4h.01" />
      <path d="M12 4h.01" />
      <path d="M17 4h.01" />
    </Icon>
  );
}

export function IconGift({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect width="20" height="5" x="2" y="7" />
      <line x1="12" x2="12" y1="22" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </Icon>
  );
}

export function IconTrophy({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 22h14" />
      <path d="M5 7H3a2 2 0 0 0-2 2v1a6 6 0 0 0 6 6h10a6 6 0 0 0 6-6V9a2 2 0 0 0-2-2h-2" />
      <rect width="14" height="11" x="5" y="2" rx="2" />
    </Icon>
  );
}

export function IconStar({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </Icon>
  );
}

export function IconCheck({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <polyline points="20 6 9 17 4 12" />
    </Icon>
  );
}

export function IconCheckCircle({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </Icon>
  );
}

export function IconBread({ size, color, className }) {
  return (
    <Icon size={size} color={color} className={className}>
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </Icon>
  );
}
