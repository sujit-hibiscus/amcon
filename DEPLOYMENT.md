# AMCON Castings - Deployment Guide

## 🚀 Quick Deployment Options

This Next.js application is ready to deploy to multiple platforms. Choose the option that works best for you.

---

## 1. **Vercel (Recommended)** ⭐

Vercel is the official Next.js platform. Deployment is automatic from GitHub.

### Prerequisites
- GitHub repository with your code
- Vercel account (free: vercel.com)

### Option A: Deploy from CLI

```bash
# Install Vercel CLI globally (if not already)
npm i -g vercel

# Login to your Vercel account
vercel login

# Deploy to production
vercel --prod
```

### Option B: Deploy from GitHub

1. Push code to GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Select "Import Git Repository"
4. Choose your GitHub repository
5. Click "Deploy"
6. Wait for automatic build (1-2 minutes)

### Option C: Deploy from this Chat

1. Click **"Publish"** button in top-right corner
2. Select or create Vercel project
3. Vercel automatically deploys to production

**Benefits:**
- ✅ Automatic deployments on every GitHub push
- ✅ Preview URLs for pull requests
- ✅ Zero-config environment variables
- ✅ Free SSL/TLS certificates
- ✅ Global CDN for fast content delivery
- ✅ Automatic image optimization

---

## 2. **Netlify**

Simple Git-connected deployment.

### Steps

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select GitHub repository
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Click "Deploy site"

**Note**: May need to set `NODE_ENV=production` in environment variables.

---

## 3. **AWS Amplify**

AWS's hosting solution for Next.js apps.

### Steps

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Select GitHub repository
4. Configuration:
   - **Build command**: `npm install && npm run build`
   - **Build directory**: `.next`
5. Add environment variables (if any)
6. Deploy

---

## 4. **Self-Hosted (VPS/Dedicated Server)**

For maximum control and customization.

### Prerequisites
- Linux server (Ubuntu 22.04 recommended)
- Node.js 18+ installed
- Domain name with DNS control

### Setup Steps

```bash
# 1. Connect to your server
ssh user@your-server-ip

# 2. Update system
sudo apt update && sudo apt upgrade -y

# 3. Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 4. Clone your repository
git clone https://github.com/your-username/amcon-castings-nextjs.git
cd amcon-castings-nextjs

# 5. Install dependencies
npm install

# 6. Build the project
npm run build

# 7. Start the server
npm start
```

### For Production (Recommended with PM2)

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start the app with PM2
pm2 start npm --name "amcon-castings" -- start

# Make it auto-restart on reboot
pm2 startup
pm2 save

# View logs
pm2 logs amcon-castings
```

### Setup with Nginx Reverse Proxy

Create `/etc/nginx/sites-available/amconcastings`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL certificates (use Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/amconcastings /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Get Free SSL Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get certificate
sudo certbot certonly --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal (automatic)
sudo systemctl enable certbot.timer
```

---

## 5. **Docker Deployment**

For containerized deployment.

### Create Dockerfile

Create `/Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built application from builder
COPY --from=builder /app/.next ./.next

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start application
CMD ["npm", "start"]
```

### Create .dockerignore

Create `/.dockerignore`:

```
node_modules
npm-debug.log
.git
.gitignore
.env.local
.next
```

### Build and Run Docker Image

```bash
# Build image
docker build -t amcon-castings:latest .

# Run container
docker run -p 3000:3000 amcon-castings:latest

# Or with Docker Compose:
docker-compose up -d
```

### Create docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

---

## 6. **Google Cloud Run**

Serverless container deployment.

### Steps

1. Ensure you have the Dockerfile above
2. Install Google Cloud CLI: `gcloud init`
3. Deploy:

```bash
gcloud run deploy amcon-castings \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## Environment Variables Setup

For production deployment, set these environment variables:

### Vercel/Netlify
1. Go to project settings
2. Add environment variables
3. Set values and redeploy

### Self-Hosted
Create `.env.production.local`:

```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
NEXT_PUBLIC_WHATSAPP_NUMBER=+1555123456
```

---

## Pre-Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] `npm install` runs without errors
- [ ] `npm run build` completes successfully
- [ ] `npm run dev` works locally
- [ ] All links use correct URLs
- [ ] Contact information updated in `/lib/data.ts`
- [ ] WhatsApp number is correct
- [ ] Email addresses are correct
- [ ] Social media links are correct
- [ ] Meta tags in `app/layout.tsx` are updated
- [ ] No console errors in dev tools
- [ ] Mobile responsive design verified
- [ ] Images load correctly

---

## Post-Deployment Steps

### 1. Verify Deployment
```bash
# Check if site is accessible
curl https://yourdomain.com

# Check HTTP response code
curl -I https://yourdomain.com
# Should return: 200 OK
```

### 2. Test Functionality
- [ ] Verify all pages load
- [ ] Check responsive design on mobile
- [ ] Test all links work
- [ ] Test WhatsApp button (opens WhatsApp)
- [ ] Test email links (opens email client)
- [ ] Verify images load
- [ ] Test carousel on Products section
- [ ] Check animations work

### 3. Setup Monitoring (Optional)

#### Vercel
- Built-in analytics dashboard
- Performance monitoring included

#### Self-Hosted
Install Uptime monitoring:
```bash
npm install -g pm2-monitoring
pm2 monitoring
```

### 4. Setup CDN (Optional)

#### Cloudflare (Free)
1. Add domain to [cloudflare.com](https://cloudflare.com)
2. Update DNS to Cloudflare
3. Enable "Auto Minify" and caching
4. Instant free SSL/TLS

---

## Troubleshooting

### Issue: Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm start
```

### Issue: Images Not Loading
- Check public folder structure
- Verify image paths in components
- Check Next.js Image optimization settings

### Issue: Slow Performance
- Enable CDN (Cloudflare/Vercel Edge)
- Check image optimization
- Enable database caching
- Use monitoring tools to identify bottlenecks

---

## Scaling & Optimization

### As Traffic Grows

1. **Database** (if added later)
   - Use managed database (AWS RDS, Supabase)
   - Add connection pooling

2. **Caching**
   - Implement Redis cache
   - Use CDN cache headers

3. **Monitoring**
   - Setup error tracking (Sentry, LogRocket)
   - Monitor performance (Datadog, New Relic)

4. **Load Balancing**
   - Use load balancer if self-hosted
   - Vercel automatically handles this

---

## Recommended Deployment Summary

| Platform | Ease | Cost | Features | Recommendation |
|----------|------|------|----------|---|
| **Vercel** | ⭐⭐⭐⭐⭐ | Free (then $20+) | Best Next.js support, auto-deploy, CDN | **BEST** |
| **Netlify** | ⭐⭐⭐⭐ | Free (then $19+) | Git integration, simple, great UX | Great |
| **AWS Amplify** | ⭐⭐⭐ | Free tier, then pay-as-you-go | Powerful, AWS ecosystem | Good |
| **Docker** | ⭐⭐ | Depends on host | Full control, portable | Flexible |
| **Self-Hosted** | ⭐ | $5-50+/month | Maximum control | Experienced users |

**For most users**: Use **Vercel** - it's optimized for Next.js and has the easiest setup.

---

## Need Help?

- **Vercel Support**: https://vercel.com/help
- **Next.js Docs**: https://nextjs.org/docs
- **Deployment Docs**: https://nextjs.org/docs/deployment

---

**Status**: ✅ Ready to deploy to production!
