import {
  Laptop, Code2, Terminal, Play, Utensils, Plane,
  ShoppingBag, Dumbbell, GraduationCap, Wallet, LayoutGrid,
} from 'lucide-react';

export type Category =
  | 'all'
  | 'tech'
  | 'software'
  | 'developer'
  | 'streaming'
  | 'food'
  | 'travel'
  | 'fashion'
  | 'fitness'
  | 'education'
  | 'finance';

export type BenefitTag = 'free' | 'popular' | 'limited' | 'verified' | 'hot';

export interface Benefit {
  id: string;
  company: string;
  iconKey: string;
  website: string;
  category: Category;
  title: string;
  discount: string;
  discountPercent: number;
  description: string;
  howToClaim: string;
  verification: string[];
  tags: BenefitTag[];
  featured?: boolean;
  estimatedAnnualValue: string;
}

export const CATEGORIES: {
  value: Category;
  label: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}[] = [
  { value: 'all',       label: 'All Benefits',   Icon: LayoutGrid },
  { value: 'tech',      label: 'Tech & Devices',  Icon: Laptop },
  { value: 'software',  label: 'Software',        Icon: Code2 },
  { value: 'developer', label: 'Developer Tools', Icon: Terminal },
  { value: 'streaming', label: 'Streaming',       Icon: Play },
  { value: 'food',      label: 'Food & Delivery', Icon: Utensils },
  { value: 'travel',    label: 'Travel',          Icon: Plane },
  { value: 'fashion',   label: 'Fashion',         Icon: ShoppingBag },
  { value: 'fitness',   label: 'Fitness',         Icon: Dumbbell },
  { value: 'education', label: 'Education',       Icon: GraduationCap },
  { value: 'finance',   label: 'Finance',         Icon: Wallet },
];

export const benefits: Benefit[] = [
  // ═══════════════════════════════════════════════════════════════
  // TECH & DEVICES
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'apple-student',
    company: 'Apple',
    iconKey: 'apple',
    website: 'https://www.apple.com/us-hed/shop',
    category: 'tech',
    title: 'Apple Education Pricing',
    discount: 'Up to $200 off',
    discountPercent: 15,
    description:
      'Save up to $200 on MacBook Pro, $150 on MacBook Air and iMac, and $50 on iPad. Also get 20% off AppleCare+ protection plans through the Apple Education Store.',
    howToClaim:
      'Go to apple.com/education-pricing → Verify student status with your .edu email via UNiDAYS → Shop the Education Store at discounted pricing.',
    verification: ['.edu email', 'UNiDAYS'],
    tags: ['verified', 'popular'],
    featured: true,
    estimatedAnnualValue: '$200',
  },
  {
    id: 'microsoft-surface',
    company: 'Microsoft',
    iconKey: 'microsoft',
    website: 'https://www.microsoft.com/en-us/store/b/student',
    category: 'tech',
    title: 'Microsoft Student Discount',
    discount: 'Up to 10% off',
    discountPercent: 10,
    description:
      'Save on Surface laptops, tablets, and accessories. Bundles often include Microsoft 365 and other software benefits for enrolled students.',
    howToClaim:
      'Visit microsoft.com/student → Verify via .edu email or SheerID → Discount applies automatically at checkout.',
    verification: ['.edu email', 'SheerID'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$194',
  },
  {
    id: 'hp-student',
    company: 'HP',
    iconKey: 'hp',
    website: 'https://www.hp.com/us-en/shop/edu/students',
    category: 'tech',
    title: 'HP Education Store',
    discount: 'Up to 40% off',
    discountPercent: 40,
    description:
      'HP offers some of the steepest student hardware discounts — up to 40% off laptops, desktops, and printers. Great for budget-conscious students.',
    howToClaim:
      'Go to hp.com Education Store → Register for a student account → Deals auto-apply in your cart.',
    verification: ['Student account registration', 'SheerID'],
    tags: ['verified', 'hot'],
    featured: true,
    estimatedAnnualValue: '$300+',
  },
  {
    id: 'lenovo-student',
    company: 'Lenovo',
    iconKey: 'lenovo',
    website: 'https://www.lenovo.com/us/en/landingpage/lenovo-edu-discount/',
    category: 'tech',
    title: 'Lenovo Student Discount',
    discount: 'Up to 30% off',
    discountPercent: 30,
    description:
      'Get up to 30% off ThinkPad, IdeaPad, Legion gaming laptops, and accessories. Verified through ID.me with student or educator status.',
    howToClaim:
      'Visit lenovo.com/education → Click "Student" → Verify via ID.me → Shop exclusive education pricing.',
    verification: ['ID.me', '.edu email'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$250+',
  },
  {
    id: 'samsung-student',
    company: 'Samsung',
    iconKey: 'samsung',
    website: 'https://www.samsung.com/us/shop/offer-program/education/',
    category: 'tech',
    title: 'Samsung Education Discount',
    discount: 'Up to 30% off',
    discountPercent: 30,
    description:
      'Students save up to 30% on Galaxy laptops, tablets, smartphones, and monitors through Samsung\'s Education Offers Program.',
    howToClaim:
      'Go to samsung.com/education → Register for Education Offers Program → Verify student status → Shop with discount applied.',
    verification: ['SheerID', '.edu email'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$200+',
  },
  {
    id: 'dell-student',
    company: 'Dell',
    iconKey: 'dell',
    website: 'https://www.dell.com/en-us/lp/students',
    category: 'tech',
    title: 'Dell University Program',
    discount: 'Up to 10% off',
    discountPercent: 10,
    description:
      'Dell\'s University Program gives students exclusive discounts on XPS, Inspiron, and Alienware. Discounts stack with ongoing sales for deeper savings.',
    howToClaim:
      'Visit dell.com/students → Register with .edu email → Browse member-only pricing.',
    verification: ['.edu email'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$150+',
  },
  {
    id: 'logitech-student',
    company: 'Logitech',
    iconKey: 'logitech',
    website: 'https://www.logitech.com/en-us',
    category: 'tech',
    title: 'Logitech Student Discount',
    discount: '25% off',
    discountPercent: 25,
    description:
      'Get 25% off all Logitech peripherals — mice, keyboards, webcams, and headsets. Great for home office and gaming setups.',
    howToClaim:
      'Sign up for UNiDAYS or Student Beans → Connect to Logitech → Apply unique discount code at checkout.',
    verification: ['UNiDAYS', 'Student Beans'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$30+',
  },
  {
    id: 'sony-student',
    company: 'Sony',
    iconKey: 'sony',
    website: 'https://store.sony.com/student-discount',
    category: 'tech',
    title: 'Sony Student Discount',
    discount: '10% off',
    discountPercent: 10,
    description:
      'Save 10% on Sony headphones, cameras, speakers, and electronics. Sony\'s student program is verified through SheerID.',
    howToClaim:
      'Visit store.sony.com/student → Verify via SheerID → Shop with discount applied to cart.',
    verification: ['SheerID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$30+',
  },
  {
    id: 'razer-student',
    company: 'Razer',
    iconKey: 'razer',
    website: 'https://www.razer.com/campaigns/student-discount',
    category: 'tech',
    title: 'Razer Student Discount',
    discount: '10% off',
    discountPercent: 10,
    description:
      'Get 10% off Razer gaming peripherals — mice, keyboards, headsets, laptops, and accessories — via UNiDAYS student verification.',
    howToClaim:
      'Verify with UNiDAYS → Connect to Razer store → Unlock discount code → Apply at razer.com checkout.',
    verification: ['UNiDAYS'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$30+',
  },
  {
    id: 'asus-student',
    company: 'ASUS',
    iconKey: 'asus',
    website: 'https://www.asus.com/us/site/education/',
    category: 'tech',
    title: 'ASUS Education Store',
    discount: 'Up to 5% off',
    discountPercent: 5,
    description:
      'ASUS Education Store offers exclusive pricing on ZenBook, VivoBook, and ROG laptops for students and educators.',
    howToClaim:
      'Visit asus.com/education → Verify student status → Browse education-exclusive pricing.',
    verification: ['Student ID', '.edu email'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$100+',
  },
  {
    id: 'acer-student',
    company: 'Acer',
    iconKey: 'acer',
    website: 'https://www.acer.com/ac/en/US/content/group/students',
    category: 'tech',
    title: 'Acer Student Discount',
    discount: '10% off',
    discountPercent: 10,
    description:
      'Acer offers 10% off student pricing on Aspire, Swift, and Predator laptops. One of the most affordable laptop brands for students.',
    howToClaim:
      'Go to acer.com/students → Verify student status → Discount code provided for checkout.',
    verification: ['Student verification'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$80+',
  },
  {
    id: 'bose-student',
    company: 'Bose',
    iconKey: 'bose',
    website: 'https://www.bose.com/en_us/promotions/students.html',
    category: 'tech',
    title: 'Bose Student Discount',
    discount: '15% off',
    discountPercent: 15,
    description:
      'Save 15% on Bose headphones, earbuds, and speakers with student verification. Covers the QuietComfort, Sport, and Frames collections.',
    howToClaim:
      'Visit bose.com/students → Verify with UNiDAYS or SheerID → Discount applied to your cart.',
    verification: ['UNiDAYS', 'SheerID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$50+',
  },

  // ═══════════════════════════════════════════════════════════════
  // SOFTWARE & PRODUCTIVITY
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'adobe-cc',
    company: 'Adobe',
    iconKey: 'adobe',
    website: 'https://www.adobe.com/creativecloud/buy/students.html',
    category: 'software',
    title: 'Creative Cloud All Apps',
    discount: '~60% off',
    discountPercent: 60,
    description:
      'Access all 20+ Adobe apps — Photoshop, Illustrator, Premiere Pro, After Effects, and more — for ~$19.99/month first year vs $54.99 regular.',
    howToClaim:
      'Go to adobe.com/creativecloud/students → Verify enrollment via .edu email or student ID → Select the plan.',
    verification: ['.edu email', 'Student ID'],
    tags: ['verified', 'popular', 'hot'],
    featured: true,
    estimatedAnnualValue: '$420',
  },
  {
    id: 'microsoft-365',
    company: 'Microsoft',
    iconKey: 'microsoft',
    website: 'https://www.microsoft.com/en-us/education/products/office',
    category: 'software',
    title: 'Microsoft 365 Education',
    discount: 'Free',
    discountPercent: 100,
    description:
      'Many universities provide Microsoft 365 (Word, Excel, PowerPoint, Teams, OneDrive 1TB) completely free through institutional licenses. Check with your school first.',
    howToClaim:
      'Visit microsoft.com/education → Enter .edu email → Follow your institution\'s sign-up flow → If unavailable, get it for $2.99/month.',
    verification: ['.edu email'],
    tags: ['free', 'verified', 'popular'],
    featured: true,
    estimatedAnnualValue: '$100+',
  },
  {
    id: 'notion-student',
    company: 'Notion',
    iconKey: 'notion',
    website: 'https://www.notion.so/product/notion-for-education',
    category: 'software',
    title: 'Notion Plus — Free',
    discount: 'Free',
    discountPercent: 100,
    description:
      'Get Notion Plus for free with a verified student account. Unlimited pages, blocks, file uploads, and collaboration for your entire time in school.',
    howToClaim:
      'Sign up at notion.so → Go to Settings → Upgrade → Choose "Education Plan" → Verify with .edu email.',
    verification: ['.edu email'],
    tags: ['free', 'verified', 'popular'],
    featured: true,
    estimatedAnnualValue: '$96',
  },
  {
    id: 'figma-student',
    company: 'Figma',
    iconKey: 'figma',
    website: 'https://www.figma.com/education/',
    category: 'software',
    title: 'Figma Education Plan',
    discount: 'Free',
    discountPercent: 100,
    description:
      'The full Figma Professional plan — unlimited projects, teams, version history, and advanced prototyping — is free for verified students and educators.',
    howToClaim:
      'Go to figma.com/education → Apply with your .edu email → Approved instantly for 2 years → Renewable while enrolled.',
    verification: ['.edu email'],
    tags: ['free', 'verified', 'popular', 'hot'],
    featured: true,
    estimatedAnnualValue: '$144',
  },
  {
    id: 'canva-student',
    company: 'Canva',
    iconKey: 'canva',
    website: 'https://www.canva.com/education/',
    category: 'software',
    title: 'Canva for Education',
    discount: 'Free',
    discountPercent: 100,
    description:
      'Get Canva Pro entirely free — premium templates, brand kits, background remover, magic resize, 100GB storage, and more.',
    howToClaim:
      'Visit canva.com/education → Click "Get Canva for Education" → Verify with .edu email → Instant access.',
    verification: ['.edu email'],
    tags: ['free', 'verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$130',
  },
  {
    id: 'jetbrains-student',
    company: 'JetBrains',
    iconKey: 'jetbrains',
    website: 'https://www.jetbrains.com/community/education/',
    category: 'software',
    title: 'All JetBrains IDEs — Free',
    discount: 'Free',
    discountPercent: 100,
    description:
      'Free license for ALL JetBrains IDEs — IntelliJ IDEA Ultimate, PyCharm, WebStorm, GoLand, DataGrip, CLion, and more. Normally $249+/year.',
    howToClaim:
      'Go to jetbrains.com/education → Apply with .edu email or GitHub Student Pack → Licenses renewed annually while enrolled.',
    verification: ['.edu email', 'GitHub Student Pack'],
    tags: ['free', 'verified', 'popular', 'hot'],
    featured: true,
    estimatedAnnualValue: '$249+',
  },
  {
    id: 'sketch-student',
    company: 'Sketch',
    iconKey: 'sketch',
    website: 'https://www.sketch.com/store/education/',
    category: 'software',
    title: 'Sketch Education Discount',
    discount: '50% off',
    discountPercent: 50,
    description:
      'Get Sketch — the macOS design tool used by top design teams — for 50% off. Build professional UI/UX portfolios during your studies.',
    howToClaim:
      'Visit sketch.com/education → Apply with student or educator email → Receive discounted license.',
    verification: ['Student ID', '.edu email'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$50',
  },
  {
    id: 'evernote-student',
    company: 'Evernote',
    iconKey: 'evernote',
    website: 'https://evernote.com',
    category: 'software',
    title: 'Evernote Professional — 40% off',
    discount: '40% off',
    discountPercent: 40,
    description:
      'Get 40% off Evernote Professional — note syncing, offline access, AI features, and 20GB monthly uploads. Perfect for lecture notes and research.',
    howToClaim:
      'Verify via UNiDAYS or Student Beans → Get unique promo code → Apply at checkout on evernote.com.',
    verification: ['UNiDAYS', 'Student Beans'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$40+',
  },
  {
    id: 'grammarly-student',
    company: 'Grammarly',
    iconKey: 'grammarly',
    website: 'https://www.grammarly.com',
    category: 'software',
    title: 'Grammarly Free',
    discount: 'Free',
    discountPercent: 100,
    description:
      'Grammarly\'s basic tier is free and includes grammar, spelling, and punctuation checks. Many universities also provide Premium access at no cost.',
    howToClaim:
      'Sign up at grammarly.com → Check if your university offers Premium → Install browser extension and Microsoft Office add-in.',
    verification: ['.edu email'],
    tags: ['free', 'popular'],
    featured: false,
    estimatedAnnualValue: '$144',
  },
  {
    id: 'autocad-student',
    company: 'Autodesk',
    iconKey: 'autodesk',
    website: 'https://www.autodesk.com/education/free-software',
    category: 'software',
    title: 'Autodesk Education Access',
    discount: 'Free (1 year)',
    discountPercent: 100,
    description:
      'Get 1-year free access to AutoCAD, Fusion 360, Revit, Maya, 3ds Max, and 100+ Autodesk products. Renewable while enrolled.',
    howToClaim:
      'Go to autodesk.com/education → Create an Education account → Verify enrollment → Download any product free.',
    verification: ['Autodesk Education account'],
    tags: ['free', 'verified', 'hot'],
    featured: true,
    estimatedAnnualValue: '$500+',
  },
  {
    id: 'slack-education',
    company: 'Slack',
    iconKey: 'slack',
    website: 'https://slack.com/education',
    category: 'software',
    title: 'Slack for Education',
    discount: 'Free Pro (via GitHub Pack)',
    discountPercent: 100,
    description:
      'Get Slack Pro free through the GitHub Student Developer Pack — unlimited message history, integrations, group calls, and workflow builder.',
    howToClaim:
      'Redeem via GitHub Student Developer Pack → Connect to Slack → Pro features unlock for your workspace.',
    verification: ['GitHub Student Pack'],
    tags: ['free', 'verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$87+',
  },
  {
    id: 'zoom-education',
    company: 'Zoom',
    iconKey: 'zoom',
    website: 'https://zoom.us/education',
    category: 'software',
    title: 'Zoom for Education',
    discount: 'Free via university',
    discountPercent: 100,
    description:
      'Most universities provide Zoom Pro (unlimited meeting duration, 300 participants) free to students through institutional licenses. Check your school portal.',
    howToClaim:
      'Visit your university IT portal → Look for Zoom Pro sign-on → Sign in with your .edu account → Automatic upgrade to Pro.',
    verification: ['.edu email', 'University license'],
    tags: ['free', 'popular'],
    featured: false,
    estimatedAnnualValue: '$150',
  },
  {
    id: 'lastpass-student',
    company: 'LastPass',
    iconKey: 'lastpass',
    website: 'https://www.lastpass.com',
    category: 'software',
    title: 'LastPass Premium — Free',
    discount: 'Free (via GitHub Pack)',
    discountPercent: 100,
    description:
      'Get LastPass Premium free for 1 year through the GitHub Student Developer Pack — unlimited passwords, secure sharing, emergency access, and dark web monitoring.',
    howToClaim:
      'Redeem via GitHub Student Developer Pack → Connect to LastPass → Premium unlocks automatically.',
    verification: ['GitHub Student Pack'],
    tags: ['free', 'verified'],
    featured: false,
    estimatedAnnualValue: '$36',
  },
  {
    id: 'nordvpn-student',
    company: 'NordVPN',
    iconKey: 'nordvpn',
    website: 'https://nordvpn.com',
    category: 'software',
    title: 'NordVPN Student Discount',
    discount: 'Up to 68% off + 3 months free',
    discountPercent: 68,
    description:
      'Protect your privacy on campus Wi-Fi with NordVPN — up to 68% off plus 3 extra months free for students. 6,300+ servers in 111 countries.',
    howToClaim:
      'Verify via Student Beans → Receive unique NordVPN link → Subscribe at discounted student rate.',
    verification: ['Student Beans'],
    tags: ['verified', 'hot'],
    featured: false,
    estimatedAnnualValue: '$100+',
  },
  {
    id: 'parallels-student',
    company: 'Parallels',
    iconKey: 'parallels',
    website: 'https://www.parallels.com/education/',
    category: 'software',
    title: 'Parallels Desktop — 50% off',
    discount: '50% off',
    discountPercent: 50,
    description:
      'Run Windows on your Mac without rebooting — Parallels Desktop education pricing is 50% off for students and educators. Essential for cross-platform development.',
    howToClaim:
      'Visit parallels.com/education → Verify student or educator status → Purchase at discounted rate.',
    verification: ['Student ID', '.edu email'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$50',
  },
  {
    id: 'duolingo-student',
    company: 'Duolingo',
    iconKey: 'duolingo',
    website: 'https://www.duolingo.com',
    category: 'software',
    title: 'Duolingo Free',
    discount: 'Free',
    discountPercent: 100,
    description:
      'Learn 40+ languages completely free with Duolingo. The most downloaded education app worldwide — gamified lessons, no credit card needed.',
    howToClaim:
      'Download Duolingo → Sign up for free → Start any language course immediately. No student verification required.',
    verification: ['None required'],
    tags: ['free', 'popular'],
    featured: false,
    estimatedAnnualValue: '$84',
  },

  // ═══════════════════════════════════════════════════════════════
  // DEVELOPER TOOLS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'github-student-pack',
    company: 'GitHub',
    iconKey: 'github',
    website: 'https://education.github.com/pack',
    category: 'developer',
    title: 'GitHub Student Developer Pack',
    discount: '$200,000+ worth free',
    discountPercent: 100,
    description:
      'The ultimate developer toolkit — 100+ tools free: domain, cloud credits, JetBrains IDEs, Copilot Pro, Namecheap SSL, interview prep, and much more.',
    howToClaim:
      'Visit education.github.com/pack → Verify with .edu email or upload student ID → Approved within hours → Access all partner benefits.',
    verification: ['.edu email', 'Student ID'],
    tags: ['free', 'verified', 'popular', 'hot'],
    featured: true,
    estimatedAnnualValue: '$200,000+',
  },
  {
    id: 'github-copilot',
    company: 'GitHub Copilot',
    iconKey: 'github',
    website: 'https://github.com/features/copilot',
    category: 'developer',
    title: 'GitHub Copilot Pro — Free',
    discount: 'Free',
    discountPercent: 100,
    description:
      'AI-powered code completion, explanations, and chat across VS Code, JetBrains, and Neovim — free for verified students through GitHub Education.',
    howToClaim:
      'Get GitHub Student Developer Pack first → Copilot Pro unlocks automatically → Enable in your IDE settings.',
    verification: ['GitHub Student Pack'],
    tags: ['free', 'verified', 'hot'],
    featured: false,
    estimatedAnnualValue: '$100',
  },
  {
    id: 'aws-educate',
    company: 'AWS',
    iconKey: 'aws',
    website: 'https://aws.amazon.com/education/awseducate/',
    category: 'developer',
    title: 'AWS Educate',
    discount: 'Free credits + labs',
    discountPercent: 100,
    description:
      'AWS Educate provides free cloud labs, learning paths, and AWS service credits. Learn EC2, S3, Lambda, and more without a credit card.',
    howToClaim:
      'Apply at aws.amazon.com/education/awseducate → Verify student status → Access free labs and credits dashboard.',
    verification: ['.edu email'],
    tags: ['free', 'verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$300+',
  },
  {
    id: 'digitalocean-student',
    company: 'DigitalOcean',
    iconKey: 'digitalocean',
    website: 'https://www.digitalocean.com',
    category: 'developer',
    title: 'DigitalOcean — $200 Credit',
    discount: '$200 credit',
    discountPercent: 100,
    description:
      'Get $200 in DigitalOcean cloud credits through GitHub Student Pack. Deploy apps, databases, and Kubernetes clusters on a developer-friendly cloud.',
    howToClaim:
      'Redeem via GitHub Student Developer Pack → Connect to DigitalOcean account → Credits valid for 60 days.',
    verification: ['GitHub Student Pack'],
    tags: ['free', 'verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$200',
  },
  {
    id: 'namecheap-student',
    company: 'Namecheap',
    iconKey: 'namecheap',
    website: 'https://nc.me',
    category: 'developer',
    title: 'Free .me Domain + SSL',
    discount: 'Free (1 year)',
    discountPercent: 100,
    description:
      'Get a free .me domain for 1 year plus a free SSL certificate. Perfect for student portfolios and personal projects.',
    howToClaim:
      'Go to nc.me → Verify student status → Register your free .me domain → SSL included automatically.',
    verification: ['GitHub Student Pack', '.edu email'],
    tags: ['free', 'verified'],
    featured: false,
    estimatedAnnualValue: '$30',
  },
  {
    id: 'tableau-student',
    company: 'Tableau',
    iconKey: 'tableau',
    website: 'https://www.tableau.com/academic/students',
    category: 'developer',
    title: 'Tableau Desktop — Free',
    discount: 'Free (1 year)',
    discountPercent: 100,
    description:
      'The industry-standard data visualization tool — free for one year. Connect, analyze, and share insights from any data source.',
    howToClaim:
      'Visit tableau.com/academic → Apply with .edu email → Approved within a few days → Renewable annually.',
    verification: ['.edu email'],
    tags: ['free', 'verified'],
    featured: false,
    estimatedAnnualValue: '$840',
  },
  {
    id: 'azure-student',
    company: 'Microsoft Azure',
    iconKey: 'azure',
    website: 'https://azure.microsoft.com/en-us/free/students/',
    category: 'developer',
    title: 'Azure for Students',
    discount: '$100 credit, no card needed',
    discountPercent: 100,
    description:
      'Get $100 in free Azure credits plus 25+ always-free services — no credit card required. Includes AI/ML tools, databases, and DevOps.',
    howToClaim:
      'Visit azure.microsoft.com/students → Sign in with .edu email → Credits applied instantly.',
    verification: ['.edu email'],
    tags: ['free', 'verified', 'hot'],
    featured: true,
    estimatedAnnualValue: '$100',
  },
  {
    id: 'mongodb-student',
    company: 'MongoDB',
    iconKey: 'mongodb',
    website: 'https://www.mongodb.com/students',
    category: 'developer',
    title: 'MongoDB Atlas — $200 Credit',
    discount: '$200 credit',
    discountPercent: 100,
    description:
      'Get $200 in MongoDB Atlas credits through the GitHub Student Developer Pack. Build apps on the world\'s leading document database — ideal for modern web apps.',
    howToClaim:
      'Redeem via GitHub Student Developer Pack → Connect to MongoDB account → Credits applied to your Atlas cluster.',
    verification: ['GitHub Student Pack'],
    tags: ['free', 'verified'],
    featured: false,
    estimatedAnnualValue: '$200',
  },
  {
    id: 'gitlab-student',
    company: 'GitLab',
    iconKey: 'gitlab',
    website: 'https://about.gitlab.com/solutions/education/',
    category: 'developer',
    title: 'GitLab Ultimate — Free',
    discount: 'Free',
    discountPercent: 100,
    description:
      'GitLab Ultimate (normally $99/user/month) is free for students and educators. Includes CI/CD pipelines, security scanning, and project management.',
    howToClaim:
      'Visit about.gitlab.com/education → Apply with .edu email → Approved within days → Full Ultimate features unlocked.',
    verification: ['.edu email'],
    tags: ['free', 'verified'],
    featured: false,
    estimatedAnnualValue: '$1,188+',
  },
  {
    id: 'postman-student',
    company: 'Postman',
    iconKey: 'postman',
    website: 'https://www.postman.com/student-program/',
    category: 'developer',
    title: 'Postman Student Expert',
    discount: 'Free team workspace',
    discountPercent: 100,
    description:
      'Get free access to Postman\'s API platform and earn a Student Expert badge. Build, test, and document APIs — the industry standard tool.',
    howToClaim:
      'Visit postman.com/student-program → Enroll in the Student Expert program → Complete the curriculum → Get your badge and free access.',
    verification: ['.edu email'],
    tags: ['free', 'verified'],
    featured: false,
    estimatedAnnualValue: '$120+',
  },
  {
    id: 'replit-student',
    company: 'Replit',
    iconKey: 'replit',
    website: 'https://replit.com/github-students',
    category: 'developer',
    title: 'Replit Hacker Plan — Free',
    discount: 'Free (via GitHub Pack)',
    discountPercent: 100,
    description:
      'Get 3 months free of Replit Hacker Plan — collaborative in-browser IDE with private repls, boosted compute, and deployment for 50+ languages.',
    howToClaim:
      'Redeem via GitHub Student Developer Pack → Connect to Replit account → Hacker Plan unlocks automatically.',
    verification: ['GitHub Student Pack'],
    tags: ['free', 'verified'],
    featured: false,
    estimatedAnnualValue: '$21',
  },
  {
    id: 'vercel-student',
    company: 'Vercel',
    iconKey: 'vercel',
    website: 'https://vercel.com',
    category: 'developer',
    title: 'Vercel Hobby — Free Forever',
    discount: 'Free',
    discountPercent: 100,
    description:
      'Deploy unlimited personal projects with Vercel\'s Hobby tier — free forever. Automatic HTTPS, preview deployments, and instant global CDN.',
    howToClaim:
      'Sign up at vercel.com → Connect your GitHub account → Deploy your first project for free immediately.',
    verification: ['None required'],
    tags: ['free', 'popular'],
    featured: false,
    estimatedAnnualValue: '$240',
  },
  {
    id: 'railway-student',
    company: 'Railway',
    iconKey: 'railway',
    website: 'https://railway.app',
    category: 'developer',
    title: 'Railway — $10 Monthly Credit',
    discount: '$10/month credit',
    discountPercent: 100,
    description:
      'Deploy backends, databases, and full-stack apps on Railway with $10 free monthly credit via GitHub Student Pack. Supports Node, Python, Ruby, Go, and more.',
    howToClaim:
      'Redeem via GitHub Student Developer Pack → Connect Railway account → $10 monthly credit applied.',
    verification: ['GitHub Student Pack'],
    tags: ['free', 'verified'],
    featured: false,
    estimatedAnnualValue: '$120',
  },
  {
    id: 'sendgrid-student',
    company: 'SendGrid',
    iconKey: 'sendgrid',
    website: 'https://sendgrid.com',
    category: 'developer',
    title: 'SendGrid — 15K Emails/Month Free',
    discount: '15,000 emails/month free',
    discountPercent: 100,
    description:
      'Access 15,000 free email sends per month through the GitHub Student Developer Pack. Perfect for building apps with transactional emails.',
    howToClaim:
      'Redeem via GitHub Student Developer Pack → Connect SendGrid account → Free plan auto-applied.',
    verification: ['GitHub Student Pack'],
    tags: ['free', 'verified'],
    featured: false,
    estimatedAnnualValue: '$100+',
  },

  // ═══════════════════════════════════════════════════════════════
  // STREAMING & ENTERTAINMENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'spotify-student',
    company: 'Spotify',
    iconKey: 'spotify',
    website: 'https://www.spotify.com/us/student/',
    category: 'streaming',
    title: 'Spotify Premium + Hulu',
    discount: '$5.99/mo (60% off)',
    discountPercent: 60,
    description:
      'Get Spotify Premium and Hulu (with ads) bundled for $5.99/month — nearly 65% off the combined regular price of $17.98/month.',
    howToClaim:
      'Go to spotify.com/student → Verify via SheerID with .edu email or student ID → Renew each year while enrolled.',
    verification: ['SheerID', '.edu email'],
    tags: ['verified', 'popular', 'hot'],
    featured: true,
    estimatedAnnualValue: '$145',
  },
  {
    id: 'apple-music-student',
    company: 'Apple Music',
    iconKey: 'applemusic',
    website: 'https://www.apple.com/apple-music/',
    category: 'streaming',
    title: 'Apple Music Student Plan',
    discount: '$5.99/mo + free Apple TV+',
    discountPercent: 50,
    description:
      'Get Apple Music for $5.99/month (50% off) with free Apple TV+. Access 100M+ songs in lossless audio with Dolby Atmos.',
    howToClaim:
      'Open Apple Music → Tap "Get 3 months free" → Verify with .edu email via UNiDAYS → Continue at $5.99/month.',
    verification: ['UNiDAYS', '.edu email'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$190',
  },
  {
    id: 'hulu-student',
    company: 'Hulu',
    iconKey: 'hulu',
    website: 'https://www.hulu.com/student',
    category: 'streaming',
    title: 'Hulu Student Plan',
    discount: '$1.99/mo (65% off)',
    discountPercent: 65,
    description:
      'Stream thousands of movies, TV shows, and Hulu originals for just $1.99/month — one of the cheapest entertainment subscriptions available.',
    howToClaim:
      'Visit hulu.com/student → Verify enrollment with SheerID → Sign up or switch your existing plan.',
    verification: ['SheerID'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$72',
  },
  {
    id: 'amazon-prime-student',
    company: 'Amazon',
    iconKey: 'amazon',
    website: 'https://www.amazon.com/joinstudent',
    category: 'streaming',
    title: 'Amazon Prime Student',
    discount: '6 months free, 50% off after',
    discountPercent: 50,
    description:
      'Get 6 months of Prime free, then $69/year (50% off). Includes Prime Video, Prime Music, free 2-day shipping, Grubhub+, and Whole Foods discounts.',
    howToClaim:
      'Visit amazon.com/joinstudent → Sign in → Verify with .edu email → Start free 6-month trial.',
    verification: ['.edu email'],
    tags: ['free', 'verified', 'popular', 'hot'],
    featured: true,
    estimatedAnnualValue: '$139+',
  },
  {
    id: 'youtube-premium-student',
    company: 'YouTube',
    iconKey: 'youtube',
    website: 'https://www.youtube.com/premium/student',
    category: 'streaming',
    title: 'YouTube Premium Student',
    discount: '$7.99/mo + 1 month free',
    discountPercent: 47,
    description:
      'Go ad-free on YouTube and YouTube Music for $7.99/month. Includes offline downloads, background play, and YouTube Music Premium. First month free.',
    howToClaim:
      'Go to youtube.com/premium → Select "Try Student Membership" → Verify via SheerID → Enjoy ad-free.',
    verification: ['SheerID'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$72',
  },
  {
    id: 'peacock-student',
    company: 'Peacock',
    iconKey: 'peacock',
    website: 'https://www.peacocktv.com',
    category: 'streaming',
    title: 'Peacock Premium Student',
    discount: '$2.99/mo (50% off)',
    discountPercent: 50,
    description:
      'Stream NBC, Bravo, sports, movies, and originals for $2.99/month — half the standard price. Includes WWE Network, Premier League, and NFL.',
    howToClaim:
      'Visit peacocktv.com → Sign up → Verify student status via UNiDAYS → Apply discount.',
    verification: ['UNiDAYS'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$36',
  },
  {
    id: 'paramount-student',
    company: 'Paramount+',
    iconKey: 'paramount',
    website: 'https://www.paramountplus.com',
    category: 'streaming',
    title: 'Paramount+ Student Discount',
    discount: '50% off',
    discountPercent: 50,
    description:
      'Get Paramount+ at 50% off. Watch CBS, MTV, Comedy Central originals, live sports, and blockbuster movies at half price.',
    howToClaim:
      'Visit paramountplus.com → Choose a plan → Verify student status → Discount auto-applied.',
    verification: ['Student verification'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$60',
  },
  {
    id: 'headspace-student',
    company: 'Headspace',
    iconKey: 'alomoves',
    website: 'https://www.headspace.com/studentplan',
    category: 'streaming',
    title: 'Headspace Student Plan',
    discount: '$9.99/yr (85% off)',
    discountPercent: 85,
    description:
      'Get the #1 mindfulness app for $9.99/year — an 85% discount off the $69.99 regular price. Meditations, sleep sounds, and focus music all included.',
    howToClaim:
      'Go to headspace.com/student → Verify student status via SheerID → Subscribe at $9.99/year.',
    verification: ['SheerID'],
    tags: ['verified', 'hot', 'popular'],
    featured: true,
    estimatedAnnualValue: '$60',
  },
  {
    id: 'tidal-student',
    company: 'Tidal',
    iconKey: 'tidal',
    website: 'https://tidal.com/plans',
    category: 'streaming',
    title: 'Tidal HiFi Student',
    discount: '$5.49/mo (45% off)',
    discountPercent: 45,
    description:
      'Stream 100M+ tracks in HiFi lossless audio, Dolby Atmos, and Sony 360 Reality Audio for $5.49/month — nearly half the standard price.',
    howToClaim:
      'Visit tidal.com/plans → Select Student plan → Verify with .edu email → Enjoy HiFi audio.',
    verification: ['.edu email'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$54',
  },
  {
    id: 'pandora-student',
    company: 'Pandora',
    iconKey: 'pandora',
    website: 'https://www.pandora.com/upgrade',
    category: 'streaming',
    title: 'Pandora Student Plan',
    discount: '$5.99/mo + 60 days free',
    discountPercent: 40,
    description:
      'Get Pandora Plus for $5.99/month with 60 days free — unlimited skips, offline listening, and no ads for students.',
    howToClaim:
      'Visit pandora.com/upgrade → Select Student plan → Verify with .edu email → Start 60-day free trial.',
    verification: ['.edu email'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$42',
  },
  {
    id: 'soundcloud-student',
    company: 'SoundCloud',
    iconKey: 'soundcloud',
    website: 'https://soundcloud.com',
    category: 'streaming',
    title: 'SoundCloud Go+ Student',
    discount: '50% off first 6 months',
    discountPercent: 50,
    description:
      'SoundCloud Go+ student discount gives 50% off for the first 6 months — offline listening, no ads, and exclusive tracks from independent artists.',
    howToClaim:
      'Visit soundcloud.com → Sign up for Go+ → Verify student status → 50% off applied for 6 months.',
    verification: ['Student verification'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$30',
  },
  {
    id: 'deezer-student',
    company: 'Deezer',
    iconKey: 'deezer',
    website: 'https://www.deezer.com/us/offers',
    category: 'streaming',
    title: 'Deezer Student Plan',
    discount: '$5.99/mo (40% off)',
    discountPercent: 40,
    description:
      'Stream 90M+ songs ad-free with offline mode for $5.99/month — 40% off regular pricing. High-fidelity audio option available.',
    howToClaim:
      'Go to deezer.com/offers → Select Student plan → Verify with .edu email → Enjoy premium streaming.',
    verification: ['.edu email'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$48',
  },

  // ═══════════════════════════════════════════════════════════════
  // FOOD & DELIVERY
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'doordash-student',
    company: 'DoorDash',
    iconKey: 'doordash',
    website: 'https://www.doordash.com/dashpass/student',
    category: 'food',
    title: 'DashPass Student',
    discount: '$4.99/mo (50% off)',
    discountPercent: 50,
    description:
      'Get DashPass for $4.99/month — unlimited free delivery from thousands of restaurants, grocery stores, and convenience stores near campus.',
    howToClaim:
      'Open DoorDash → Tap "DashPass" → Select Student plan → Verify with .edu email via SheerID.',
    verification: ['SheerID', '.edu email'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$60',
  },
  {
    id: 'hellofresh-student',
    company: 'HelloFresh',
    iconKey: 'hellofresh',
    website: 'https://www.hellofresh.com',
    category: 'food',
    title: 'HelloFresh Student Discount',
    discount: '55% off first box',
    discountPercent: 55,
    description:
      'Get 55% off your first meal kit box plus 15% off subsequent orders. Fresh ingredients with chef-designed recipes — great for students learning to cook.',
    howToClaim:
      'Visit hellofresh.com → Sign up → Verify student status via Student Beans → Apply discount at checkout.',
    verification: ['Student Beans', 'UNiDAYS'],
    tags: ['verified', 'limited'],
    featured: false,
    estimatedAnnualValue: '$50+',
  },
  {
    id: 'blue-apron-student',
    company: 'Blue Apron',
    iconKey: 'blueapron',
    website: 'https://www.blueapron.com',
    category: 'food',
    title: 'Blue Apron — 30% off First 5 Weeks',
    discount: '30% off first 5 weeks',
    discountPercent: 30,
    description:
      'Save 30% on your first 5 weeks of Blue Apron meal kits. Chef-crafted recipes with pre-measured ingredients — no experience required.',
    howToClaim:
      'Go to blueapron.com → Use student promo code from Student Beans → Discount applies to first 5 orders.',
    verification: ['Student Beans', '.edu email'],
    tags: ['verified', 'limited'],
    featured: false,
    estimatedAnnualValue: '$50+',
  },
  {
    id: 'walmart-plus-student',
    company: 'Walmart+',
    iconKey: 'walmart',
    website: 'https://www.walmart.com/plus',
    category: 'food',
    title: 'Walmart+ — Half Price',
    discount: '$49/yr (50% off)',
    discountPercent: 50,
    description:
      'Get Walmart+ for $49/year (regular $98) — free delivery on groceries, fuel discounts, member prescription prices, and Paramount+ Essential.',
    howToClaim:
      'Visit walmart.com/plus → Select Student plan → Verify with .edu email → Subscribe at half price.',
    verification: ['.edu email'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$49',
  },
  {
    id: 'chipotle-student',
    company: 'Chipotle',
    iconKey: 'chipotle',
    website: 'https://www.chipotle.com',
    category: 'food',
    title: 'Chipotle Student Perks',
    discount: 'Free drink + rewards',
    discountPercent: 15,
    description:
      'Many Chipotle locations near campuses offer free drinks with a meal purchase for students. Chipotle Rewards also offers bonus points during student promotions.',
    howToClaim:
      'Show student ID at participating Chipotle locations → Ask about student discount → Join Chipotle Rewards for ongoing perks.',
    verification: ['Student ID'],
    tags: ['popular'],
    featured: false,
    estimatedAnnualValue: '$30+',
  },
  {
    id: 'subway-student',
    company: 'Subway',
    iconKey: 'subway',
    website: 'https://www.subway.com',
    category: 'food',
    title: 'Subway Student Discount',
    discount: '10% off (select locations)',
    discountPercent: 10,
    description:
      'Subway participating locations near university campuses offer 10% student discounts with a valid student ID. Always ask at the counter.',
    howToClaim:
      'Visit your nearest Subway → Show valid student ID at checkout → Ask if they participate in the student discount program.',
    verification: ['Student ID'],
    tags: ['popular'],
    featured: false,
    estimatedAnnualValue: '$20+',
  },
  {
    id: 'burgerking-student',
    company: 'Burger King',
    iconKey: 'burgerking',
    website: 'https://www.burgerking.com',
    category: 'food',
    title: 'Burger King Student Discount',
    discount: '10% off (select locations)',
    discountPercent: 10,
    description:
      'Select Burger King locations near college campuses offer 10% off for students with valid ID. Also check the BK Royal Perks app for student deals.',
    howToClaim:
      'Show student ID at participating BK locations → Or check the BK Royal Perks app for local student offers.',
    verification: ['Student ID'],
    tags: [],
    featured: false,
    estimatedAnnualValue: '$20+',
  },

  // ═══════════════════════════════════════════════════════════════
  // TRAVEL
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'studentuniverse',
    company: 'StudentUniverse',
    iconKey: 'studentuniverse',
    website: 'https://www.studentuniverse.com',
    category: 'travel',
    title: 'Exclusive Student Flight Fares',
    discount: 'Up to 30% off flights',
    discountPercent: 30,
    description:
      'Exclusive student fares on flights worldwide. Save on average $100-$200 on international flights vs standard booking sites. Ages 16-25.',
    howToClaim:
      'Register at studentuniverse.com with .edu email → Browse exclusive student fares → Verify age and student status at booking.',
    verification: ['.edu email', 'Student ID'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$200+',
  },
  {
    id: 'amtrak-student',
    company: 'Amtrak',
    iconKey: 'amtrak',
    website: 'https://www.amtrak.com/student-discount',
    category: 'travel',
    title: 'Amtrak Student Discount',
    discount: '15% off',
    discountPercent: 15,
    description:
      'Save 15% on advance fares on most Amtrak trains. Great for traveling home during breaks or exploring the US by rail.',
    howToClaim:
      'Book at amtrak.com or call Amtrak → Select "Youth/Student" discount → Show valid student ID at boarding.',
    verification: ['Student ID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$30+',
  },
  {
    id: 'united-student',
    company: 'United Airlines',
    iconKey: 'united',
    website: 'https://www.studentuniverse.com',
    category: 'travel',
    title: 'United Student Fares',
    discount: '5% off (ages 18-23)',
    discountPercent: 5,
    description:
      'Ages 18-23 save 5% on select United Airlines flights when booking through StudentUniverse. Small but stackable with other offers.',
    howToClaim:
      'Book United flights through studentuniverse.com → Student pricing auto-applied for eligible ages.',
    verification: ['Age verification', 'Student ID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$20+',
  },
  {
    id: 'hotels-com-student',
    company: 'Hotels.com',
    iconKey: 'hotelscom',
    website: 'https://www.hotels.com',
    category: 'travel',
    title: 'Hotels.com Student Discount',
    discount: '10% off',
    discountPercent: 10,
    description:
      'Get 10% off hotels worldwide. Every 10 nights earns you 1 free night. Student discount stacks with loyalty rewards.',
    howToClaim:
      'Visit hotels.com → Log in or sign up → Verify student status → Discount auto-applies on eligible properties.',
    verification: ['Student ID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$50+',
  },
  {
    id: 'isic-card',
    company: 'ISIC',
    iconKey: 'isic',
    website: 'https://www.isic.org',
    category: 'travel',
    title: 'International Student Identity Card',
    discount: '40,000+ discounts, 130 countries',
    discountPercent: 30,
    description:
      'The globally recognized student ID card — accepted for discounts on transport, museums, hostels, food, and more in 130 countries. Essential for international travel.',
    howToClaim:
      'Apply at isic.org → Upload enrollment proof and photo → Receive physical or virtual card → Present worldwide.',
    verification: ['Enrollment proof', 'Photo ID'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$200+',
  },
  {
    id: 'greyhound-student',
    company: 'Greyhound',
    iconKey: 'greyhound',
    website: 'https://www.greyhound.com',
    category: 'travel',
    title: 'Greyhound Student Discount',
    discount: '10% off',
    discountPercent: 10,
    description:
      'Save 10% on Greyhound bus tickets with valid student ID. Affordable intercity travel connecting 2,400+ US destinations.',
    howToClaim:
      'Book at greyhound.com → Select "Student Discount" → Verify student status → Show ID at boarding.',
    verification: ['Student ID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$20+',
  },
  {
    id: 'enterprise-student',
    company: 'Enterprise',
    iconKey: 'enterprise',
    website: 'https://www.enterprise.com/en/car-rental/deals/young-renter.html',
    category: 'travel',
    title: 'Enterprise Student Discount',
    discount: 'Up to 20% off',
    discountPercent: 20,
    description:
      'Enterprise offers young driver and student discounts of up to 20% on car rentals. Great for road trips home and campus commuting.',
    howToClaim:
      'Visit enterprise.com → Select a vehicle → Apply student or young driver discount code → Show student ID at pickup.',
    verification: ['Student ID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$40+',
  },
  {
    id: 'flixbus-student',
    company: 'FlixBus',
    iconKey: 'flixbus',
    website: 'https://www.flixbus.com',
    category: 'travel',
    title: 'FlixBus Student Fares',
    discount: 'Discounted student fares',
    discountPercent: 15,
    description:
      'FlixBus offers discounted student fares across 40+ countries in Europe and North America. Comfortable intercity buses with free Wi-Fi.',
    howToClaim:
      'Book at flixbus.com → Select student fare option → Verify student status → Show ID on board.',
    verification: ['Student ID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$30+',
  },

  // ═══════════════════════════════════════════════════════════════
  // FASHION & RETAIL
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'asos-student',
    company: 'ASOS',
    iconKey: 'asos',
    website: 'https://www.asos.com',
    category: 'fashion',
    title: 'ASOS Student Discount',
    discount: '10% off',
    discountPercent: 10,
    description:
      'Save 10% on ASOS fashion — thousands of brands including ASOS design, Nike, Adidas, and more. Free delivery and returns on orders over $49.',
    howToClaim:
      'Verify with Student Beans → Connect to ASOS → Receive unique discount code valid for checkout.',
    verification: ['Student Beans'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$50+',
  },
  {
    id: 'nike-student',
    company: 'Nike',
    iconKey: 'nike',
    website: 'https://www.nike.com',
    category: 'fashion',
    title: 'Nike Student Discount',
    discount: '10% off',
    discountPercent: 10,
    description:
      'Get 10% off Nike shoes, apparel, and gear storewide. Discount applies on top of sale prices for even bigger savings.',
    howToClaim:
      'Verify via UNiDAYS → Connect to Nike account → Apply discount in checkout on nike.com.',
    verification: ['UNiDAYS'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$30+',
  },
  {
    id: 'adidas-student',
    company: 'Adidas',
    iconKey: 'adidas',
    website: 'https://www.adidas.com',
    category: 'fashion',
    title: 'Adidas — 15% off + Free Shipping',
    discount: '15% off + free shipping',
    discountPercent: 15,
    description:
      'Save 15% on Adidas footwear, apparel, and accessories with free standard shipping — no minimum order required.',
    howToClaim:
      'Verify via Student Beans → Unlock unique promo code → Apply at adidas.com checkout.',
    verification: ['Student Beans'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$40+',
  },
  {
    id: 'urban-outfitters-student',
    company: 'Urban Outfitters',
    iconKey: 'urbanoutfitters',
    website: 'https://www.urbanoutfitters.com',
    category: 'fashion',
    title: 'Urban Outfitters — 15% off',
    discount: '15% off',
    discountPercent: 15,
    description:
      'Save 15% storewide on Urban Outfitters clothing, accessories, and home decor. One of the more generous college student retail discounts.',
    howToClaim:
      'Get UNiDAYS account → Connect Urban Outfitters → Unlock promo code → Apply online or show in-store.',
    verification: ['UNiDAYS'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$60+',
  },
  {
    id: 'american-eagle-student',
    company: 'American Eagle',
    iconKey: 'americaneagle',
    website: 'https://www.ae.com',
    category: 'fashion',
    title: 'American Eagle — 20% off',
    discount: '20% off',
    discountPercent: 20,
    description:
      'Get 20% off AE and Aerie purchases — jeans, hoodies, activewear, and more. One of the best fashion discounts for students, especially for denim.',
    howToClaim:
      'Verify via UNiDAYS → Receive discount code → Apply at ae.com or present in-store.',
    verification: ['UNiDAYS'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$60+',
  },
  {
    id: 'madewell-student',
    company: 'Madewell',
    iconKey: 'madewell',
    website: 'https://www.madewell.com',
    category: 'fashion',
    title: 'Madewell Student Discount',
    discount: '15% off',
    discountPercent: 15,
    description:
      'Get 15% off at Madewell with valid student ID. Known for quality denim, basics, and workwear with a heritage style.',
    howToClaim:
      'Visit madewell.com or go in-store → Show valid student ID or verify online.',
    verification: ['Student ID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$40+',
  },
  {
    id: 'hm-student',
    company: 'H&M',
    iconKey: 'hm',
    website: 'https://www.hm.com',
    category: 'fashion',
    title: 'H&M Student Discount',
    discount: '10% off',
    discountPercent: 10,
    description:
      'Save 10% on all H&M fashion with UNiDAYS verification. Wide range of clothing, accessories, and home products at affordable prices.',
    howToClaim:
      'Verify via UNiDAYS → Get unique discount code for H&M → Apply online or in-store.',
    verification: ['UNiDAYS'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$30+',
  },
  {
    id: 'vans-student',
    company: 'Vans',
    iconKey: 'vans',
    website: 'https://www.vans.com',
    category: 'fashion',
    title: 'Vans Student Discount',
    discount: '10% off',
    discountPercent: 10,
    description:
      'Get 10% off iconic Vans shoes and apparel for students. Classics like Old Skool, Sk8-Hi, and Checkerboard Slip-Ons at discounted pricing.',
    howToClaim:
      'Verify via UNiDAYS → Receive unique Vans promo code → Apply at vans.com checkout.',
    verification: ['UNiDAYS'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$15+',
  },
  {
    id: 'converse-student',
    company: 'Converse',
    iconKey: 'converse',
    website: 'https://www.converse.com',
    category: 'fashion',
    title: 'Converse Student Discount',
    discount: '10% off',
    discountPercent: 10,
    description:
      'Save 10% on Chuck Taylors, One Stars, and Jack Purcells via student verification. Converse discounts stack during seasonal sales.',
    howToClaim:
      'Verify via UNiDAYS or Student Beans → Connect to Converse → Receive promo code → Apply at converse.com.',
    verification: ['UNiDAYS', 'Student Beans'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$10+',
  },
  {
    id: 'levis-student',
    company: "Levi's",
    iconKey: 'levis',
    website: 'https://www.levis.com',
    category: 'fashion',
    title: "Levi's Student Discount",
    discount: '15% off',
    discountPercent: 15,
    description:
      'Get 15% off iconic Levi\'s jeans, jackets, and apparel with student verification. A wardrobe staple at a better price.',
    howToClaim:
      "Verify via UNiDAYS → Connect to Levi's store → Receive promo code → Apply at levis.com.",
    verification: ['UNiDAYS'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$20+',
  },
  {
    id: 'underarmour-student',
    company: 'Under Armour',
    iconKey: 'underarmour',
    website: 'https://www.underarmour.com',
    category: 'fashion',
    title: 'Under Armour — 10% off',
    discount: '10% off',
    discountPercent: 10,
    description:
      'Save 10% on Under Armour performance gear — shoes, shorts, hoodies, and training equipment. Verified through Student Beans.',
    howToClaim:
      'Verify via Student Beans → Unlock Under Armour promo code → Apply at underarmour.com checkout.',
    verification: ['Student Beans'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$20+',
  },

  // ═══════════════════════════════════════════════════════════════
  // FITNESS & WELLNESS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'peloton-student',
    company: 'Peloton',
    iconKey: 'peloton',
    website: 'https://www.onepeloton.com',
    category: 'fitness',
    title: 'Peloton App+ Student Plan',
    discount: '$6.99/mo (65% off)',
    discountPercent: 65,
    description:
      'Thousands of Peloton fitness classes — cycling, running, yoga, strength, and more — for $6.99/month instead of $19.99.',
    howToClaim:
      'Visit onepeloton.com → Select App+ → Choose student plan → Verify via .edu email.',
    verification: ['.edu email'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$156',
  },
  {
    id: 'alo-moves-student',
    company: 'Alo Moves',
    iconKey: 'alomoves',
    website: 'https://www.alomoves.com',
    category: 'fitness',
    title: 'Alo Moves — 60% off',
    discount: '60% off',
    discountPercent: 60,
    description:
      'Access unlimited yoga, mindfulness, and fitness classes from world-class instructors for 60% off. Perfect for maintaining wellness during college.',
    howToClaim:
      'Go to alomoves.com → Select annual plan → Verify student status → 60% discount auto-applied.',
    verification: ['Student verification'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$72',
  },
  {
    id: 'gymshark-student',
    company: 'Gymshark',
    iconKey: 'gymshark',
    website: 'https://www.gymshark.com',
    category: 'fitness',
    title: 'Gymshark Student Discount',
    discount: '15% off',
    discountPercent: 15,
    description:
      'Save 15% on Gymshark fitness apparel — leggings, sports bras, tank tops, and accessories. Worn by millions of gym-goers worldwide.',
    howToClaim:
      'Verify with Student Beans → Receive unique promo code → Apply at gymshark.com checkout.',
    verification: ['Student Beans'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$20+',
  },
  {
    id: 'talkspace-student',
    company: 'Talkspace',
    iconKey: 'talkspace',
    website: 'https://www.talkspace.com',
    category: 'fitness',
    title: 'Talkspace — $100 off',
    discount: '$100 off first month',
    discountPercent: 33,
    description:
      'Get $100 off your first month of online therapy with licensed therapists. Mental health support via text, audio, and video sessions.',
    howToClaim:
      'Visit talkspace.com → Sign up → Use student promo code → Matched with therapist within days.',
    verification: ['Promo code', 'Student ID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$100',
  },
  {
    id: 'nike-training-club',
    company: 'Nike Training Club',
    iconKey: 'nike_tc',
    website: 'https://www.nike.com/ntc-app',
    category: 'fitness',
    title: 'Nike Training Club — Free',
    discount: 'Free',
    discountPercent: 100,
    description:
      'Nike Training Club app is completely free — 185+ free workouts, custom plans, and guidance from world-class athletes and trainers. No subscription required.',
    howToClaim:
      'Download the NTC app from the App Store or Google Play → Sign in with Nike account → All workouts unlock immediately for free.',
    verification: ['None required'],
    tags: ['free', 'popular'],
    featured: false,
    estimatedAnnualValue: '$60',
  },
  {
    id: 'planet-fitness-student',
    company: 'Planet Fitness',
    iconKey: 'planet',
    website: 'https://www.planetfitness.com',
    category: 'fitness',
    title: 'Planet Fitness — $10/Month',
    discount: '$10/month (budget gym)',
    discountPercent: 50,
    description:
      'Planet Fitness Classic membership starts at $10/month — 24/7 access, strength equipment, cardio machines, and free fitness training. No student ID needed.',
    howToClaim:
      'Visit planetfitness.com or walk into any location → Sign up for Classic membership at $10/month → No long-term contract required.',
    verification: ['None required'],
    tags: ['popular'],
    featured: false,
    estimatedAnnualValue: '$60',
  },
  {
    id: 'strava-student',
    company: 'Strava',
    iconKey: 'strava',
    website: 'https://www.strava.com',
    category: 'fitness',
    title: 'Strava Student Discount',
    discount: 'Discounted subscription',
    discountPercent: 30,
    description:
      'Track runs, rides, and workouts with Strava. Students get discounted access to Strava Subscription with advanced analytics, route planning, and segment leaderboards.',
    howToClaim:
      'Visit strava.com → Look for student or first-year offer → Verify student status → Get discounted subscription.',
    verification: ['Student verification'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$25',
  },

  // ═══════════════════════════════════════════════════════════════
  // EDUCATION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'coursera-student',
    company: 'Coursera',
    iconKey: 'coursera',
    website: 'https://www.coursera.org',
    category: 'education',
    title: 'Coursera Free Course Audit',
    discount: 'Free (audit)',
    discountPercent: 100,
    description:
      'Audit thousands of courses from Stanford, MIT, Yale, and more for free. Access all lectures and readings — pay only for a certificate.',
    howToClaim:
      'Visit coursera.org → Find a course → Click "Enroll" → Select "Audit" to access free.',
    verification: ['None required'],
    tags: ['free', 'popular'],
    featured: false,
    estimatedAnnualValue: '$500+',
  },
  {
    id: 'linkedin-learning',
    company: 'LinkedIn Learning',
    iconKey: 'linkedin',
    website: 'https://www.linkedin.com/learning/',
    category: 'education',
    title: 'LinkedIn Learning — 1 Month Free',
    discount: '1 month free',
    discountPercent: 100,
    description:
      'Access 21,000+ professional courses free for 1 month. Certificates add directly to your LinkedIn profile — perfect for job applications.',
    howToClaim:
      'Visit linkedin.com/learning → Start free trial → No credit card required for first month.',
    verification: ['LinkedIn account'],
    tags: ['free', 'popular'],
    featured: false,
    estimatedAnnualValue: '$40',
  },
  {
    id: 'nyt-student',
    company: 'New York Times',
    iconKey: 'nyt',
    website: 'https://www.nytimes.com/subscriptions/edu/student.html',
    category: 'education',
    title: 'NYT Digital Access',
    discount: 'Free through universities',
    discountPercent: 100,
    description:
      'Full NYT access — news, cooking, games (Wordle, Spelling Bee), and Wirecutter — free through most university library systems.',
    howToClaim:
      'Check your university library website → Connect with student credentials → Or go to nytimes.com/student to verify.',
    verification: ['University library', '.edu email'],
    tags: ['free', 'popular'],
    featured: false,
    estimatedAnnualValue: '$280',
  },
  {
    id: 'audible-student',
    company: 'Audible',
    iconKey: 'audible',
    website: 'https://www.audible.com/student',
    category: 'education',
    title: 'Audible Student Discount',
    discount: '30% off ($9.95/mo)',
    discountPercent: 30,
    description:
      'Get Audible Premium Plus for $9.95/month (30% off) with 1 credit/month for any audiobook. Great for commutes and study breaks.',
    howToClaim:
      'Go to audible.com/student → Verify student status → Subscribe at reduced rate.',
    verification: ['.edu email'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$50',
  },
  {
    id: 'wsj-student',
    company: 'Wall Street Journal',
    iconKey: 'wsj',
    website: 'https://www.wsj.com',
    category: 'education',
    title: 'WSJ Student Rate',
    discount: '$49/year (75% off)',
    discountPercent: 75,
    description:
      'Full WSJ access — breaking news, markets data, podcasts, and the WSJ app — for $49/year, a 75% discount off $199 standard.',
    howToClaim:
      'Go to wsj.com → Click Subscribe → Select Student offer → Verify with .edu email.',
    verification: ['.edu email'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$150',
  },
  {
    id: 'khan-academy',
    company: 'Khan Academy',
    iconKey: 'khan',
    website: 'https://www.khanacademy.org',
    category: 'education',
    title: 'Khan Academy — Completely Free',
    discount: 'Free forever',
    discountPercent: 100,
    description:
      'World-class education in math, science, computing, history, and more — completely free forever. Trusted by 140M+ learners worldwide.',
    howToClaim:
      'Visit khanacademy.org → Create a free account → Access all courses, exercises, and videos instantly.',
    verification: ['None required'],
    tags: ['free', 'popular'],
    featured: false,
    estimatedAnnualValue: '$1,000+',
  },
  {
    id: 'edx-audit',
    company: 'edX',
    iconKey: 'edx',
    website: 'https://www.edx.org',
    category: 'education',
    title: 'edX Free Course Audit',
    discount: 'Free (audit)',
    discountPercent: 100,
    description:
      'Audit university courses from Harvard, MIT, and 160+ institutions for free. Certificates and graded assignments require payment.',
    howToClaim:
      'Visit edx.org → Browse courses → Click "Enroll" → Select "Audit this course" → Start learning for free.',
    verification: ['None required'],
    tags: ['free', 'popular'],
    featured: false,
    estimatedAnnualValue: '$300+',
  },
  {
    id: 'skillshare-student',
    company: 'Skillshare',
    iconKey: 'skillshare',
    website: 'https://www.skillshare.com',
    category: 'education',
    title: 'Skillshare Student Discount',
    discount: '30% off + 1 month free',
    discountPercent: 30,
    description:
      'Access 40,000+ classes in design, business, photography, tech, and more. Get 30% off annual membership plus one free month for students.',
    howToClaim:
      'Visit skillshare.com → Start free trial → Verify student status → Apply student discount for annual plan.',
    verification: ['Student verification'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$70',
  },
  {
    id: 'chegg-study',
    company: 'Chegg',
    iconKey: 'chegg',
    website: 'https://www.chegg.com',
    category: 'education',
    title: 'Chegg Study — Student Pricing',
    discount: 'Discounted plans',
    discountPercent: 20,
    description:
      'Chegg Study helps with textbook solutions, Q&A, and expert tutoring. Students get the best rates on Chegg Study, textbook rentals, and tutoring.',
    howToClaim:
      'Visit chegg.com → Sign up with .edu email → Browse student pricing for Study and textbook rental plans.',
    verification: ['.edu email'],
    tags: ['verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$40+',
  },

  // ═══════════════════════════════════════════════════════════════
  // FINANCE & SERVICES
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'target-student',
    company: 'Target',
    iconKey: 'target',
    website: 'https://www.target.com/circle',
    category: 'finance',
    title: 'Target Circle Student Offer',
    discount: '20% off one purchase',
    discountPercent: 20,
    description:
      'Get 20% off one Target purchase and 50% off Target Circle 360 membership. Redeemable in-store and online.',
    howToClaim:
      'Download Target app → Join Target Circle → Verify student status → Apply 20% off coupon.',
    verification: ['.edu email'],
    tags: ['verified', 'limited'],
    featured: false,
    estimatedAnnualValue: '$50+',
  },
  {
    id: 'fedex-student',
    company: 'FedEx',
    iconKey: 'fedex',
    website: 'https://www.fedex.com/en-us/student-discount.html',
    category: 'finance',
    title: 'FedEx Student Discount',
    discount: 'Up to 30% off',
    discountPercent: 30,
    description:
      'Students save up to 30% on FedEx shipping services — ground, express, and international. Great for sending packages home or shipping equipment.',
    howToClaim:
      'Visit fedex.com/student → Enroll in FedEx student program → Discounts auto-apply at checkout.',
    verification: ['Student ID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$30+',
  },
  {
    id: 'state-farm-student',
    company: 'State Farm',
    iconKey: 'statefarm',
    website: 'https://www.statefarm.com',
    category: 'finance',
    title: 'State Farm Good Student Discount',
    discount: 'Up to 25% off auto insurance',
    discountPercent: 25,
    description:
      'Students with a B average or better qualify for up to 25% off auto insurance — one of the largest insurance discounts for full-time students under 25.',
    howToClaim:
      'Contact State Farm agent → Provide transcript showing B average → Discount applied to policy.',
    verification: ['GPA proof (B or higher)', 'Student ID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$200+',
  },
  {
    id: 'geico-student',
    company: 'GEICO',
    iconKey: 'geico',
    website: 'https://www.geico.com/information/aboutinsurance/student/',
    category: 'finance',
    title: 'GEICO Good Student Discount',
    discount: 'Up to 15% off',
    discountPercent: 15,
    description:
      'GEICO offers a good student discount (B average or better) of up to 15% on auto insurance premiums. Also available for students away from home.',
    howToClaim:
      'Get quote at geico.com → Select student discount → Provide academic transcripts → Discount applied.',
    verification: ['GPA proof', 'Student ID'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$150+',
  },
  {
    id: 'squarespace-student',
    company: 'Squarespace',
    iconKey: 'squarespace',
    website: 'https://www.squarespace.com',
    category: 'finance',
    title: 'Squarespace — 50% off First Year',
    discount: '50% off first year',
    discountPercent: 50,
    description:
      'Build a professional portfolio, blog, or store with Squarespace at 50% off first year. No coding needed — perfect for showcasing projects to employers.',
    howToClaim:
      'Verify via UNiDAYS → Get promo code → Apply at squarespace.com checkout.',
    verification: ['UNiDAYS'],
    tags: ['verified'],
    featured: false,
    estimatedAnnualValue: '$90',
  },
  {
    id: 'chase-student',
    company: 'Chase',
    iconKey: 'chase',
    website: 'https://www.chase.com/personal/checking/college-checking',
    category: 'finance',
    title: 'Chase College Checking',
    discount: 'No monthly fees',
    discountPercent: 100,
    description:
      'Chase College Checking has no monthly service fee for up to 5 years while you\'re in college. Access to 16,000 ATMs and 4,700 branches nationwide.',
    howToClaim:
      'Visit chase.com/college → Open a College Checking account online or in-branch → Verify college enrollment → No monthly fee for 5 years.',
    verification: ['College enrollment proof'],
    tags: ['free', 'verified', 'popular'],
    featured: false,
    estimatedAnnualValue: '$72+',
  },
  {
    id: 'turbotax-student',
    company: 'TurboTax',
    iconKey: 'turbotax',
    website: 'https://turbotax.intuit.com/personal-taxes/online/free-edition.jsp',
    category: 'finance',
    title: 'TurboTax Free Edition',
    discount: 'Free federal + state return',
    discountPercent: 100,
    description:
      'Most students qualify for TurboTax Free Edition — file federal and state taxes for free if you have simple returns (W-2 income, standard deduction).',
    howToClaim:
      'Visit turbotax.intuit.com/free → Select Free Edition → Enter your tax info → File federal and state for free.',
    verification: ['None required (for simple returns)'],
    tags: ['free', 'popular'],
    featured: false,
    estimatedAnnualValue: '$120',
  },
  {
    id: 'capitalOne-student',
    company: 'Capital One',
    iconKey: 'capitalOne',
    website: 'https://www.capitalone.com/credit-cards/journey-student-rewards/',
    category: 'finance',
    title: 'Capital One Journey Student Card',
    discount: '1% cashback + good grade bonus',
    discountPercent: 25,
    description:
      'Earn 1% cashback on all purchases, plus 1.25% when you pay on time. Good grades (GPA 3.0+) earn a statement credit bonus. No annual fee, no foreign transaction fee.',
    howToClaim:
      'Apply at capitalone.com/journey-student → No credit history required → Approved in minutes → Start building credit and earning rewards.',
    verification: ['Student enrollment', 'SSN'],
    tags: ['popular'],
    featured: false,
    estimatedAnnualValue: '$50+',
  },
  {
    id: 'shopify-student',
    company: 'Shopify',
    iconKey: 'shopify',
    website: 'https://www.shopify.com/blog/shopify-student-discount',
    category: 'finance',
    title: 'Shopify Student Discount',
    discount: 'Free 3-month trial',
    discountPercent: 100,
    description:
      'Launch your first online store with Shopify for free for 3 months. Then get 25% off your first year. Great for entrepreneurship and side-hustle projects.',
    howToClaim:
      'Visit shopify.com/student → Verify student status → Get free 3-month trial → 25% off for the first year.',
    verification: ['.edu email', 'Student ID'],
    tags: ['free', 'limited'],
    featured: false,
    estimatedAnnualValue: '$100',
  },
];

export const STATS = {
  totalBenefits: benefits.length,
  totalCategories: CATEGORIES.length - 1,
  estimatedValue: '$200,000+',
  freeCount: benefits.filter((b) => b.tags.includes('free')).length,
};
