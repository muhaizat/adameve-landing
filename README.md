# ADAMËVE Product Landing Page MVP

Versi ringkas dan pantas untuk membina **landing page dinamik** bagi setiap produk di bawah jenama **ADAMËVE**. Dibina menggunakan **Next.js + Supabase**, dengan gaya UI ala produk Apple dan butang pesanan terus ke WhatsApp.

---

## ✨ MVP Features

- ✅ 1 Page per Product (`/[slug]`)
- ✅ Data dinamik dari Supabase
- ✅ Hero Section dengan tagline dan gambar
- ✅ Features Section (highlight point utama)
- ✅ Product Gallery (scrollable)
- ✅ Order Form (nama, no telefon, kuantiti)
- ✅ WhatsApp auto-submit button
- ✅ Modern, responsive, Apple-style design

---

## 🧱 Tech Stack

| Layer     | Stack                         |
|-----------|-------------------------------|
| Frontend  | Next.js 13 (App Router)       |
| Styling   | Tailwind CSS                  |
| Backend   | Supabase (Table: `products`)  |
| Hosting   | Vercel                        |
| Animation | (Optional) Framer Motion      |

---

## 📁 Folder Structure

\`\`\`
adameve-landing-mvp/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── [slug]/
│   │   │   └── page.tsx          // Dynamic product page
│   │   └── layout.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Gallery.tsx
│   │   ├── OrderForm.tsx
│   │   └── WhatsAppButton.tsx
│   ├── lib/
│   │   └── supabase.ts           // Supabase client
│   └── styles/
│       └── globals.css
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
\`\`\`

---

## 🔧 Supabase Setup

1. **Create table** `products` (SQL di bawah)
2. **Enable Row Level Security (RLS)** – public read only
3. **Insert sample data** (product info)

---

## 🔐 .env.local

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
\`\`\`

---

## 🚀 Development

\`\`\`bash
npm install
npm run dev
\`\`\`

App will run on \`http://localhost:3000\`

---

## ✅ Deployment (Vercel)

1. Push repo to GitHub
2. Import to Vercel
3. Set environment variables
4. Deploy

---

## 📱 WhatsApp Order Format

\`\`\`txt
Hi, saya nak order [PRODUCT NAME]
Nama: [Nama Pelanggan]
No Telefon: [No Telefon]
Kuantiti: [X]
\`\`\`

Link format:
\`\`\`
https://wa.me/[nombor]?text=${encodeURIComponent(fullMessage)}
\`\`\`

---

## 📄 License

© 2025 ADAMËVE. All rights reserved.

---

**Built with ❤️ for Malaysian premium health market**
