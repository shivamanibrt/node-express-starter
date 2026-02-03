# Express TypeScript Prisma Boilerplate

Production-ready Express.js boilerplate with Prisma ORM, PostgreSQL, Redis, and TypeScript.

## Features

- TypeScript + Express.js
- Prisma ORM with PostgreSQL
- Redis for caching
- Docker support
- ESLint + Prettier
- Hot reload with tsx

## Quick Start

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Start PostgreSQL (Docker)
docker-compose up -d

# Run migrations
npx prisma migrate dev
npx prisma generate

# Start dev server
npm run dev
```

## Environment Variables

```env
PORT=8080
FRONTEND_URL=http://localhost:3000
DATABASE_URL="postgresql://user:password@host:port/dbname"
REDIS_URL="redis://localhost:6379"
```

## Scripts

```bash
npm run dev          # Start development server
npm start            # Start production server
npm run lint         # Lint code
npm run format       # Format code
npm test             # Run tests
```

## Project Structure

```
src/
├── controllers/     # Route handlers
├── routes/          # API routes
├── middlewares/     # Custom middlewares
├── lib/config/      # Configuration
└── index.ts         # Entry point
```

## Prisma Commands

```bash
npx prisma migrate dev    # Create migration
npx prisma generate       # Generate client
npx prisma studio         # Open DB GUI
```

## License

ISC
