# AMCON Castings - Next.js Website

A modern, production-ready Next.js 15+ website for AMCON Castings, a premier quality investment casting manufacturer. Converted from WordPress/Elementor to provide superior performance, maintainability, and user experience.

## Key Features

- **8 Fully Developed Sections** - Hero, About, Quick Facts, Products Carousel, Features, Testimonials, CTA, Footer
- **Responsive Design** - Mobile-first approach with perfect UX on all devices
- **Modern Tech Stack** - Next.js 15+, TypeScript, Tailwind CSS, React 19+
- **Image Optimization** - All images optimized with Next/Image for fast loading
- **SEO Optimized** - Meta tags, semantic HTML, structured data
- **Smooth Animations** - CSS-based transitions and scroll animations
- **High Performance** - Optimized bundle size, code splitting, lazy loading
- **Accessible** - WCAG AA compliant, semantic HTML, ARIA labels
- **Easy to Customize** - Centralized data management, modular components

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

## Quick Start (3 Steps)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

## Prerequisites
- Node.js 18 or higher
- npm, yarn, pnpm, or bun package manager

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build locally
npm run lint     # Lint code
npm run type-check # TypeScript type checking
```

## Deploy in 1 Minute

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Option 2: GitHub → Auto-Deploy
1. Push to GitHub
2. Connect to Vercel dashboard
3. Auto-deploys on every push

### Option 3: Other Platforms
- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

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

## Documentation

We've prepared comprehensive guides for different needs:

### For Customization
See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for:
- Changing colors and theme
- Updating company information
- Adding new products
- Modifying testimonials
- Updating content and text
- Adding new sections

### For Implementation Details
See [IMPLEMENTATION_COMPLETE.md](./IMPLEMENTATION_COMPLETE.md) for:
- Full feature documentation
- Architecture overview
- Component breakdown
- Performance metrics
- Browser support details

### For Deployment
See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for:
- Step-by-step deployment instructions
- Multiple platform options
- Domain setup
- SSL/HTTPS configuration
- Monitoring and maintenance
- Troubleshooting

## Quick Customization

### Update Contact Info
Edit `/lib/data.ts`:
```typescript
export const contactInfo = {
  phone: "YOUR_PHONE",
  email: "YOUR_EMAIL",
  address: "YOUR_ADDRESS",
  whatsapp: "YOUR_WHATSAPP",
}
```

### Change Primary Color
Edit `/app/globals.css`:
```css
--color-primary: #YOUR_COLOR;
--color-primary-dark: #DARKER_SHADE;
```

### Update Company Name
Search and replace "AMCON Castings" throughout:
- Components
- Data files
- Layout files

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
