# 🏋️‍♂️ Flex Fusion — Full-Stack Gym & Fitness Website

**Flex Fusion** is a modern, full-featured, responsive gym website built for fitness brands offering specialized programs like CrossFit, Zumba, MMA, and more. It supports dynamic program pages, user authentication, mock payments, class booking, and a complete admin system — all with a sleek, dark-themed UI.

---

## 🌐 Live Preview

🔗 [Visit Flex Fusion Live](https://your-live-site-url.vercel.app)

---

## 🛠️ Tech Stack

| Frontend       | Backend         | Auth/DB         | Payments      | Deployment   |
|----------------|------------------|------------------|----------------|---------------|
| React + Vite   | Supabase         | Supabase Auth & DB | Stripe (Test) | Vercel        |
| Tailwind CSS   | Supabase API     | JWT Sessions     | Razorpay (optional) | GitHub Actions |

---

## 🎨 Features Overview

### ✅ Frontend
- Fully responsive dark UI with neon accents
- Sticky navbar with mobile hamburger menu
- Hero section with animated CTAs
- CrossFit, Zumba, MMA detail pages
- About Us with mission & timeline
- Contact form with map & socials
- Testimonials carousel
- Membership pricing section
- Custom 404 page

### 🔐 Authentication (Supabase)
- Email/password signup & login
- Protected dashboard routes
- Role-based access (User/Admin)

### 💳 Payments (Stripe Test Mode)
- Monthly ₹999 | Quarterly ₹2,499 | Yearly ₹8,499
- Purchase membership plans
- Payment confirmation pages

### 📅 User Dashboard
- Profile management
- Class booking view
- Payment history

### 🧑‍💼 Admin Dashboard
- Manage users, trainers, plans
- View bookings and metrics
- Update program content

---

## 📁 Folder Structure

/src
├── components/ # Navbar, Footer, Testimonials, etc.
├── pages/ # Home, About, Contact, Programs
├── programs/ # CrossFit, Zumba, MMA
├── supabase/ # Supabase client & API services
├── styles/ # Tailwind setup
├── assets/ # Images, logos
└── utils/ # Constants and helpers



---

## ⚙️ Getting Started

### 1. Clone the Repository


git clone https://github.com/yourusername/flex-fusion.git
cd flex-fusion
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file in the root:


VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_test_key
4. Start Development Server
npm run dev
5. Deploy
Push your repo to GitHub

Connect to Vercel

Add environment variables in Vercel dashboard

Done ✅

🔒 Demo Credentials
txt
Copy
Edit
User: demo@flexfusion.com
Pass: password123
🤝 Contribution
Pull requests and suggestions are welcome! Please open an issue first to discuss changes.

📄 License
MIT License

💡 Made with 💪 by MOHAMMAD TAUSIF
