# Pixel Pulses - Digital Growth Agency Website

A modern, high-converting one-page freelancer agency website built with Next.js and Tailwind CSS. This website showcases digital marketing and web development services designed to attract clients and generate leads.

## 🚀 Features

- **Modern Design**: Clean, premium, and professional interface with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Component-Based**: Reusable React components with TypeScript
- **SEO Optimized**: Meta tags, structured data, and search-friendly URLs
- **Interactive Elements**: Framer Motion animations, hover effects, and micro-interactions
- **Lead Generation**: Contact form ready for EmailJS/Formspree integration
- **Performance**: Optimized images, lazy loading, and efficient code structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Build Tool**: Next.js with Turbopack

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page component
├── components/
│   ├── ui/
│   │   └── Button.tsx       # Reusable button component
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer section
│   └── sections/
│       ├── Hero.tsx         # Hero section
│       ├── Services.tsx     # Services showcase
│       ├── WhyChooseMe.tsx  # Value proposition
│       ├── Portfolio.tsx    # Project portfolio
│       ├── About.tsx        # About section
│       ├── Process.tsx     # Process workflow
│       ├── Stats.tsx        # Statistics counters
│       ├── Testimonials.tsx # Client testimonials
│       ├── Contact.tsx      # Contact form
│       └── FinalCTA.tsx     # Final call-to-action
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Sections Included

1. **Hero Section**: Bold headline with dual CTAs and animated background
2. **Services Section**: 6 service cards with icons and detailed features
3. **Why Choose Me**: Icon-based value propositions with stats
4. **Portfolio**: Project showcase with results and case studies
5. **About**: Professional introduction with skills and experience
6. **Process**: 5-step workflow visualization
7. **Stats**: Animated counters and achievements
8. **Testimonials**: Client success stories and ratings
9. **Contact**: Lead capture form with multiple contact methods
10. **Final CTA**: Strong closing message with booking options

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Integration

The contact form is structured to integrate with:
- **EmailJS**: Add your EmailJS service ID and template ID
- **Formspree**: Replace the form action with your Formspree endpoint
- **Custom Backend**: Connect to your preferred backend service
- **Google Sheets**: Use Zapier or Make.com for automated data collection

## 🔧 Customization

### Brand Colors
Update the color scheme in the Tailwind configuration or directly in components:
- Primary: Blue gradients (`from-blue-600 to-purple-600`)
- Accent: Various gradient combinations for different sections

### Content
Edit the following files to customize content:
- `src/app/layout.tsx` - SEO metadata
- `src/components/sections/` - Section-specific content
- `src/components/layout/` - Header/footer information

### Form Configuration
Update the contact form in `src/components/sections/Contact.tsx`:
- Add EmailJS/Formspree integration
- Customize form fields
- Update notification messages

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile**: Optimized layout for 320px - 768px
- **Tablet**: Adaptive design for 768px - 1024px  
- **Desktop**: Full experience for 1024px+

## ⚡ Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Next.js Image component usage
- **Minimal Bundle**: Tree-shaking and code splitting
- **Smooth Animations**: Hardware-accelerated Framer Motion
- **SEO Friendly**: Semantic HTML and meta tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support:
- Email: pixelpulse340@gmail.com
- Phone: +91 9936968762
- WhatsApp: +91 9936968762

---

**Built with ❤️ by Pixel Pulses**
