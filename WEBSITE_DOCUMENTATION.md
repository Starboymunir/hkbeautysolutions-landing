# Beauty Solutions (HK) Limited - Website Technical Documentation

## Overview
This document contains all technical details needed to manage, update, or transfer the website.

---

## 1. DOMAIN MANAGEMENT

**Domain Name:** hkbeautysolutions.com

**Domain Registrar:** Google Domains (via Squarespace)
- **Login URL:** https://domains.squarespace.com/
- **Account:** (Olga's Google/Squarespace account)

**DNS Settings:**
The domain points to Vercel's servers. Current DNS records should include:
- A Record pointing to Vercel's IP
- CNAME for `www` subdomain pointing to Vercel

---

## 2. WEBSITE HOSTING

**Platform:** Vercel (https://vercel.com)

**Project URL:** https://vercel.com/starboymunir/hkbeautysolutions-landing
*(Or check the Vercel dashboard for exact project name)*

**Live Website:** https://hkbeautysolutions.com

**Vercel Account:** 
- Login via GitHub account: https://github.com/Starboymunir
- Or email used to create the Vercel account

**How Deployment Works:**
- Every time code is pushed to GitHub, Vercel automatically rebuilds and deploys the website
- No manual deployment needed
- Takes approximately 1-2 minutes for changes to go live

---

## 3. CODE REPOSITORY

**Platform:** GitHub

**Repository URL:** https://github.com/Starboymunir/hkbeautysolutions-landing

**Account:** Starboymunir on GitHub

**How to Access:**
1. Go to https://github.com/Starboymunir/hkbeautysolutions-landing
2. Login with the GitHub account credentials
3. All website code is stored here

**Local Development Files Location:**
`C:\Users\Munir Yusuf\Desktop\landing-page\hkbeautysolutions-landing`

---

## 4. TECHNOLOGY STACK

| Component | Technology | Version |
|-----------|------------|---------|
| Framework | Next.js | 16.1.1 |
| Language | TypeScript | Latest |
| Styling | Tailwind CSS | v4 |
| UI Library | React | 19.2.3 |
| Package Manager | npm | - |
| Node.js | Required | v18+ |

**Key Files:**
- `app/page.tsx` - Main website page (all sections)
- `app/layout.tsx` - Site layout, metadata, favicon
- `app/globals.css` - Global styles
- `public/` - Images, logos, and static assets
- `tailwind.config.ts` - Tailwind configuration

---

## 5. CONTACT FORM EMAIL SERVICE

**Service:** Web3Forms (https://web3forms.com)

**Access Key:** `fb5f8a62-d001-4fb0-bdfb-d98005d9d2a5`

**Recipient Email:** info@hkbeautysolutions.com

**How It Works:**
- When someone submits the contact form, an email is sent to info@hkbeautysolutions.com
- Free service, no monthly fees
- Dashboard: https://web3forms.com/

**To Change Recipient Email:**
1. Go to https://web3forms.com
2. Create a new access key with the new email
3. Update the key in `app/page.tsx` (search for the current access key)

---

## 6. HOW TO MAKE CHANGES TO THE WEBSITE

### Option A: Using a Developer
1. Give them access to the GitHub repository
2. They clone the code, make changes, and push to GitHub
3. Vercel automatically deploys

### Option B: Direct Code Edit on GitHub
1. Go to the repository: https://github.com/Starboymunir/hkbeautysolutions-landing
2. Navigate to the file you want to edit
3. Click the pencil icon to edit
4. Make changes and commit
5. Vercel will auto-deploy

### Option C: Using VS Code (Recommended for Developers)
1. Clone the repository:
   ```
   git clone https://github.com/Starboymunir/hkbeautysolutions-landing.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run locally:
   ```
   npm run dev
   ```
4. Make changes, then push:
   ```
   git add -A
   git commit -m "Description of changes"
   git push origin main
   ```

---

## 7. IMPORTANT ACCOUNTS SUMMARY

| Service | URL | Purpose |
|---------|-----|---------|
| Squarespace/Google Domains | domains.squarespace.com | Domain management |
| Vercel | vercel.com | Website hosting |
| GitHub | github.com/Starboymunir | Code storage |
| Web3Forms | web3forms.com | Contact form emails |

---

## 8. IMAGES & ASSETS

All images are stored in the `public/` folder:
- `/public/new logo.png` - Company logo
- `/public/Photo of brands/` - Brand photos (Rebel Tattoos, Colorfit, Coolboxbeauty)
- `/public/services/` - Service images
- `/public/AI service/` - AI service photos
- `/public/flags/` - Country flag icons

---

## 9. SSL/HTTPS

- **SSL Certificate:** Provided automatically by Vercel (free)
- **Auto-renews:** Yes, managed by Vercel
- No action required

---

## 10. BACKUP & RECOVERY

**Code Backup:**
- All code is stored on GitHub with full version history
- Every commit is saved and can be reverted if needed

**To Restore Previous Version:**
1. Go to GitHub repository
2. Click on "Commits"
3. Find the version you want
4. Click "Revert" or contact developer

---

## 11. COSTS

| Service | Cost |
|---------|------|
| Domain (Squarespace) | ~$12-20/year |
| Vercel Hosting | FREE (Hobby plan) |
| Web3Forms | FREE |
| GitHub | FREE |
| SSL Certificate | FREE (via Vercel) |

**Total Annual Cost:** ~$12-20 (domain only)

---

## 12. SUPPORT CONTACTS

**Vercel Support:** https://vercel.com/support
**GitHub Support:** https://support.github.com
**Web3Forms Support:** https://web3forms.com/

---

## 13. TRANSFER CHECKLIST

If transferring to a new developer or agency:

- [ ] Transfer GitHub repository ownership or add collaborator
- [ ] Add them to Vercel project team
- [ ] Share this documentation
- [ ] Ensure they have domain DNS access if needed
- [ ] Share Web3Forms access key

---

*Document created: January 16, 2026*
*Website Developer: Munir Yusuf*
