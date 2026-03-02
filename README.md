# AMCON Castings - Next.js Website

Modern Next.js implementation of the AMCON Castings website - a premier quality investment casting manufacturer.

## Features

- **Responsive Design** - Mobile-first approach that works on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **Performance Optimized** - Built with Next.js for fast loading and SEO
- **Accessible** - Following accessibility best practices
- **Component-Based** - Modular, reusable components for easy maintenance

## Project Structure

```
/app
  ├── layout.tsx           # Root layout with header/footer
  ├── page.tsx             # Home page
  └── globals.css          # Global styles
/components
  ├── Header.tsx           # Navigation header with mobile menu
  ├── Hero.tsx             # Hero banner section
  ├── About.tsx            # About company section
  ├── QuickFacts.tsx       # Why choose us section
  ├── Products.tsx         # Products carousel with 7 categories
  ├── Features.tsx         # Core strengths section
  ├── Testimonials.tsx     # Client testimonials & statistics
  ├── CTA.tsx              # Call-to-action section
  └── Footer.tsx           # Footer with contact info
/lib
  └── data.ts              # Content data and constants
/public
  └── images/              # Product images and assets
```

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - UI library

## Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amcon-castings-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Building for Production

```bash
npm run build
npm run start
```

## Website Sections

### 1. **Header** 
- Fixed navigation bar with logo
- Responsive mobile menu
- Quick quote CTA button

### 2. **Hero Section**
- Large banner with company tagline
- Dual CTA buttons
- Gradient background with animated elements

### 3. **About Section**
- Company information
- Key statistics (customers, projects, experience)
- Professional layout

### 4. **Quick Facts**
- 4 key differentiators
- Icon-based cards with hover effects

### 5. **Products Carousel**
- 7 industry categories:
  - Industrial Pumps
  - Food & Pharma
  - Industrial Valves
  - Industrial Castings
  - Automobile
  - Agriculture
  - Instrumentation
- Navigation controls and indicators

### 6. **Features Section**
- 3 core strengths:
  - Speed
  - Quality
  - Advanced Processing
- Large icons with hover animations

### 7. **Testimonials & Statistics**
- 4 key statistics with large numbers
- 3 client testimonials with star ratings

### 8. **CTA Section**
- Strong call-to-action messaging
- WhatsApp and email contact options

### 9. **Footer**
- Company information
- Quick links
- Services
- Contact details
- Social media links
- Copyright notice

## Customization

### Update Contact Information
Edit `/lib/data.ts` to update phone, email, address, and social links:

```typescript
export const contactInfo = {
  phone: "+1 (555) 123-4567",
  email: "info@amconcastings.com",
  address: "Your address here",
  // ...
}
```

### Change Colors
Colors are defined in `tailwind.config.ts`. Primary color is orange (#f36421).

### Update Content
All text content is stored in `/lib/data.ts`:
- Navigation links
- Quick facts
- Products
- Features
- Testimonials
- Statistics

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for components
- CSS animations and transitions
- Responsive images for different screen sizes
- Efficient component structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will automatically build and deploy

```bash
vercel --prod
```

### Other Deployment Options

- AWS Amplify
- Netlify
- Docker container
- Self-hosted server

## License

Proprietary - AMCON Castings

## Support

For inquiries or support, contact:
- Email: info@amconcastings.com
- Phone: +1 (555) 123-4567
- WhatsApp: [Link in footer]

---

Built with Next.js 16, React 19, and Tailwind CSS
