# A full-stack web application built with Next.js, TypeScript, Prisma and PostgreSQL.

Features
User registration and authentication
User management
Product management
Admin dashboard
Role-based access control
Image upload with Cloudinary
API validation with Zod
Password hashing with bcrypt
Welcome emails with Resend
Tech Stack
Next.js
React
TypeScript
Prisma
PostgreSQL
Auth.js
Tailwind CSS
Zod
Cloudinary
Resend
bcrypt
Getting Started

Install dependencies:

npm install
Environment Variables

Create a .env file in the root of the project:

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/my_database?schema=public"

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"

AUTH_SECRET="your_auth_secret"

RESEND_API_KEY="your_resend_api_key"

Generate Prisma Client and run migrations:

npx prisma generate
npx prisma migrate dev

Start the development server:

npm run dev

Open http://localhost:3000 in your browser.

Available Scripts
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
