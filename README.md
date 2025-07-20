# Shivam Art - Traditional Wooden Handicrafts

A beautiful, responsive single-page website for a traditional wooden handicraft business built with Next.js 14 and Tailwind CSS.

## Features

- 🎨 **Beautiful Design**: Warm, earthy color palette with wooden theme
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **High Performance**: Built with Next.js 14 and optimized for speed
- 🎯 **Smooth Navigation**: Sticky header with smooth scrolling anchor links
- 🖼️ **Interactive Gallery**: Image hover effects and animations
- 📧 **Contact Form**: Fully styled contact form (frontend only)
- 🌐 **SEO Optimized**: Proper meta tags and semantic HTML

## Sections

- **Header**: Sticky navigation with mobile menu
- **Hero**: Full-screen background with call-to-action
- **About**: Family business story with imagery
- **Products**: Responsive grid of featured products
- **Gallery**: Workshop images with hover effects
- **Contact**: Business details and contact form
- **Footer**: Social links and business information

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter & Playfair Display)
- **Deployment**: Static export ready for GitHub Pages

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## GitHub Pages Deployment

This site is configured for static export and GitHub Pages deployment.

### Quick Setup

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:

   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Set Source to "GitHub Actions"

3. **Create deployment workflow**:
   Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Setup Pages
           uses: actions/configure-pages@v4

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./out

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

4. **Your site will be available at**:
   `https://[your-username].github.io/[repository-name]`

### Manual Deployment Alternative

If you prefer manual deployment:

```bash
npm install -g gh-pages
npm run build
npx gh-pages -d out
```

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

- Primary: Amber tones for warm wooden feel
- Accent: Stone grays for contrast
- Background: Warm off-whites and creams

### Content

Update business information in `app/page.tsx`:

- Company name and tagline
- About section story
- Product information
- Contact details

### Images

Replace placeholder images with your own:

- Hero background
- About section image
- Product photos
- Gallery images

All images are currently sourced from Pexels for demonstration.

### Fonts

Google Fonts are integrated:

- **Inter**: Clean, modern sans-serif for body text
- **Playfair Display**: Elegant serif for headings

## Performance Features

- Static export for fast loading
- Optimized images with proper sizing
- Smooth CSS transitions and animations
- Mobile-first responsive design
- Semantic HTML for accessibility

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).
