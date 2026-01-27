# FullStack-Voc1

A fullstack web application with modern frontend and backend architecture.

## Tech Stack

- **Frontend**: Astro
- **Backend**: Node.js / Express
- **Database**: PostgreSQL

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- Docker (optional)

### Installation

```bash
# Clone the repository
git clone <repo-url>

# Install dependencies
cd frontend && pnpm install
cd ../backend && pnpm install

# Set up environment
cp .env.example .env
```

### Development

```bash
# Start backend
cd backend && pnpm dev

# Start frontend
cd frontend && pnpm dev
```

### Docker

```bash
docker-compose up
```

## Project Structure

```
├── frontend/     # Astro frontend
├── backend/      # Express API
└── docker-compose.yml
```

## License

MIT
