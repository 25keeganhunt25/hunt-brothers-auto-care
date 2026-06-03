# Hunt Brothers Auto Care LLC

Professional auto detailing website built with Next.js and Tailwind CSS, deployed on Vercel.

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/25keeganhunt25/hunt-brothers-auto-care.git
cd hunt-brothers-auto-care
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
hunt-brothers-auto-care/
├── src/
│   └── app/
│       ├── page.js          # Main homepage
│       ├── layout.js        # Root layout
│       └── globals.css      # Global styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## Features

- **Hero Section** - Eye-catching banner with call-to-action buttons
- **About Section** - Brief description of services
- **Pricing Section** - Service offerings with pricing and add-ons
- **Booking Form** - Email-based appointment requests via FormSubmit
- **Contact Section** - Phone, email, and service area information
- **Responsive Design** - Mobile-friendly layout using Tailwind CSS
- **Professional Styling** - Red and black color scheme

## Booking System

The booking form currently sends appointment requests to `hbpallc65@gmail.com` using [FormSubmit.co](https://formsubmit.co).

For automatic scheduling with calendar integration, consider adding:
- **Calendly** - For scheduling with automatic availability management
- **Stripe** - For payment processing
- **SendGrid** - For professional email notifications

## Deployment to Vercel

1. Push this repository to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect the Next.js configuration
5. Click "Deploy"

Your site will be live at a URL like: `https://hunt-brothers-auto-care.vercel.app`

### Custom Domain
To use a custom domain like `huntbrothersautocare.com`:
1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Update your domain registrar's DNS settings per Vercel's instructions

## Environment Variables

No environment variables are required for the basic setup. For advanced features:
- Email service: Add API keys for email notifications
- Payment processing: Add Stripe keys if implementing paid bookings

## Technologies Used

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **FormSubmit.co** - Form submission service
- **Vercel** - Hosting platform

## License

This project is proprietary to Hunt Brothers Auto Care LLC.

## Support

For questions or issues, contact:
- 📞 (417) 507-4420
- ✉️ hbpallc65@gmail.com