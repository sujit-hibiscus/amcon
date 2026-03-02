# AMCON Castings - Deployment Guide

## Pre-Deployment Checklist

- [ ] All content updated in `/lib/data.ts`
- [ ] Company colors customized if needed
- [ ] Contact information updated
- [ ] Images optimized and placed
- [ ] Phone numbers and email updated
- [ ] Social media links configured
- [ ] Tested locally with `npm run dev`
- [ ] Build successful with `npm run build`
- [ ] No console errors in browser
- [ ] Responsive design tested on mobile

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest option and maintains best performance for Next.js apps.

#### Steps:

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel --prod
```

3. **Follow prompts**
- Confirm project name
- Choose your team
- Link to GitHub (optional for future auto-deploys)
- Build settings auto-detected

4. **Get your URL**
- You'll receive a URL like `https://your-project.vercel.app`
- Your site is now live!

#### Auto-Deploy with GitHub

1. Push code to GitHub
```bash
git add .
git commit -m "Deploy AMCON website"
git push origin main
```

2. Connect GitHub to Vercel
- Go to vercel.com
- Import project from GitHub
- Auto-deploy on every push

### Option 2: Netlify

#### Steps:

1. **Prepare for Netlify**
```bash
npm run build
```

2. **Create GitHub repo** (if not already)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/amcon-castings.git
git push -u origin main
```

3. **Connect to Netlify**
- Go to netlify.com
- Click "New site from Git"
- Select GitHub repository
- Build command: `npm run build`
- Publish directory: `.next`
- Deploy!

### Option 3: AWS Amplify

#### Steps:

1. **Create AWS Account** and install AWS CLI

2. **Install Amplify CLI**
```bash
npm install -g @aws-amplify/cli
```

3. **Initialize Amplify**
```bash
amplify init
```

4. **Add hosting**
```bash
amplify add hosting
```

5. **Deploy**
```bash
amplify publish
```

### Option 4: Railway.app

#### Steps:

1. **Create Account** at railway.app

2. **Connect GitHub**
- Click "Create New Project"
- Select "Deploy from GitHub repo"
- Authorize GitHub
- Select your repository

3. **Auto-configured**
- Railway auto-detects Next.js
- Sets up environment variables
- Deploys automatically

### Option 5: Render

#### Steps:

1. **Create Account** at render.com

2. **Create Web Service**
- New → Web Service
- Connect GitHub
- Select repository

3. **Configure**
- Build command: `npm run build`
- Start command: `npm start`
- Deploy!

### Option 6: Docker Deployment

#### Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### Deploy with Docker

```bash
docker build -t amcon-castings .
docker run -p 3000:3000 amcon-castings
```

Then push to Docker Hub or deploy to:
- AWS ECS
- Google Cloud Run
- Azure Container Instances
- DigitalOcean
- Heroku

### Option 7: Traditional VPS/Dedicated Server

#### Requirements:
- Node.js 18+ installed
- npm installed
- Git installed (optional)

#### Deployment Steps:

1. **Connect to Server**
```bash
ssh user@your-server-ip
```

2. **Clone or Upload Project**
```bash
git clone your-repo.git
cd amcon-castings
```

Or upload files via SFTP

3. **Install Dependencies**
```bash
npm install
```

4. **Build Project**
```bash
npm run build
```

5. **Run with PM2** (process manager)
```bash
npm install -g pm2
pm2 start "npm start" --name "amcon-castings"
pm2 save
```

6. **Setup Domain**
- Point domain DNS to server IP
- Install SSL certificate (Let's Encrypt recommended)

7. **Use Nginx as Reverse Proxy**

Create `/etc/nginx/sites-available/amcon`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it:
```bash
sudo ln -s /etc/nginx/sites-available/amcon /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Domain Setup

### Connect Custom Domain (for Vercel)

1. **Go to Vercel Dashboard**
2. Select your project
3. Settings → Domains
4. Add your domain

Then update your domain DNS:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | `cname.vercel-dns.com` |
| A | @ | `76.76.19.21` |

### For Other Platforms

1. Change DNS provider
2. Point domain A record to server IP
3. Add CNAME for www (optional)

## SSL/HTTPS Certificate

### Vercel
- Automatic with custom domain

### Netlify
- Automatic with free Let's Encrypt

### Other Platforms
```bash
# On Linux servers (free with Let's Encrypt)
sudo apt-get install certbot
sudo certbot certonly -d your-domain.com
```

## Environment Variables

If using API keys or secrets:

1. **Create `.env.local`** (not committed)
```
NEXT_PUBLIC_GA_ID=your-google-analytics-id
API_SECRET_KEY=your-secret-key
```

2. **For Vercel**: Add in Dashboard → Settings → Environment Variables

3. **For Netlify**: Add in Site Settings → Build & Deploy → Environment

## Post-Deployment Checklist

- [ ] Website loads at your domain
- [ ] All images display correctly
- [ ] Navigation links work
- [ ] Mobile responsive design confirmed
- [ ] Performance acceptable (check PageSpeed)
- [ ] No console errors in DevTools
- [ ] Contact links functional
- [ ] Social media links correct
- [ ] SEO meta tags present
- [ ] Analytics installed (if applicable)

## Performance Optimization

### Check PageSpeed
```
https://pagespeed.web.dev
```

### Monitor Performance
- Vercel Analytics (built-in)
- Lighthouse (Chrome DevTools)
- GTmetrix.com
- WebPageTest.org

## Monitoring & Maintenance

### Vercel Monitoring
- Dashboard auto-shows build history
- Shows deployment logs
- Performance metrics built-in

### Uptime Monitoring
- UptimeRobot.com (free)
- Pingdom
- Statuspage.io

## Updating After Deployment

### For Vercel with GitHub
```bash
# Make changes locally
git add .
git commit -m "Update content"
git push origin main
# Auto-deploys!
```

### For Vercel without GitHub
```bash
vercel --prod
```

### For Other Platforms
- Redeploy through platform dashboard
- Or push to Git and it auto-deploys (if configured)

## Troubleshooting Deployment

### Build Fails
```bash
# Test build locally first
npm run build
npm run dev
```

Check error messages in deployment logs.

### Site shows old content
- Clear browser cache (Ctrl+Shift+Delete)
- Check deployment completed
- Wait for CDN cache to clear (usually 5 min)

### Images not loading
- Check image paths (case-sensitive)
- Ensure `/public/images/` structure correct
- Check Next/Image configuration

### Slow Performance
- Compress images further
- Enable caching headers
- Use CDN (Vercel/Netlify handle this)
- Check build bundle size

```bash
npm run build
# Check output file sizes
```

## Cost Expectations

### Vercel
- Free tier: 100GB bandwidth/month
- Pro: $20/month per team member
- Enterprise: Custom pricing

### Netlify
- Free tier: Sufficient for most sites
- Pro: $19/month
- Enterprise: Custom

### AWS Amplify
- Free tier: 15GB storage, 5GB bandwidth
- Pay-as-you-go for overage

### Railway.app
- Free tier: $5 credit/month
- Pay-as-you-go: ~$0.29/hour per running service

### Render
- Free tier: Limited resources
- Paid: Starting from $7/month

### DigitalOcean
- Basic Droplet: $6/month
- App Platform: $5/month

## Backup Strategy

### GitHub Backup
```bash
git push origin main
```

### Database Backup (if using)
- Set up automated backups
- Store backups in cloud storage

## Security Checklist

- [ ] SSL certificate active (HTTPS)
- [ ] No sensitive data in public repo
- [ ] Environment variables protected
- [ ] Regular updates applied
- [ ] Monitoring enabled
- [ ] Backups configured
- [ ] Contact form protected (if added)

## Next Steps After Deployment

1. **Announce launch**
   - Social media
   - Email newsletter
   - Press release

2. **Setup analytics**
   - Google Analytics
   - Vercel Analytics

3. **Monitor performance**
   - Check PageSpeed scores
   - Monitor uptime
   - Track user behavior

4. **Plan updates**
   - Add blog section
   - Case studies
   - Team profiles
   - Products/services expansion

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Deployment Issues: Check provider's support docs

Your website is now ready for the world!
