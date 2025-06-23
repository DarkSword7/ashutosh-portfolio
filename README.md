# 🚀 Ashutosh Tiwari - Developer Portfolio

A minimalistic and modern portfolio website built with Next.js, featuring smooth animations, dark/light theme support, and a Japanese-inspired design philosophy.

![Portfolio Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Portfolio+Preview)

## ✨ Features

- **🎨 Minimalistic Design** - Clean, modern interface inspired by Japanese design principles
- **🌙 Dark/Light Mode** - Seamless theme switching with persistent preferences
- **📱 Fully Responsive** - Optimized for all screen sizes and devices
- **🎭 Smooth Animations** - GSAP and Framer Motion powered interactions
- **⚡ Performance** - Built with Next.js 15 for optimal loading speeds
- **🎯 SEO Optimized** - Meta tags and structured data for better visibility

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Advanced animations and gestures
- **GSAP** - Professional-grade animations

### UI/UX

- **Shadcn/ui Components** - Accessible and customizable components
- **React Icons** - Beautiful SVG icons
- **next-themes** - Theme management
- **Responsive Design** - Mobile-first approach

## 📂 Project Structure

```
ashutosh-dev-portfolio/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── animations.tsx       # Reusable animation components
│   ├── hero-section.tsx     # Landing section with CTA
│   ├── skills-section.tsx   # Technical skills showcase
│   ├── projects-section.tsx # Portfolio projects with demos
│   ├── education-section.tsx# Education and certifications
│   ├── contact-section.tsx  # Contact form and information
│   ├── navigation.tsx       # Responsive navigation bar
│   ├── theme-toggle.tsx     # Dark/light mode switcher
│   ├── theme-provider.tsx   # Theme context provider
│   └── page-loader.tsx      # Loading animation
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ashutoshtiwari/portfolio.git
   cd ashutosh-dev-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update your details in the respective component files:

- **Hero Section**: Edit `components/hero-section.tsx`
- **Skills**: Modify the skills array in `components/skills-section.tsx`
- **Projects**: Update the projects array in `components/projects-section.tsx`
- **Education**: Edit education data in `components/education-section.tsx`
- **Contact**: Update contact information in `components/contact-section.tsx`

### Styling

- **Colors**: Modify CSS variables in `app/globals.css`
- **Fonts**: Update font imports in `app/layout.tsx`
- **Animations**: Customize timing and effects in `components/animations.tsx`

### Resume

Add your resume PDF to the `public` folder and update the download link in the hero section.

## 📱 Sections

1. **🏠 Hero** - Introduction with download resume button
2. **🛠️ Skills** - Technical skills with interactive visualizations
3. **🚀 Projects** - Featured projects with live demos and source code
4. **🎓 Education** - Academic background and certifications
5. **📧 Contact** - Contact form and social media links

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimal JavaScript footprint
- **Loading Speed**: Sub-second initial page load

## 🔧 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel** (Recommended): One-click deployment
- **Netlify**: Continuous deployment from Git
- **AWS S3 + CloudFront**: Custom hosting solution

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: ashutosh@example.com
- **LinkedIn**: [linkedin.com/in/ashutoshtiwari](https://linkedin.com/in/ashutoshtiwari)
- **GitHub**: [github.com/ashutoshtiwari](https://github.com/ashutoshtiwari)
- **Portfolio**: [ashutoshtiwari.dev](https://ashutoshtiwari.dev)

---

⭐ If you found this portfolio template helpful, please give it a star!

Built with ❤️ by [Ashutosh Tiwari](https://github.com/ashutoshtiwari)
