This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). uses React 19 and Next 15

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

## Technologies Used

### Core Framework

- **React.js** (v19.1.0)
  - 🆕 React Compiler (automatic memoization)
  - 🆕 Actions for simplified data handling
  - 🆕 Document metadata support
  - Concurrent rendering features
  - Component-based architecture
  - Hooks for state and lifecycle management
  - Virtual DOM for efficient rendering

### Application Framework

- **Next.js** (v15.4.5)
  - ⚡ Partial Prerendering (experimental)
  - 🖼 Enhanced Image Optimization
  - 📁 Server Actions for mutations
  - 🔄 Improved Fast Refresh
  - Server-side rendering (SSR) and static site generation (SSG)
  - File-based routing system
  - Built-in image optimization

### Styling Solutions

- **Panda CSS** (v0.54.0)

  - CSS-in-JS with zero runtime
  - Type-safe styles with TypeScript
  - Atomic CSS approach for optimized output
  - Features used:
    - `css` function for component styling
    - `jsx` style props support
    - Theme customization
  - Integrates with Chakra UI via:
    - Theme token sharing
    - Complementary utility props
    - Coexisting styling approaches

- **Chakra UI** (Complementary)
  - Accessible component library
  - Responsive design system
  - Dark mode support
  - Used primarily for:
    - Complex components (Modals, Drawers etc)
    - Accessibility-ready elements
    - Layout components (Box, Flex, Grid)

### Development Ecosystem

| Category   | Tools                       |
| ---------- | --------------------------- |
| Styling    | Panda CSS, Chakra UI        |
| Routing    | Next.js File-system Routing |
| Linting    | ESLint + TypeScript ESLint  |
| Formatting | Prettier                    |
| Git Hooks  | Husky + lint-staged         |

### Project Structure

This project uses an atomic design, below you will see more informations about the atomic design principles

```bash
src/
├── app/
│   ├── components/         # UI components (Atomic Design structure)
│   │   ├── atoms/          # Smallest reusable UI parts (e.g., buttons, icons)
│   │   ├── molecules/      # Group of atoms forming a small section
│   │   ├── organisms/      # Sections composed of molecules (e.g., Sidebar)
│   │   ├── templates/      # Page-level layouts using multiple organisms
│   │   └── pages/          # Page-specific UI or entry points
│   │
│   ├── datas/              # Static data files, constants, mock data
│   ├── types/              # Global TypeScript type definitions and interfaces
│   └── (route files)       # Next.js routing with file-based structure
│
├── public/                 # Static assets (images, favicons, etc.)
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier formatting rules
├── .env.local              # Local environment variables
├── next.config.js          # Next.js custom configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation (you are here)
```
