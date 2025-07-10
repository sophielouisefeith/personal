# Sophie Louise Feith - Personal Website

A modern, responsive personal website for Sophie Louise Feith, showcasing her work in conscious technology, AI integration consulting, and privacy architecture.

## 🌟 Features

- **Conscious Design**: Clean, minimal aesthetic with natural rhythm elements
- **SEO Optimized**: Comprehensive meta tags, structured data, and search engine optimization
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Fast loading with optimized assets and code splitting
- **Accessibility**: WCAG compliant with proper semantic markup and ARIA labels
- **Natural Rhythms**: Time-based subtle color shifts reflecting natural cycles
- **Interactive Elements**: Smooth hover effects and transitions

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js installed on your system:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sophie-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

## 📁 Project Structure

```
sophie-website/
├── public/
│   ├── robots.txt          # SEO crawling instructions
│   ├── sitemap.xml         # Site structure for search engines
│   └── favicon.svg         # Website icon
├── src/
│   ├── components/
│   │   ├── CVPage.tsx      # CV/Resume page component
│   │   ├── SEO.tsx         # SEO management component
│   │   └── ui/             # Reusable UI components
│   ├── styles/
│   │   └── globals.css     # Global styles and Tailwind
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

## 🛠️ Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint
- **`npm run type-check`** - Run TypeScript type checking

## 🎨 Design System

### Colors
- **Primary**: Sage Green (#6B8F7E)
- **Background**: Clean white with subtle time-based gradients
- **Text**: Black with sage green hover states
- **Accent**: Natural color palette reflecting time of day

### Typography
- **Font**: Inter (via Google Fonts)
- **Hierarchy**: Semantic HTML headings with responsive sizing
- **Line Height**: Optimized for readability

### Animations
- **Spiral Markers**: 8-second gentle spinning animation
- **Hover Effects**: 700ms smooth transitions
- **Page Transitions**: 300ms fade effects

## 🔧 Customization

### Updating Content
1. **Main Content**: Edit `src/App.tsx`
2. **CV Content**: Edit `src/components/CVPage.tsx`
3. **SEO Data**: Modify `src/components/SEO.tsx`

### Styling
1. **Global Styles**: `src/styles/globals.css`
2. **Tailwind Config**: `tailwind.config.js`
3. **Component Styles**: Inline Tailwind classes

### SEO Configuration
1. **Meta Tags**: Update `src/components/SEO.tsx`
2. **Sitemap**: Edit `public/sitemap.xml`
3. **Robots**: Modify `public/robots.txt`

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🔍 SEO Features

- **Meta Tags**: Title, description, keywords, social sharing
- **Structured Data**: JSON-LD schema for Person and Organization
- **Open Graph**: Facebook and social media optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Canonical URLs**: Prevent duplicate content issues
- **Sitemap**: Complete site structure for search engines

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📦 Dependencies

### Core
- **React**: 18.2.0 - UI library
- **TypeScript**: 5.0.2 - Type safety
- **Vite**: 4.4.5 - Build tool

### Styling
- **Tailwind CSS**: 3.3.0 - Utility-first CSS
- **Lucide React**: 0.263.1 - Icons

### Development
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The `dist` folder contains the production build that can be deployed to:
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use the `dist` folder contents
- **Any static host**: Upload the `dist` folder

### Environment Variables
No environment variables are required for the basic setup.

## 🔧 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Use a different port
   npm run dev -- --port 3001
   ```

2. **Build errors**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**
   ```bash
   # Check types
   npm run type-check
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Support

For questions or support, contact Sophie Louise Feith:
- **Email**: Sophylouise@pm.me
- **LinkedIn**: [sophie-louise-feith](https://linkedin.com/in/sophie-louise-feith)
- **GitHub**: [sophielouisefeith](https://github.com/sophielouisefeith)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS.