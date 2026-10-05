# 🎬 Video Portfolio

A modern, interactive portfolio website built with React and Vite, featuring a hero video reel, dynamic project showcase, professional certifications, technical skills, and a functional contact form backed by a serverless API (Resend).

## ✨ Features

- **Hero Section** - Captivating video reel introduction with smooth animations
- **About Section** - Personal introduction with certifications and achievements
- **Skills Showcase** - Display of technical expertise and competencies
- **Services** - Professional services offered
- **Experience** - Work history and career timeline
- **Projects** - Showcase of completed projects with details
- **Certifications** - Display of professional certifications
- **Contact Form** - Validated form that posts to a Vercel serverless function, which emails the owner and sends an auto-reply to the visitor via Resend
- **Responsive Design** - Optimized for all screen sizes
- **Smooth Animations** - Enhanced UX with Framer Motion and AOS effects
- **Preloader** - Professional loading animation

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 19** | UI Framework |
| **Vite** | Build Tool & Dev Server |
| **Tailwind CSS 4** | Styling & Utility CSS |
| **Framer Motion** | Advanced Animations |
| **AOS** | Scroll Animation Library |
| **Resend** | Transactional Email (serverless `api/contact.js`) |
| **Vercel** | Serverless API hosting |

## 📁 Project Structure

```
dineshkarthick21.github.io/
├── api/
│   └── contact.js        # Serverless contact handler (Resend)
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Preloader.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── assets/
│   │   ├── about/
│   │   ├── hero video/
│   │   └── ...
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── .github/workflows/deploy.yml
├── .env.example
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd dineshkarthick21.github.io
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Copy `.env.example` to `.env` in the project root:
```env
RESEND_API_KEY=re_your_api_key_here
```

> Get an API key from [Resend](https://resend.com/). The key is read server-side only (never prefixed with `VITE_`).

4. **Start the development server:**
```bash
npm run dev
```
The site will be available at `http://localhost:5173`. The Vite dev server also serves `/api/contact` locally (see `vite.config.js`).

## 📦 Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

## 🎨 Sections Overview

### Hero
- Animated video introduction
- Eye-catching animations on page load

### About
- Personal introduction
- Showcases certifications and key achievements

### Skills
- Technical skills display
- Categorized competencies

### Services
- Professional services offered
- Service descriptions and highlights

### Experience
- Career timeline
- Work history and milestones

### Projects
- Portfolio of completed projects
- Project descriptions and links

### Certifications
- Professional credentials
- Certification details and issuing organizations

### Contact
- Fully functional contact form
- Email delivery via Resend (owner notification + visitor confirmation)
- Form validation and feedback

## ⚙️ Configuration

### Contact API (Resend) Setup

1. Create an account on [Resend](https://resend.com/) and verify your sending domain
2. Create an API key
3. Add it as `RESEND_API_KEY` in `.env` locally and in your Vercel project environment variables
4. Update the sender, recipient, and allowed CORS origins in `api/contact.js`
5. Make sure the `fetch` URL in `src/components/Contact.jsx` points to your deployed API

### Customization

- **Colors & Styling** - Edit `src/App.css` and Tailwind config
- **Content** - Update component files in `src/components/`
- **Assets** - Replace images/videos in `src/assets/`
- **Animations** - Configure Framer Motion and AOS in component files

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Hosting
- **Frontend** - GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`), served on the custom domain in `CNAME`
- **Contact API** - Deploy to Vercel; `vercel.json` rewrites `/api/*` to the serverless functions and everything else to `index.html`
- Set `RESEND_API_KEY` in Vercel project settings

## 📝 Notes

- The contact form requires a valid `RESEND_API_KEY` and a verified Resend domain to send emails
- Never commit `.env`; only `.env.example` is tracked
- All assets should be optimized for web (compressed images/videos)
- The `dist/` folder is excluded from git as per `.gitignore`
- Preloader displays before main content loads

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio.

## 👨‍💻 Author

**Dinesh Karthick**

For inquiries and collaboration opportunities, please use the contact form on the portfolio.

---

*Last Updated: 2026*
