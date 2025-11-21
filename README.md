# TaskFlow API

A cloud-native task management API built with NestJS, PostgreSQL, and TypeORM. This project is designed for deployment on Google Cloud Platform using modern DevOps practices.

## Features

- Full CRUD operations for task management
- Comprehensive Swagger API documentation
- PostgreSQL database with TypeORM
- Input validation with class-validator
- Unit tests with Jest
- Environment-based configuration
- Docker support

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd taskflow-api
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
# Copy the example env file
cp .env.example .env

# Edit .env with your database credentials
```

4. Create the PostgreSQL database:
```sql
CREATE DATABASE taskflow_db;
```

## Running the Application

### Development mode
```bash
npm run start:dev
```

The application will be available at:
- **API**: http://localhost:3000
- **Swagger Documentation**: http://localhost:3000

### Production mode
```bash
npm run build
npm run start:prod
```

## Testing

Run unit tests:
```bash
npm run test
```

Run tests with coverage:
```bash
npm run test:cov
```

Run tests in watch mode:
```bash
npm run test:watch
```

## API Documentation

Once the application is running, visit http://localhost:3000 to access the interactive Swagger documentation.

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get a specific task by ID |
| POST | `/tasks` | Create a new task |
| PATCH | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

### Example Request (Create Task)

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Complete project documentation",
    "description": "Write comprehensive API documentation",
    "priority": "high",
    "dueDate": "2024-12-31T23:59:59.000Z"
  }'
```

## Project Structure

```
taskflow-api/
├── src/
│   ├── tasks/
│   │   ├── dto/
│   │   │   ├── create-task.dto.ts
│   │   │   └── update-task.dto.ts
│   │   ├── entities/
│   │   │   └── task.entity.ts
│   │   ├── tasks.controller.ts
│   │   ├── tasks.controller.spec.ts
│   │   ├── tasks.service.ts
│   │   ├── tasks.service.spec.ts
│   │   └── tasks.module.ts
│   ├── app.module.ts
│   └── main.ts
├── .env
├── .env.example
├── package.json
└── README.md
```

## Database Schema

### Task Entity

| Field | Type | Description |
|-------|------|-------------|
| id | UUID | Primary key |
| title | String | Task title (required) |
| description | Text | Task description (optional) |
| isCompleted | Boolean | Completion status (default: false) |
| priority | Enum | Priority level: low, medium, high (default: medium) |
| dueDate | Timestamp | Due date (optional) |
| createdAt | Timestamp | Creation date |
| updatedAt | Timestamp | Last update date |

## Configuration

The application uses environment variables for configuration. See `.env.example` for all available options:

- `DB_HOST`: Database host (default: localhost)
- `DB_PORT`: Database port (default: 5432)
- `DB_USERNAME`: Database username
- `DB_PASSWORD`: Database password
- `DB_DATABASE`: Database name
- `PORT`: Application port (default: 3000)
- `NODE_ENV`: Environment (development/production)

## Dependencies

### Core Dependencies
- `@nestjs/common` - NestJS core functionality
- `@nestjs/typeorm` - TypeORM integration
- `typeorm` - ORM for database operations
- `pg` - PostgreSQL client
- `class-validator` - Input validation
- `class-transformer` - Object transformation
- `@nestjs/swagger` - API documentation

### Development Dependencies
- `@nestjs/testing` - Testing utilities
- `jest` - Testing framework
- `typescript` - TypeScript compiler

## Next Steps (Cloud Deployment)

This project is designed to be deployed on Google Cloud Platform with:
- CI/CD pipeline using GitHub Actions
- Containerization with Docker
- Deployment to Cloud Run
- Cloud SQL for PostgreSQL
- Infrastructure as Code with Terraform

## Team

This project is developed by a team of 3 as part of the "Cloud Development and Services" module:
- **OGER Jérôme**
- **MERCERON Romain**
- **ROULAND CURRIT Thibault**