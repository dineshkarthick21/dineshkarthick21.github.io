# 🎬 Video Portfolio

A modern, interactive portfolio website built with React and Vite, featuring a hero video reel, dynamic project showcase, professional certifications, technical skills, and a functional contact form.

## ✨ Features

- **Hero Section** - Captivating video reel introduction with smooth animations
- **About Section** - Personal introduction with certifications and achievements
- **Skills Showcase** - Display of technical expertise and competencies
- **Services** - Professional services offered
- **Experience** - Work history and career timeline
- **Projects** - Showcase of completed projects with details
- **Certifications** - Display of professional certifications
- **Contact Form** - Fully functional contact form with EmailJS integration
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
| **EmailJS** | Email Service Integration |

## 📁 Project Structure

```
My-Portfolio/
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
├── index.html
├── package.json
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
cd My-Portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create a `.env` file in the project root:
```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

> Get these credentials from [EmailJS](https://www.emailjs.com/)

4. **Start the development server:**
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

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
- Email integration via EmailJS
- Form validation and feedback

## ⚙️ Configuration

### EmailJS Setup

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Copy your credentials:
   - Service ID
   - Template ID
   - Public Key
4. Add these to your `.env` file

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

### Deploy to GitHub Pages, Vercel, or Netlify
- Push `dist/` folder to your hosting service
- GitHub Pages: Use GitHub Actions or manual deployment
- Vercel/Netlify: Connect your repository for auto-deployment

## 📝 Notes

- The contact form requires proper EmailJS configuration to send emails
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
