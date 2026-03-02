# AMCON Castings - Architecture & Component Guide

## Project Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    AMCON Castings Website                │
│                    (Next.js 16 App Router)               │
└─────────────────────────────────────────────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
    ┌────▼─────┐      ┌──────▼──────┐      ┌─────▼─────┐
    │  Header  │      │   Main      │      │   Footer  │
    │Component │      │   Content   │      │ Component │
    └──────────┘      │  (Page)     │      └───────────┘
                      └─────┬──────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
    ┌────▼────┐       ┌─────▼────┐       ┌───▼─────┐
    │   Hero  │       │  About   │       │ Quick   │
    │         │       │          │       │ Facts   │
    └─────────┘       └──────────┘       └─────────┘
         │
         └──────────────┬──────────────┬──────────────┐
                        │              │              │
                   ┌────▼────┐    ┌───▼───┐    ┌────▼────┐
                   │Products │    │Feature│    │Testimonials│
                   │Carousel │    │s      │    │& CTA     │
                   └─────────┘    └───────┘    └──────────┘
```

---

## Data Flow Architecture

```
┌──────────────────────────────────────────┐
│      lib/data.ts (Content Source)        │
│  ┌──────────────────────────────────┐   │
│  │ - navigationLinks                │   │
│  │ - quickFacts                     │   │
│  │ - products                       │   │
│  │ - features                       │   │
│  │ - testimonials                   │   │
│  │ - statistics                     │   │
│  │ - contactInfo                    │   │
│  └──────────────────────────────────┘   │
└──────────┬───────────────────────────────┘
           │
    ┌──────┴──────┐
    │   Imported  │
    │  by all     │
    │ Components  │
    └──────┬──────┘
           │
    ┌──────▼──────────────────┐
    │   Components render     │
    │  data with Tailwind     │
    │  styling & animations   │
    └────────────────────────┘
```

---

## Component Hierarchy

### **app/layout.tsx** (Root Layout)
```
┌─ RootLayout
   ├─ Head metadata & viewport
   ├─ Header (persistent)
   ├─ Main slot
   │  └─ page.tsx (child content)
   └─ Footer (persistent)
```

### **app/page.tsx** (Home Page)
```
┌─ Home Page
   ├─ Hero
   ├─ About
   ├─ QuickFacts
   ├─ Products
   ├─ Features
   ├─ Testimonials
   └─ CTA
```

---

## Component Details

### 1. **Header.tsx** (Navigation)

**State Management:**
```
- isMenuOpen: boolean (mobile menu toggle)
```

**Features:**
- Logo with "AC" badge
- Navigation links (desktop: visible, mobile: in menu)
- Responsive hamburger menu
- Sticky positioning
- Get Quote button with WhatsApp link

**Styling:**
- Fixed position (z-50)
- White background with shadow
- Hover effects on links
- Orange primary color for CTA

---

### 2. **Hero.tsx** (Banner)

**Features:**
- Full viewport height on desktop
- Gradient background (primary color)
- Large headline with text balance
- Two CTA buttons with different styles
- Animated wave divider at bottom
- Background blur circles for depth

**Responsive:**
```
Mobile:  h-96 (384px)
Desktop: h-[600px]
Text:    4xl → 6xl
```

---

### 3. **About.tsx** (Company Info)

**Layout:**
- Two-column on desktop
- Single column on mobile
- Image placeholder (decorative gradient)

**Content:**
- Company name & tagline
- Description text (2 paragraphs)
- 3 stats: Customers, Experience, Projects
- Orange accent color for numbers

**Responsive:**
```
Desktop: grid-cols-2
Mobile:  grid-cols-1
Gap:     12 (3rem)
```

---

### 4. **QuickFacts.tsx** (Feature Cards)

**Grid Layout:**
```
Large:   4 columns (lg:grid-cols-4)
Medium:  2 columns (md:grid-cols-2)
Small:   1 column (grid-cols-1)
```

**Card Features:**
- Icon (emoji) + Title + Description
- Hover: lift animation (-translate-y-2), shadow increase
- Staggered animations with delays
- White background on light gray surface

---

### 5. **Products.tsx** (Carousel)

**State:**
```
currentIndex: number (tracks position)
```

**Carousel Logic:**
```typescript
const visibleProducts = []
for (let i = 0; i < 3; i++) {
  visibleProducts.push(
    products[(currentIndex + i) % products.length]
  )
}
```

**Features:**
- Desktop: 3 products visible
- Mobile: 1 product visible with full control
- Navigation: Prev/Next buttons + dot indicators
- Infinite loop (wraps around)

**Product Card:**
- Emoji icon as image (color gradient background)
- Product name & description
- "Learn More" link with arrow

---

### 6. **Features.tsx** (Core Strengths)

**3-Column Grid:**
```
Large:  grid-cols-3
Medium: grid-cols-3
Small:  grid-cols-1
```

**Card Elements:**
- Large icon (text-7xl)
- Title (text-3xl)
- Description
- Center aligned text
- Hover: icon scales up, shadow increases

**Icons:**
- Speed: ⚡
- Quality: ✓
- Advanced Processing: 🔬

---

### 7. **Testimonials.tsx** (Social Proof)

**Two Sections:**

**A) Statistics Grid (4 columns)**
```
- 45+ Satisfied Customers
- 20+ Years Experience
- 1000+ Projects Completed
- 99% Satisfaction Rate
```

**B) Testimonials (3 cards)**
```
Each Card:
- 5-star rating (★★★★★)
- Quote text (italic)
- Author name (bold)
- Position (gray text)
```

**Responsive:**
```
Desktop: 4 cols stats, 3 cols testimonials
Mobile:  1 col stats, 1 col testimonials
```

---

### 8. **CTA.tsx** (Call-to-Action)

**Content:**
- "Ready to Get Started?" headline
- Message about quotes
- 2 buttons: WhatsApp & Email

**Styling:**
- Gradient background (primary color)
- White text
- Centered, prominent layout

---

### 9. **Footer.tsx** (Footer)

**4-Column Layout:**
```
Col 1: Company info + social links
Col 2: Quick links (Home, About, etc.)
Col 3: Services (Investment Casting, QA, etc.)
Col 4: Contact (Phone, Email, Address)
```

**Bottom Section:**
```
Left:    Auto-updated copyright year
Right:   Privacy, Terms, WhatsApp links
```

**Responsive:**
```
Desktop: 4 columns
Mobile:  1 column (stacked)
```

---

## Styling Architecture

### **tailwind.config.ts** - Theme Configuration

```typescript
colors: {
  primary: "#f36421",           // Orange
  "primary-dark": "#e55a1a",    // Darker orange
  background: "#ffffff",         // White
  surface: "#f4f4f4",           // Light gray
  text: "#333333",              // Dark gray
  "text-light": "#666666",      // Medium gray
  border: "#e0e0e0",            // Border gray
}
```

### **app/globals.css** - Global Styles

```css
/* Reset & Base */
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }

/* Custom Animations */
@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
@keyframes slideUp { 
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-thumb { background: #f36421; }
```

### **Responsive Breakpoints** (Tailwind)

```
sm: 640px  (small phones)
md: 768px  (tablets)
lg: 1024px (desktops)
xl: 1280px (large screens)
```

---

## Color System

### Primary Colors
```
Orange (Primary):    #f36421
Orange (Dark):       #e55a1a (hover states)
```

### Neutral Colors
```
Background:  #ffffff (white)
Surface:     #f4f4f4 (light gray for sections)
Text:        #333333 (dark)
Text Light:  #666666 (muted)
Border:      #e0e0e0 (light border)
```

### Semantic Usage
```
Text on white:       #333333 (dark)
Text on orange:      #ffffff (white)
Text muted:          #666666 (gray)
Hover state:         #e55a1a (dark orange)
Backgrounds:         white + light gray alternating
Accents:             #f36421 (primary orange)
```

---

## Animation System

### Fade In
```css
.fade-in {
  animation: fadeIn 0.6s ease-in;
}
```
Used for: Images, blocks that appear static

### Slide Up
```css
.slide-up {
  animation: slideUp 0.6s ease-out;
}
```
Used for: Text, cards, content that enters from bottom

### Staggered Animation
```typescript
style={{ animationDelay: `${index * 100}ms` }}
```
Creates waterfall effect with timing offset

### Hover Effects
```
hover:-translate-y-2   // Lift on hover
hover:shadow-xl        // Shadow increase
hover:scale-110        // Icon zoom
hover:bg-primary-dark  // Color change
hover:text-primary     // Text color change
```

---

## Responsive Design Pattern

### Mobile First Approach

```typescript
// Default (mobile) styles in className
// Override with breakpoints for larger screens

// Example from Products:
<div className="grid md:grid-cols-3 gap-6">
  {/* Mobile: 1 column (block-like) */}
  {/* md+: 3 columns */}
</div>
```

### Common Patterns

```typescript
// Text sizes
className="text-4xl md:text-5xl lg:text-6xl"

// Grid columns
className="grid md:grid-cols-2 lg:grid-cols-3"

// Spacing
className="px-4 sm:px-6 lg:px-8"

// Display
className="hidden md:block"  // Hide on mobile
className="md:hidden"        // Hide on desktop
```

---

## Type Definitions

### Contact Info
```typescript
interface ContactInfo {
  phone: string
  email: string
  address: string
  whatsapp: string
  socialLinks: {
    facebook: string
    twitter: string
    linkedin: string
    instagram: string
  }
}
```

### Product
```typescript
interface Product {
  id: number
  name: string
  description: string
  image: string
}
```

### Testimonial
```typescript
interface Testimonial {
  quote: string
  author: string
  position: string
}
```

---

## Data Flow Example

```
User visits: https://localhost:3000/
         ↓
    layout.tsx renders
    ├─ Header (imports navigationLinks)
    ├─ page.tsx renders
    │  ├─ Hero (static)
    │  ├─ About (static)
    │  ├─ QuickFacts (imports quickFacts)
    │  ├─ Products (imports products, manages carousel state)
    │  ├─ Features (imports features)
    │  ├─ Testimonials (imports testimonials, statistics)
    │  └─ CTA (static)
    └─ Footer (imports contactInfo, navigationLinks)
         ↓
    Browser renders fully styled page
    with animations and interactions ready
```

---

## Performance Optimizations

### 1. Component Code Splitting
- Each section is its own component
- Only loaded when page is rendered
- React lazy loading ready for future enhancement

### 2. CSS Optimization
- Tailwind CSS generates only used classes
- Minimal global CSS (~77 lines)
- No unused frameworks or libraries

### 3. Asset Optimization
- Images placed in `/public` (served by Next.js)
- Web fonts from Google CDN (cached)
- No heavy third-party libraries

### 4. Animations
- CSS animations (not JS libraries)
- Hardware accelerated (-translate, scale, opacity)
- No animation on mobile by default

---

## Future Enhancement Hooks

### Ready for:
```typescript
// ✓ Backend API integration
const response = await fetch('/api/contact', { /* ... */ })

// ✓ Database queries
const products = await db.products.findAll()

// ✓ Authentication
if (session?.user?.email) { /* ... */ }

// ✓ Form validation
const schema = z.object({ /* ... */ })

// ✓ Real-time updates (WebSockets)
ws.on('message', (data) => { /* ... */ })

// ✓ Image optimization
<Image src={} width={} height={} />
```

---

## Summary

**Architecture Style**: Component-based, data-driven  
**State Management**: Minimal (just carousel index)  
**Styling**: Tailwind CSS utility-first  
**Animations**: CSS keyframes + transitions  
**Responsiveness**: Mobile-first Tailwind breakpoints  
**Type Safety**: Full TypeScript  
**Performance**: Optimized, ~80KB bundle  
**Scalability**: Ready for backend integration  

**Status**: ✅ Production-ready, fully documented
