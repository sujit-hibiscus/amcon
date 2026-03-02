# AMCON Castings - Customization Guide

## Quick Reference for Common Tasks

### 1. Change Website Colors

#### Primary Orange Color
**File**: `/app/globals.css`
```css
/* Find and change */
--color-primary: #f36421;
--color-primary-dark: #d45419;
```

Replace with your desired color (e.g., `#2563eb` for blue, `#dc2626` for red)

**Also update**: `/tailwind.config.ts`
```typescript
colors: {
  primary: '#YOUR_COLOR',
  'primary-dark': '#DARKER_SHADE',
}
```

### 2. Update Company Information

**File**: `/lib/data.ts`

#### Change Contact Info
```typescript
export const contactInfo = {
  phone: "YOUR_PHONE_NUMBER",
  email: "YOUR_EMAIL@company.com",
  address: "Your Address",
  whatsapp: "YOUR_WHATSAPP_NUMBER",
  socialLinks: {
    facebook: "YOUR_FACEBOOK_URL",
    twitter: "YOUR_TWITTER_URL",
    linkedin: "YOUR_LINKEDIN_URL",
    instagram: "YOUR_INSTAGRAM_URL",
  },
}
```

### 3. Update Navigation Links

**File**: `/lib/data.ts`
```typescript
export const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
  // Add new links here
]
```

### 4. Add New Products

**Step 1**: Add to `/lib/data.ts`
```typescript
export const products = [
  // ... existing products
  {
    id: 8,
    name: "Your New Product",
    description: "Product description here",
    image: "/images/products/your-product.jpg",
  },
]
```

**Step 2**: Add image at `/public/images/products/your-product.jpg`

### 5. Update Statistics

**File**: `/lib/data.ts`
```typescript
export const statistics = {
  customers: "45+",        // Change this
  experience: "20+ Years", // Change this
  projects: "1000+",       // Change this
  satisfaction: "99%",     // Change this
}
```

### 6. Update Company About Text

**File**: `/components/About.tsx`

Find the paragraph sections and update:
```tsx
<p className="text-lg text-text-light mb-6 leading-relaxed">
  Your new company description here...
</p>
```

### 7. Update Testimonials

**File**: `/lib/data.ts`
```typescript
export const testimonials = [
  {
    quote: "Client quote here...",
    author: "Client Name",
    position: "Client Title/Company",
  },
  // Add more testimonials
]
```

### 8. Update Features/Strengths

**File**: `/lib/data.ts`
```typescript
export const features = [
  {
    title: "Feature Title",
    description: "Feature description...",
    icon: "⚡", // Use emoji or update component to use icons
  },
]
```

### 9. Update Quick Facts

**File**: `/lib/data.ts`
```typescript
export const quickFacts = [
  {
    title: "Fact Title",
    description: "Fact description...",
    icon: "⚙️",
  },
]
```

### 10. Replace Hero Banner Image

**Step 1**: Add new image to `/public/images/hero-banner.jpg`

**Step 2**: Update `/components/Hero.tsx` if needed:
```tsx
<Image
  src="/images/hero-banner.jpg"  // Change path here
  alt="Your alt text"
  // ... rest of props
/>
```

### 11. Change Website Title & Meta Description

**File**: `/app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: "Your Company Name - Your Tagline",
  description: "Your meta description here for SEO",
  keywords: "your, keywords, here",
}
```

### 12. Update Footer Information

**File**: `/components/Footer.tsx`
- Update company name (search for "AMCON Castings")
- Update social media links
- Update services list
- Update contact information

### 13. Add a New Section

**Step 1**: Create new component in `/components/`
```typescript
export default function NewSection() {
  return (
    <section id="new-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Your content */}
    </section>
  )
}
```

**Step 2**: Import and add to `/app/page.tsx`
```typescript
import NewSection from "@/components/NewSection"

export default function Home() {
  return (
    <>
      {/* ... existing sections */}
      <NewSection />
    </>
  )
}
```

### 14. Change Font

**File**: `/app/layout.tsx`
```typescript
// Change from Inter to your font
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

**File**: `/tailwind.config.ts`
```typescript
fontFamily: {
  sans: ['var(--font-your-font)'],  // Update this
}
```

### 15. Update WhatsApp Link

Replace all instances of `+1555123456` with your WhatsApp number:
- `/components/Header.tsx`
- `/components/Hero.tsx`
- `/components/CTA.tsx`
- `/lib/data.ts`

Use format: `+[COUNTRY_CODE][PHONE_NUMBER]` (e.g., `+919876543210`)

## Styling Customization

### Change Button Style

**File**: `/components/Header.tsx` and other component files
```tsx
className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark"
```

Options:
- `rounded-lg` → `rounded-full` (more rounded)
- `rounded-none` (no radius)
- Adjust `px-6 py-2` for padding

### Change Section Background

```tsx
<section className="bg-white">  {/* Change to bg-surface, bg-primary, etc */}
```

Available colors: `white`, `surface`, `primary`, `primary-dark`, `text`, `black`

### Change Spacing

Replace spacing values:
- `py-20` (vertical padding) → `py-10`, `py-16`, `py-32`
- `px-4` (horizontal padding) → `px-6`, `px-8`
- `gap-8` (grid gap) → `gap-4`, `gap-6`, `gap-12`

## Adding Email Integration

Update `/lib/data.ts` contact email and then integrate with a service like:
- Resend
- SendGrid
- Mailgun
- EmailJS

## Adding Analytics

Install Google Analytics:
```bash
npm install @next/third-parties
```

Update `/app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout() {
  return (
    <html>
      <body>
        {/* Your content */}
        <GoogleAnalytics gaId="YOUR_GA_ID" />
      </body>
    </html>
  )
}
```

## Common CSS Classes Reference

- **Padding**: `p-4`, `p-8`, `px-6`, `py-10`
- **Margin**: `m-4`, `mx-auto`, `my-8`, `mb-6`
- **Colors**: `text-white`, `bg-primary`, `text-text-light`
- **Sizing**: `w-full`, `h-screen`, `max-w-7xl`
- **Display**: `flex`, `grid`, `block`, `hidden`
- **Responsive**: `md:grid-cols-2`, `lg:text-xl`, `sm:px-6`

## Deployment Steps

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Other Platforms
Push to GitHub and connect to your hosting platform to auto-deploy on changes.

## Need Help?

- Check `/IMPLEMENTATION_COMPLETE.md` for full feature documentation
- Review component files for implementation examples
- Check Tailwind CSS docs: https://tailwindcss.com
- Check Next.js docs: https://nextjs.org/docs

## Development Workflow

1. Make changes to files
2. Dev server auto-refreshes (hot module replacement)
3. Test in browser at http://localhost:3000
4. Commit changes to Git
5. Deploy when ready

```bash
npm run dev  # Start dev server
npm run build  # Build for production
npm start  # Run production build locally
```

## Troubleshooting

### Images not showing?
- Check path: `/images/products/image-name.jpg` (case-sensitive)
- Ensure file exists in `/public/` directory
- Clear browser cache (Ctrl+Shift+Delete)

### Styles not applying?
- Check Tailwind class spelling
- Ensure PostCSS is running
- Try `npm run dev` again

### Navigation not working?
- Check href matches section id (e.g., href="#about" with id="about")
- Ensure smooth scrolling is enabled

Enjoy your customized website!
