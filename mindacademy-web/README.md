# Mind Power Academy — Modern React Web Application

A modern, fast, responsive web application for **Mind Power Academy**, converted from the original static PHP/Hostinger site to **React.js + Vite + Tailwind CSS + Framer Motion**.

Hosted 100% free on **Vercel** with free email handling via **EmailJS**.

---

## 🚀 Quick Start (Local Development)

```bash
cd mindacademy-web
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build

```bash
npm run build
```

The output will be in the `dist/` directory, ready to deploy.

---

## 🌐 Deploy to Vercel (100% Free)

1. Push this repository to **GitHub** (public or private).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New Project"** and import the `mindacademy-web` repo.
4. Framework Preset will auto-detect **Vite**.
5. Click **"Deploy"**.
6. That's it! Your site will be live with free global CDN and automatic SSL certificate.
7. *(Optional)* Add your custom domain (e.g. `mindpoweracademy.in`) in **Project Settings > Domains** completely free!

---

## 📧 Free Email Service Setup (EmailJS)

To receive inquiries submitted through the contact form directly to your email without any paid server:

1. Create a free account at [EmailJS](https://www.emailjs.com/) (200 free emails/month).
2. Add an **Email Service** (e.g. connect your Gmail `mindpoweracademy77@gmail.com`).
3. Create an **Email Template** with fields:
   - `{{name}}`
   - `{{email}}`
   - `{{phone}}`
   - `{{course}}`
   - `{{message}}`
4. Copy your **Service ID**, **Template ID**, and **Public Key** from EmailJS dashboard.
5. In [src/components/Contact.jsx](file:///e:/MindAcademy/mindacademy-web/src/components/Contact.jsx):
   ```javascript
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
   ```

---

## 🖼️ Adding Photos & Assets Later

When your friend shares the original high-res photos and brand assets:
- Drop static image files into `public/assets/` or `src/assets/`.
- Replace existing placeholder paths in:
  - `Hero.jsx` (Hero banner image)
  - `About.jsx` (Founder & team photos)
  - `Courses.jsx` (Course thumbnail images)
  - `Navbar.jsx` & `Footer.jsx` (Academy logo)
