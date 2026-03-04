# Student Perks

A curated directory of 100+ verified discounts and free benefits available to students — tech, software, developer tools, streaming, travel, fashion, fitness, education, and finance.

Built with Next.js, Tailwind v4, shadcn/ui, and a neobrutalism theme.

**Live site:** [studentperks.vercel.app](https://studentperks.vercel.app/)

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contributing

All benefit data lives in [`lib/benefits-data.ts`](lib/benefits-data.ts). Each entry looks like:

```ts
{
  id: 'github-pro',
  company: 'GitHub',
  iconKey: 'github',
  website: 'https://education.github.com/pack',
  category: 'developer',
  title: 'GitHub Student Developer Pack',
  discount: 'FREE',
  discountPercent: 100,
  description: 'Free GitHub Pro plus 100+ developer tools.',
  howToClaim: 'Apply at education.github.com/pack with a .edu email or school ID.',
  verification: ['.edu email', 'School ID'],
  tags: ['free', 'popular', 'verified'],
  featured: true,
  estimatedAnnualValue: '$200+',
}
```

**To add a new benefit:**

1. Fork the repo and create a branch
2. Add your entry to the `benefits` array in `lib/benefits-data.ts`
3. If the brand has a logo in `react-icons/si`, add it to `components/brand-icon.tsx`
4. Open a pull request — include a source link confirming the discount is active

**To update or remove a benefit:**
Open a PR with the change and a link showing the current offer (or its removal).

**Categories:** `tech` · `software` · `developer` · `streaming` · `food` · `travel` · `fashion` · `fitness` · `education` · `finance`
