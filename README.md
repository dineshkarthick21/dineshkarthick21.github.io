# Video Portfolio

A React + Vite portfolio site with a hero reel, project showcase, certifications, skills, and a contact section.

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- AOS
- EmailJS

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build:

```bash
npm run preview
```

## Notes

- The contact form sends messages through EmailJS and requires the three environment variables above.
- Generated output in `dist/` is ignored by git.
