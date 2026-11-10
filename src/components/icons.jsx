// Inline SVG icon set: stroke based, themeable, no extra dependency.
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function MusicNoteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}

export function BabyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M9 8c0-1 .5-2 1.5-2" />
    </svg>
  )
}

export function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <circle cx="9" cy="8" r="3.25" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3.5 19c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <path d="M15.5 14.5c2.2.3 3.9 2.2 3.9 4.5" />
    </svg>
  )
}

export function PrayingHandsIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M12 3v9" />
      <path d="M12 3c0 5-3 6-4 11-.3 1.6.7 3 2.3 3" />
      <path d="M12 3c0 5 3 6 4 11 .3 1.6-.7 3-2.3 3" />
    </svg>
  )
}

export function HeartHandIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M12.5 8.5c-1-2-4-2-4.5.3-.4 2 1.7 3.7 4.5 6.2 2.8-2.5 4.9-4.2 4.5-6.2-.5-2.3-3.5-2.3-4.5-.3Z" />
      <path d="M3 19c1.5-1 3-1 4.5 0s3 1 4.5 0" />
    </svg>
  )
}

export function DoorOpenIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M14 3H6v18h8" />
      <path d="M14 3l5 2v14l-5 2" />
      <circle cx="11" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CalendarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <line x1="3.5" y1="10" x2="20.5" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

export function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10.5 9l4.5 3-4.5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function BookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3Z" />
    </svg>
  )
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </svg>
  )
}

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5V18a2 2 0 0 1-2 2C10.5 20 4 13.5 4 6a2 2 0 0 1 1-2Z" />
    </svg>
  )
}

export function AnchorIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <circle cx="12" cy="5" r="2" />
      <line x1="12" y1="7" x2="12" y2="21" />
      <line x1="7" y1="11" x2="17" y2="11" />
      <path d="M5 14c0 3.5 3 6.5 7 7 4-.5 7-3.5 7-7" />
    </svg>
  )
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
    </svg>
  )
}

export function WalletIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 9h18" />
      <circle cx="16.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WrenchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M14.5 6.5a4 4 0 0 0-5.4 4.9L4 16.5V20h3.5l5.1-5.1a4 4 0 0 0 4.9-5.4l-2.6 2.6-2.1-.7-.7-2.1 2.4-2.8Z" />
    </svg>
  )
}

export function MegaphoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M3 10v4a1 1 0 0 0 1 1h2l9 4V5l-9 4H4a1 1 0 0 0-1 1Z" />
      <path d="M19 9a4 4 0 0 1 0 6" />
    </svg>
  )
}

export function SpeakerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="3" />
      <circle cx="12" cy="8" r="2" />
      <circle cx="12" cy="16" r="3" />
    </svg>
  )
}

export function CameraIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  )
}

export function CrossIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <line x1="12" y1="4" x2="12" y2="21" />
      <line x1="7" y1="9" x2="17" y2="9" />
    </svg>
  )
}

export function MasksIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M4 5c3 0 4.5 2 4.5 4.5S7 14 4 14V5Z" />
      <path d="M20 5c-3 0-4.5 2-4.5 4.5S17 14 20 14V5Z" />
      <path d="M8.5 9.5h7" />
    </svg>
  )
}

export function PulseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  )
}

export function CapIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11.5V17c0 1.5 3 2.5 6 2.5s6-1 6-2.5v-5.5" />
    </svg>
  )
}

export function StethoscopeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M6 3v6a4 4 0 0 0 8 0V3" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-1.5" />
      <circle cx="20" cy="11.5" r="1.5" />
    </svg>
  )
}

export const departmentIcons = {
  MusicNote: MusicNoteIcon,
  Baby: BabyIcon,
  UsersThree: UsersIcon,
  HandsPraying: PrayingHandsIcon,
  HandHeart: HeartHandIcon,
  DoorOpen: DoorOpenIcon,
  Calendar: CalendarIcon,
  Anchor: AnchorIcon,
  Shield: ShieldIcon,
  Wallet: WalletIcon,
  Wrench: WrenchIcon,
  Megaphone: MegaphoneIcon,
  Speaker: SpeakerIcon,
  Camera: CameraIcon,
  Book: BookIcon,
  Cross: CrossIcon,
  Masks: MasksIcon,
  Pulse: PulseIcon,
  Cap: CapIcon,
  Stethoscope: StethoscopeIcon,
}
