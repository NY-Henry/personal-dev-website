# NY Henry - Professional Developer Website

A modern, responsive developer portfolio website built with React, TypeScript, and Tailwind CSS. Features a professional design with customizable color scheme and comprehensive developer showcasing capabilities.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with hamburger navigation
- **Professional UI**: Clean, modern design that builds client trust
- **Customizable Colors**: CSS custom properties for easy theme modification
- **Fast Routing**: React Router DOM with createBrowserRouter
- **Interactive Components**: Modal galleries, contact forms, testimonials
- **SEO Ready**: Semantic HTML structure and meta tag optimization
- **Performance Optimized**: Vite build system with HMR

## 🎨 Design System

### Color Scheme

- **Primary Orange**: `#f6821f` - Professional accent color
- **Black**: `#000000` - Text and contrasts
- **White**: `#ffffff` - Backgrounds and clean spaces
- **Gray Scale**: Various shades for text hierarchy

### Customization

Colors are defined as CSS custom properties in `src/index.css`:

```css
:root {
  --primary-color: #f6821f;
  --primary-hover: #e6751c;
  --gradient-primary: linear-gradient(135deg, #f6821f 0%, #e6751c 100%);
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Footer with social links
│   └── Layout.tsx          # Main layout wrapper
├── pages/
│   ├── Home.tsx            # Homepage with hero & CTA
│   ├── About.tsx           # Experience & education
│   ├── Services.tsx        # Service offerings & pricing
│   ├── Portfolio.tsx       # Project showcase
│   └── Contact.tsx         # Contact form & FAQ
├── App.tsx                 # Router configuration
├── main.tsx               # App entry point
└── index.css              # Global styles & variables
```

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd personaldevwebsite
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Pages & Components

### Header Component

- Responsive navigation with mobile hamburger menu
- Active route highlighting
- Smooth transitions and animations
- Professional logo/branding

### Footer Component

- Social media links (GitHub, LinkedIn, Twitter, Email)
- Copyright and contact information
- Consistent design with site theme

### Home Page

- Hero section with call-to-action buttons
- Statistics showcase (projects, clients, experience)
- Technology skills grid
- Professional introduction

### About Page

- Personal introduction and mission
- Work experience timeline
- Education and certifications
- Core values and approach

### Services Page

- Service offerings with detailed descriptions
- Transparent pricing structure
- Development process explanation
- Client testimonials

### Portfolio Page

- Project showcase with filtering by technology
- Modal gallery for project details
- Live demo and GitHub links
- Technology stack for each project

### Contact Page

- Professional contact form
- FAQ section
- Multiple contact methods
- Location and availability information

## 🎯 Key Technologies

### Frontend

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing with createBrowserRouter
- **Heroicons**: Consistent iconography

### Build Tools

- **Vite**: Fast build tool with HMR
- **ESLint**: Code linting and quality
- **PostCSS**: CSS processing

## 🎨 Customization Guide

### Changing Colors

1. Update CSS custom properties in `src/index.css`:

   ```css
   :root {
     --primary-color: #your-color;
     --primary-hover: #your-hover-color;
   }
   ```

2. Tailwind classes automatically use these variables:
   - `text-primary-color`
   - `bg-primary-color`
   - `border-primary-color`

### Adding New Pages

1. Create new component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

### Modifying Content

- **Personal Info**: Update contact details in Footer and Contact pages
- **Projects**: Modify portfolio data in Portfolio page
- **Services**: Update offerings in Services page
- **Experience**: Modify timeline in About page

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts for deployment

## 📧 Contact & Support

For questions about this project or to discuss potential collaborations:

- **Email**: ny.henry@example.com
- **LinkedIn**: [linkedin.com/in/nyhenry](https://linkedin.com/in/nyhenry)
- **GitHub**: [github.com/nyhenry](https://github.com/nyhenry)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by NY Henry**
