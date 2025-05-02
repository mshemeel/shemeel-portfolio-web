# Developer Portfolio Website

A modern, responsive developer portfolio built with Next.js, featuring customizable content and a clean design with dark/light mode.

## Features

- Modern UI with responsive design
- Animated elements and smooth scrolling
- Light/Dark mode toggle
- Fully customizable content via JSON files
- SEO optimized
- Built with Next.js, TypeScript, and CSS Modules

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/developer-portfolio.git
cd developer-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing Content

All website content is stored in JSON files in the `src/data` directory. To customize the portfolio for your own use, simply edit these files:

### Content Files

- `about.json` - About section content, summary, and statistics
- `contact.json` - Contact information and social media links
- `education.json` - Education history and certifications
- `experience.json` - Work history and professional experience
- `hero.json` - Hero section content, including headline and intro text
- `projects.json` - Portfolio projects with descriptions and links
- `skills.json` - Technical skills categorized by type
- `testimonials.json` - Client/colleague testimonials

### Adding Your Profile Picture

1. Place your profile photo in the `/public/images/` directory
2. Update the image path in `hero.json`

### Adding Your Resume

1. Place your resume PDF in the `/public/files/` directory
2. Update the resume path in `about.json`

## Deployment

### Deploying to Vercel

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com), the platform created by the makers of Next.js.

1. Create a Vercel account if you don't have one
2. Install the Vercel CLI:

```bash
npm install -g vercel
```

3. Run the following command from your project directory:

```bash
vercel
```

4. Follow the prompts to link your project to Vercel

Alternatively, you can deploy directly from the Vercel dashboard:

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Import your repository on Vercel
3. Vercel will detect Next.js automatically and use the optimal build settings

### Custom Domain

To use a custom domain with your Vercel deployment:

1. Go to your project on the Vercel dashboard
2. Navigate to Settings > Domains
3. Add your domain and follow the instructions to configure DNS settings

## Customizing Theme

The website uses CSS variables for theming. You can customize colors, fonts, and other visual elements by editing the `src/app/globals.css` file.

## Learn More

To learn more about Next.js, check out these resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
