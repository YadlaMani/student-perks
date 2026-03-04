import { FaWindows } from 'react-icons/fa6';
import {
  // Tech & Devices
  SiApple, SiHp, SiLenovo, SiSamsung, SiDell, SiLogitech, SiSony, SiRazer, SiAsus, SiAcer,
  // Software
  SiNotion, SiFigma, SiCanva, SiJetbrains, SiAutodesk, SiGrammarly, SiSketch,
  SiEvernote, SiSlack, SiZoom, SiNordvpn, SiLastpass, SiDuolingo,
  // Developer
  SiGithub, SiDigitalocean, SiMongodb, SiGitlab, SiPostman, SiReplit,
  SiVercel, SiRailway, SiSendgrid,
  // Streaming
  SiSpotify, SiApplemusic, SiYoutube, SiTidal, SiSoundcloud, SiPandora,
  SiHeadspace, SiPeloton, SiDiscord,
  // Food & Retail
  SiDoordash, SiWalmart,
  // Fashion
  SiNike, SiAdidas,
  // Finance & Services
  SiFedex, SiSquarespace, SiShopify, SiCoursera,
} from 'react-icons/si';

import {
  Laptop, Code2, Terminal, Play, Utensils, Plane, ShoppingBag,
  Dumbbell, GraduationCap, Wallet, Building2, Monitor, Globe,
  Bike, MapPin, Newspaper, BookOpen, Shirt, Activity, HeartPulse,
  CreditCard, Coffee, Car, Music,
} from 'lucide-react';

type IconType = React.ComponentType<{ size?: number | string; className?: string }>;

const BRAND_ICONS: Record<string, IconType> = {
  // ── Tech & Devices ─────────────────────────────────────────────
  apple:      SiApple,
  microsoft:  FaWindows,
  hp:         SiHp,
  lenovo:     SiLenovo,
  samsung:    SiSamsung,
  dell:       SiDell,
  logitech:   SiLogitech,
  sony:       SiSony,
  razer:      SiRazer,
  asus:       SiAsus,
  acer:       SiAcer,
  bose:       Monitor,
  jabra:      Monitor,
  hyperx:     Monitor,

  // ── Software & Productivity ────────────────────────────────────
  adobe:      Code2,          // no SI icon in v5
  notion:     SiNotion,
  figma:      SiFigma,
  canva:      SiCanva,
  jetbrains:  SiJetbrains,
  autodesk:   SiAutodesk,
  grammarly:  SiGrammarly,
  sketch:     SiSketch,
  evernote:   SiEvernote,
  slack:      SiSlack,
  zoom:       SiZoom,
  nordvpn:    SiNordvpn,
  lastpass:   SiLastpass,
  duolingo:   SiDuolingo,
  parallels:  Laptop,
  wolfram:    Code2,
  '1password': Globe,

  // ── Developer Tools ────────────────────────────────────────────
  github:       SiGithub,
  aws:          Globe,         // SiAmazonwebservices not in v5
  digitalocean: SiDigitalocean,
  azure:        Globe,         // SiMicrosoftazure not in v5
  tableau:      Activity,      // SiTableau not in v5
  mongodb:      SiMongodb,
  gitlab:       SiGitlab,
  postman:      SiPostman,
  replit:       SiReplit,
  vercel:       SiVercel,
  railway:      SiRailway,
  namecheap:    Globe,
  sendgrid:     SiSendgrid,

  // ── Streaming & Entertainment ──────────────────────────────────
  spotify:    SiSpotify,
  applemusic: SiApplemusic,
  hulu:       Play,           // not in v5
  amazon:     ShoppingBag,    // not in v5
  youtube:    SiYoutube,
  tidal:      SiTidal,
  soundcloud: SiSoundcloud,
  deezer:     Music,          // not in v5
  pandora:    SiPandora,
  peacock:    Play,
  paramount:  Play,
  headspace:  SiHeadspace,
  discord:    SiDiscord,

  // ── Food & Delivery ────────────────────────────────────────────
  doordash:   SiDoordash,
  walmart:    SiWalmart,
  hellofresh: Utensils,
  blueapron:  Utensils,
  chipotle:   Coffee,
  subway:     Coffee,
  burgerking: Coffee,

  // ── Travel ────────────────────────────────────────────────────
  studentuniverse: Plane,
  amtrak:          Bike,
  united:          Plane,
  hotelscom:       MapPin,
  isic:            CreditCard,
  greyhound:       Car,
  enterprise:      Car,
  hertz:           Car,
  flixbus:         Bike,     // SiFlixbus not in v5
  raileurope:      Bike,

  // ── Fashion & Retail ──────────────────────────────────────────
  asos:            ShoppingBag,
  nike:            SiNike,
  adidas:          SiAdidas,
  urbanoutfitters: ShoppingBag,
  americaneagle:   ShoppingBag,
  madewell:        Shirt,
  hm:              ShoppingBag,
  vans:            ShoppingBag,
  converse:        ShoppingBag,  // not in v5
  levis:           Shirt,
  columbia:        ShoppingBag,
  underarmour:     Activity,
  gymshark:        Dumbbell,

  // ── Fitness & Wellness ────────────────────────────────────────
  peloton:   SiPeloton,
  alomoves:  Activity,
  talkspace: HeartPulse,
  planet:    Dumbbell,
  strava:    Activity,
  nike_tc:   SiNike,

  // ── Education ────────────────────────────────────────────────
  coursera:   SiCoursera,
  linkedin:   Globe,         // not in v5
  nyt:        Newspaper,
  audible:    BookOpen,
  wsj:        Newspaper,
  khan:       GraduationCap,
  edx:        GraduationCap,
  skillshare: BookOpen,
  chegg:      BookOpen,

  // ── Finance & Services ───────────────────────────────────────
  target:        ShoppingBag,
  fedex:         SiFedex,
  squarespace:   SiSquarespace,
  statefarm:     Car,
  geico:         Car,
  chase:         CreditCard,
  bankofamerica: CreditCard,
  turbotax:      CreditCard,
  capitalOne:    CreditCard,
  shopify:       SiShopify,
};

/** Category-level fallback icons */
const CATEGORY_FALLBACKS: Record<string, IconType> = {
  tech:       Laptop,
  software:   Code2,
  developer:  Terminal,
  streaming:  Play,
  food:       Utensils,
  travel:     Plane,
  fashion:    ShoppingBag,
  fitness:    Dumbbell,
  education:  GraduationCap,
  finance:    Wallet,
};

interface BrandIconProps {
  iconKey: string;
  category?: string;
  size?: number;
  className?: string;
}

export function BrandIcon({ iconKey, category, size = 20, className }: BrandIconProps) {
  const Icon =
    BRAND_ICONS[iconKey] ??
    (category ? CATEGORY_FALLBACKS[category] : null) ??
    Building2;
  return <Icon size={size} className={className} />;
}
