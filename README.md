# Zoren's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases my skills, experience, projects, and certifications in a visually appealing and interactive way.

## 🚀 Live Demo

[View Live Portfolio](https://zrncrblln.github.io/portfolio-v2)

## 📋 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark Theme**: Modern dark theme with particle background effects
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **TypeScript**: Type-safe development for better code quality
- **Fast Performance**: Optimized build with Vite for lightning-fast loading
- **Error Handling**: Includes error boundaries and console logging for stable live deployments

## 🛠️ Tech Stack

### Frontend Framework

- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Animation library for React

### Development Tools

- **ESLint** - Code linting
- **GitHub Actions** - Automated deployment to GitHub Pages
- **gh-pages** - Deployment tool for GitHub Pages

## 📁 Project Structure

```
portfolio-v2/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components (Radix UI)
│   │   ├── About.tsx     # About section
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx   # Contact form and information
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx      # Landing section
│   │   ├── Navigation.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── dist/                 # Production build output
└── .github/workflows/    # GitHub Actions deployment
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/zrncrblln/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

5. **Test locally**
   Run `npm run preview` to ensure everything works correctly before deploying

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (builds and publishes)

## 🚀 Deployment

The project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: Push to the `main` branch triggers GitHub Actions
2. **Manual Deployment**: Run `npm run deploy` locally
3. **GitHub Pages**: Hosted at `https://zrncrblln.github.io/portfolio-v2`

### Deployment Configuration

- **Base Path**: Configured for GitHub Pages subdirectory (`/portfolio-v2/`)
- **Build Output**: Generated in `dist/` directory
- **CI/CD**: GitHub Actions workflow handles automated builds and deployments

After deployment, monitor browser console logs and check for errors to ensure stability.

## 🔧 Troubleshooting

### Blank Page in Live Deployment

If the live site shows a blank page:

1. Check browser console for JavaScript errors
2. Ensure error boundaries are in place (added in `src/App.tsx`)
3. Verify console logging in `src/main.tsx` for script execution
4. Rebuild and redeploy: `npm run build && npm run deploy`
5. Test locally with `npm run preview` before deploying

## 🎨 Customization

### Personal Information

Update the following files to customize with your information:

- `src/components/Hero.tsx` - Personal introduction and social links
- `src/components/About.tsx` - About section content
- `src/components/Skills.tsx` - Technical skills
- `src/components/Experience.tsx` - Work experience
- `src/components/Projects.tsx` - Portfolio projects
- `src/components/Certifications.tsx` - Certifications and achievements
- `src/components/Contact.tsx` - Contact information

### Styling

- Colors and themes can be modified in `src/index.css`
- Component styles use Tailwind CSS classes
- Dark theme is the default, but can be extended for light mode

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Zoren**

- Portfolio: [https://zrncrblln.github.io/portfolio-v2](https://zrncrblln.github.io/portfolio-v2)
- GitHub: [https://github.com/zrncrblln](https://github.com/zrncrblln)

---

⭐ **Star this repo** if you found it helpful!
