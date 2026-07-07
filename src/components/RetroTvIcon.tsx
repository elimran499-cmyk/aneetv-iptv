interface RetroTvIconProps {
  className?: string;
}

export default function RetroTvIcon({ className }: RetroTvIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Antennas */}
      <path d="M7 6 4 2.5" />
      <path d="M17 6l3-3.5" />

      {/* Body */}
      <rect x="3" y="6" width="18" height="13" rx="2.2" />

      {/* Legs */}
      <path d="M8 21.5 6 19" />
      <path d="M16 21.5l2-2.5" />

      {/* Screen */}
      <rect x="5.2" y="8.2" width="10.6" height="8.6" rx="1.2" />

      {/* Wifi signal inside screen */}
      <path d="M8.2 14.2a3.6 3.6 0 0 1 5 0" />
      <path d="M9.4 15.6a1.9 1.9 0 0 1 2.6 0" />
      <circle cx="10.7" cy="16.5" r="0.6" fill="currentColor" stroke="none" />

      {/* Control dial + buttons */}
      <circle cx="18.2" cy="10.5" r="1.1" />
      <circle cx="18.2" cy="14" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="18.2" cy="16" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
