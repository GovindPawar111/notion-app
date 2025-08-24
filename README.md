# Notion App

A modern, full-featured workspace inspired by Notion. Organize ideas, manage tasks, and collaborate effortlessly with a beautiful, responsive UI.

## Live Demo

- [Live URL](https://notion-app-q38k.vercel.app/)

## GitHub Repository

- [GitHub Repository](https://github.com/GovindPawar111/notion-app)

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Database & Backend:** [Convex](https://convex.dev/) (Realtime database, serverless functions)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/), Custom components, [Lucide Icons](https://lucide.dev/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/), Convex queries/mutations
- **Other:** [Sonner](https://sonner.emilkowal.ski/) for toast notifications, [EdgeStore](https://edgestore.dev/) for file storage

## Features

- Create, edit, and organize notes and documents
- Nested document structure (sidebar navigation)
- Real-time collaboration and updates
- Authentication and user management
- Document publishing and sharing
- Trash and restore functionality
- Responsive design for desktop and mobile
- Custom modals and command palette
- Dark mode support

## Getting Started

### Clone the repository

```sh
git clone https://github.com/GovindPawar111/notion-app.git
cd notion-app
```

### Install dependencies

```sh
npm install
```

### Environment Setup

Before running the application locally, you must set up the following environment variables in a `.env.local` file at the root of your project:

#### Convex

```
CONVEX_DEPLOYMENT=your_convex_deployment_id
NEXT_PUBLIC_CONVEX_URL=your_convex_url
```

#### Clerk

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

#### Edge Store

```
EDGE_STORE_ACCESS_KEY=your_edge_store_access_key
EDGE_STORE_SECRET_KEY=your_edge_store_secret_key
```

> **Note:** You must complete the Convex setup and provide the required environment variables before running the Convex server locally.

### Start Next.js application

```sh
npm run dev
```

### Start Convex server

```sh
npx convex dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.


---

This is a personal project. Feedback and suggestions are welcome!
