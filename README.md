# Dr. Sushma BAMS Portfolio

Production-ready personal portfolio website for **Dr. Sushma S (BAMS Ayurveda Physician)** built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Swiper
- Resend (contact email delivery)

## Features

- Single-page portfolio with sections for Hero, About, Skills, Experience, Certifications, Research, Testimonials, and Contact
- Sticky top navigation with section anchors
- Responsive design for desktop/tablet/mobile
- Animated section reveals and interactive testimonial carousel
- Contact API route (`app\api\contact\route.ts`) for email enquiries
- Content-driven profile data from `data\content.ts`

## Project Structure

```text
app\
  api\contact\route.ts    # Contact form email API (Resend)
  globals.css             # Global styles + Tailwind theme tokens
  layout.tsx              # App shell + metadata + fonts
  page.tsx                # Home page section composition
components\
  *.tsx                   # Reusable section components
data\
  content.ts              # Doctor profile and section content source
public\images\            # Site images and assets
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env.local` in the project root:

   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=doctor@example.com
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Content Updates

Most text/content changes can be done in one place:

- `data\content.ts`: profile details, bio, skills, experience timeline, certifications, research entries, testimonials, and social links.

For visual/layout changes, edit corresponding files in `components\` and `app\globals.css`.

## Deployment

Deploy on any Node.js-compatible host (Vercel recommended):

1. Set environment variables (`RESEND_API_KEY`, `CONTACT_EMAIL`)
2. Run `npm run build`
3. Start with `npm run start`

## Notes

- This project uses Next.js 16. If you are changing framework-level behavior, refer to local framework docs under `node_modules\next\dist\docs\`.
