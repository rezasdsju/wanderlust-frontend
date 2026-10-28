# 🌍 Wanderlust

A travel platform that helps users discover their ideal tour destinations and book tour packages with ease.


## Features

- Email and password authentication (signup and login)
- Protected profile page for viewing and editing user information
- Protected pages: add destination, my bookings and destination details redirect unauthenticated users to the sign-in page
- Browse all destinations in one place
- Filter destinations by category, country and price range
- View destination details
- Manage travel packages (create, edit, and delete) with admin-only access control.
- View bookings associated with the authenticated user's email
- Cancel bookings from the user's booking list
- JWT-protected destination and booking APIs using Better Auth JWKS.




### Authentication & API Security

- JWT-secured destination details API
- JWT-protected destination creation, update, and deletion APIs
- JWT-protected booking creation and cancellation APIs
- JWT-protected user booking retrieval API
- Bearer token verification using Better Auth's JWKS endpoint
- Unauthorized requests rejected when the token is missing, invalid, or expired



## Technologies Used

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/shadcn%20ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Better%20Auth-000000?style=for-the-badge" alt="Better Auth" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
</p>




## Environment Variables

Create a `.env.local` file in the root directory:

    NEXT_PUBLIC_BASE_API_URL=http://localhost:5000
    MONGODB_URI=your_mongodb_connection_string
    BETTER_AUTH_SECRET=your_secret
    BETTER_AUTH_URL=http://localhost:3000

## Getting Started

1. Clone and run the [backend server](https://github.com/rezasdsju/wanderlust-backend) first
2. Install dependencies: `npm install`
3. Add the `.env.local` file
4. Start the app: `npm run dev`

## Backend

This project uses the [Wanderlust Server](https://github.com/rezasdsju/wanderlust-backend) as its API.