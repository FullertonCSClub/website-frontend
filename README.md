# Fullerton CS Club Website - Frontend

This is the frontend repository for the Fullerton Computer Science Club website, built with Next.js, React, Tailwind CSS, and ShadCN UI components.

## Project Overview

The CS Club website is a multi-page web application that includes:

- User Authentication (Sign-up, Login, Roles)
- Problem-Solving Section (LeetCode-style problems)
- Video Upload & Streaming
- Photo Gallery (Club events, activities)
- Forum/Chat (For discussions and collaboration)
- Admin Dashboard (Manage problems, users, and content)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **State Management**: React Context API / Zustand (planned)
- **Authentication**: JWT with Supabase (planned)
- **API Integration**: REST API calls to backend

## Project Structure

- `src/app`: Main application code using Next.js App Router
- `src/components`: Reusable UI components
- `src/lib`: Utility functions and shared code
- `src/types`: TypeScript type definitions
- `src/features`: Feature-specific components and logic

## Development Roadmap

### Phase 1: Basic Structure & Authentication
- Landing page
- Navigation
- User authentication UI
- Basic responsive design

### Phase 2: Core Features
- Problem-solving section
- Video upload & streaming
- Photo gallery
- Forum/chat system

### Phase 3: Advanced Features
- Real-time code execution
- User progress tracking
- Enhanced media features
- Real-time chat

## Deployment

The frontend will be deployed on Vercel.

## Backend Repository

The backend code is maintained in a separate repository at:
https://github.com/FullertonCSClub/website-backend.git
