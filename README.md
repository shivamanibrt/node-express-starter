# Express TypeScript Prisma Boilerplate

A production-ready, fully-typed Express.js boilerplate with Prisma ORM, Redis support, and modern development tools.

## 🚀 Features

- **TypeScript** - Full type safety with TypeScript 5
- **Express.js** - Fast, unopinionated web framework
- **Prisma ORM** - Modern database toolkit with type-safe queries
- **PostgreSQL** - Powerful relational database (Docker setup included)
- **Redis** - In-memory data structure store for caching
- **Security** - Helmet, CORS, and security best practices
- **Code Quality** - ESLint, Prettier, and Husky pre-commit hooks
- **Hot Reload** - Fast development with tsx watch mode
- **Docker Support** - Containerized PostgreSQL setup
- **Compression** - Response compression middleware
- **Request Logging** - Built-in request logger

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Docker and Docker Compose (for local database)
- Git

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd <project-name>
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# API
PORT=8080
FRONTEND_URL=http://localhost:3000

# Database (choose one option)
# Option 1: Direct URL
DATABASE_URL="postgresql://user:password@host:port/dbname"

# Option 2: Use local Docker (override if running Docker)
# POSTGRES_DB=local_db
# POSTGRES_USER=postgres
# POSTGRES_PASSWORD=postgres
# POSTGRES_PORT=5432

# Redis
REDIS_URL="redis://localhost:6379"
```

4. **Start PostgreSQL with Docker** (if using Docker)

```bash
docker-compose up -d
```

5. **Run Prisma migrations**

```bash
npx prisma migrate dev
npx prisma generate
```

6. **Start the development server**

```bash
npm run dev
```

The server will start at `http://localhost:8080`

## 📁 Project Structure

```
.
├── node_modules/
├── prisma/
│   └── schema.prisma          # Prisma schema definition
├── src/
│   ├── controllers/           # Route controllers
│   ├── lib/
│   │   └── config/
│   │       ├── cors.ts        # CORS configuration
│   │       └── request-Logger.ts  # Request logging
│   ├── middlewares/           # Custom middlewares
│   ├── routes/                # API routes
│   │   └── index.ts
│   ├── generated/             # Generated Prisma client
│   └── index.ts               # Application entry point
├── .env                       # Environment variables
├── .env.example              # Example environment variables
├── .gitignore                # Git ignore rules
├── .prettierrc               # Prettier configuration
├── docker-compose.yml        # Docker Compose setup
├── eslint.config.js          # ESLint configuration
├── jest.config.js            # Jest testing configuration
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:check   # Check for linting errors
npm run format       # Format code with ESLint + Prettier

# Testing
npm test             # Run Jest tests

# Prisma
npx prisma migrate dev     # Create and apply migrations
npx prisma generate        # Generate Prisma Client
npx prisma studio          # Open Prisma Studio (DB GUI)
npx prisma db push         # Push schema changes to DB
```

## 🔧 Configuration

### Prisma Setup

1. Define your models in `prisma/schema.prisma`:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

2. Create and apply migrations:

```bash
npx prisma migrate dev --name init
```

3. Generate Prisma Client:

```bash
npx prisma generate
```

### Adding Routes

1. Create a controller in `src/controllers/`:

```typescript
import { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
  // Your logic here
  res.json({ message: 'Get users' });
};
```

2. Create a route in `src/routes/`:

```typescript
import express from 'express';
import { getUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getUsers);

export default router;
```

3. Import and use in `src/index.ts`:

```typescript
import userRoutes from './routes/userRoutes.js';

app.use('/api', userRoutes);
```

## 🔐 Environment Variables

| Variable       | Description                  | Default                  |
| -------------- | ---------------------------- | ------------------------ |
| `PORT`         | Server port                  | `8080`                   |
| `FRONTEND_URL` | Frontend URL for CORS        | `http://localhost:3000`  |
| `DATABASE_URL` | PostgreSQL connection string | -                        |
| `REDIS_URL`    | Redis connection string      | `redis://localhost:6379` |

## 🐳 Docker Commands

```bash
# Start containers
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# Restart containers
docker-compose restart

# Remove volumes (deletes data)
docker-compose down -v
```

## 🧪 Testing

This boilerplate includes Jest for testing. Create test files with `.test.ts` or `.spec.ts` extensions:

```typescript
// example.test.ts
describe('Example Test', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});
```

Run tests:

```bash
npm test
```

## 🚢 Deployment

### Build for production

```bash
npm run build
```

### Deploy to platforms

- **Heroku**: Add `Procfile` with `web: npm start`
- **Railway**: Connect your GitHub repo
- **Render**: Set build command to `npm install` and start command to `npm start`
- **AWS/GCP/Azure**: Use Docker or direct deployment

### Environment Setup

Ensure all environment variables are set in your production environment, especially `DATABASE_URL`.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Quality

This project uses:

- **ESLint** for linting
- **Prettier** for code formatting
- **Husky** for pre-commit hooks
- **TypeScript** for type checking

Pre-commit hook automatically runs linting and formatting before each commit.

## 🐛 Troubleshooting

### Prisma Client Issues

```bash
npx prisma generate
```

### Port Already in Use

```bash
# Change PORT in .env or kill the process
lsof -ti:8080 | xargs kill
```

### Docker Database Connection Issues

```bash
# Check if container is running
docker ps

# Restart container
docker-compose restart postgres
```

## 📚 Resources

- [Express.js Documentation](https://expressjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)

---

⭐ If you find this boilerplate helpful, please give it a star on GitHub!
