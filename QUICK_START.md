# QUICK START GUIDE - AMCON Castings Next.js

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies (30 seconds)
```bash
npm install
```

### Step 2: Run Development Server (5 seconds)
```bash
npm run dev
```

### Step 3: Open in Browser (1 second)
Open [http://localhost:3000](http://localhost:3000)

---

## ✅ You're Done! Website is Running

---

## 📝 Common Tasks

### Update Contact Information
Edit `/lib/data.ts`:
```typescript
export const contactInfo = {
  phone: "+1 (555) 123-4567",          // Change this
  email: "info@amconcastings.com",     // Change this
  address: "Your address here",         // Change this
  whatsapp: "+1 (555) 123-4567",       // Change this
  socialLinks: {
    facebook: "https://facebook.com/your-page",
    twitter: "https://twitter.com/your-page",
    // ...
  },
}
```

### Add/Edit Products
Edit `/lib/data.ts`:
```typescript
export const products = [
  {
    id: 1,
    name: "Your Product",
    description: "Your description",
    image: "/images/products/your-image.jpg",
  },
  // ...
]
```

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "#YOUR_HEX_COLOR",
  "primary-dark": "#YOUR_DARK_HEX",
}
```

### Update Header Content
Edit `/lib/data.ts` - `navigationLinks` array

### Update Hero Section
Edit `components/Hero.tsx` - Modify headline, subheading, buttons

---

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Option 2: Push to GitHub & Deploy
1. Push code to GitHub
2. Go to vercel.com/new
3. Import GitHub repository
4. Click deploy (automatic from now on)

### Option 3: Other Platforms
See `DEPLOYMENT.md` for Netlify, AWS, Docker, etc.

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `/lib/data.ts` | All website content (products, testimonials, contact) |
| `tailwind.config.ts` | Colors and theme |
| `components/Header.tsx` | Navigation bar |
| `components/Hero.tsx` | Banner section |
| `components/Products.tsx` | Product carousel |
| `app/layout.tsx` | Meta tags, SEO |

---

## 🎨 Customization Checklist

- [ ] Update contact phone number
- [ ] Update contact email
- [ ] Update company address
- [ ] Update WhatsApp number
- [ ] Update social media links
- [ ] Update products list (or keep sample)
- [ ] Update testimonials (or keep samples)
- [ ] Change primary color if needed
- [ ] Update company name in footer
- [ ] Deploy to your domain

---

## 🔍 Verify Website Works

### Checklist
- [ ] Page loads without errors
- [ ] Header appears with logo and menu
- [ ] Mobile menu works (click hamburger)
- [ ] Hero section displays
- [ ] About section shows
- [ ] Quick facts cards appear
- [ ] Product carousel works (click arrows)
- [ ] Features section shows
- [ ] Testimonials display
- [ ] CTA buttons work
- [ ] Footer appears
- [ ] All links work
- [ ] Responsive on mobile

---

## 📚 Documentation

Read these files for more info:
1. **README.md** - Full documentation
2. **ARCHITECTURE.md** - Technical details
3. **DEPLOYMENT.md** - How to deploy
4. **BUILD_SUMMARY.md** - What's included

---

## ❓ Common Issues

### Issue: Port 3000 Already in Use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
# Then run: npm run dev
```

### Issue: Dependency Errors
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: Images Not Loading
- Check image path in `/lib/data.ts`
- Verify images exist in `/public/images/`
- Check browser console for errors

---

## 📞 Need Help?

1. Check `DEPLOYMENT.md` troubleshooting section
2. Read `ARCHITECTURE.md` for technical details
3. Review `README.md` for full documentation
4. Check component code for implementation details

---

## ✨ Next Steps

### Right Now
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Open http://localhost:3000
- [ ] Verify website looks good

### Today
- [ ] Update contact information
- [ ] Deploy to Vercel
- [ ] Test live website
- [ ] Share with team

### This Week
- [ ] Setup domain name
- [ ] Configure email/WhatsApp
- [ ] Add analytics (optional)
- [ ] Monitor performance

---

## 🎯 You're All Set!

The website is ready to customize and deploy.

**Next command**: `npm install`

Then: `npm run dev`

Enjoy! 🚀

---

**For detailed information, see:**
- README.md - Complete guide
- DEPLOYMENT.md - How to deploy
- ARCHITECTURE.md - Technical details
