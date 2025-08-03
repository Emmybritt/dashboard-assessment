This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). uses React 19 and Next 15

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
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

| Category        | Tools                       |
| --------------- | --------------------------- |
| Language        | **TypeScript**              |
| Package Manager | **pnpm** (preferred)        |
| Styling         | Panda CSS, Chakra UI        |
| Routing         | Next.js File-system Routing |
| Linting         | ESLint + TypeScript ESLint  |
| Formatting      | Prettier                    |

### Project Structure

This project uses an atomic design principles, below you will see more informations about the atomic design principles

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

### 📐 Atomic Design in Practice

In Atomic design components folder are structured based on the Atomic Design methodology:

```bash
| Layer         | Description                                    | Example                         |
| ------------- | ---------------------------------------------- | ------------------------------- |
| **Atoms**     | Basic building blocks (e.g., `Button`, `Text`) | `Button.tsx`, `Heading.tsx`     |
| **Molecules** | Combination of atoms (e.g., `SearchBar`)       | `FormField.tsx`, `NavItem.tsx`  |
| **Organisms** | Complex sections (e.g., `Sidebar`, `Header`)   | `Sidebar.tsx`, `Footer.tsx`     |
| **Templates** | Page skeletons using organisms (optional)      | `DashboardTemplate.tsx`         |
| **Pages**     | Route-level content (optional override)        | `HomePage.tsx`, `AboutPage.tsx` |
```

## 🛠 Optimization & Performance

This project integrates modern react optimization techniques to ensure high performance, maintainability, and fast user experiences:

- ⚛️ **React Compiler (React 19)**  
  Automatically tracks reactive dependencies and memoizes components without requiring `useMemo`, `useCallback`, or `memo`.  
  **Benefits:**

  - Reduces unnecessary re-renders
  - Simplifies code
  - Improves rendering performance automatically

- 📦 **Atomic CSS with Panda CSS**  
  Generates minimal, zero-runtime CSS using design tokens and utility patterns.  
  **Benefits:**

  - Reduces bundle size
  - Improves initial load performance
  - Eliminates unused CSS

- 🎨 **Semantic Tokens for Theming**  
  Uses Chakra UI and Panda CSS tokens for consistent dark/light mode styles.  
  **Benefits:**

  - Centralized design decisions
  - Fewer style overrides
  - Improved theme scalability

  - **Image Optimization:** As part of optimization, I used the _next/image_ component to render images. This component by default provides a fallback UI while waiting for the images to load: thus also eliminating the Cumulative Layout Effect.

  - **Font Optimization:** This project uses [`next/font`](https://nextjs.org/docs/app/getting-started/fonts) to automatically optimize and load Inter, a custom Google Font.

### 🎁 Bonus Features

This project includes several enhancements to improve user experience and maintainability:

- 🌗 **Dark and Light Mode Toggle**  
  Implemented dark and light mode toggle using Chakra UI’s color mode system.  
  Semantic tokens are managed via Panda CSS for consistent theming.

- 📱 **Fully Responsive Dashboard Layout**  
  Adapts seamlessly across mobile, tablet, and desktop breakpoints using Chakra UI’s responsive system.

- 🧭 **Collapsible Sidebar Navigation**

  - **Mobile:** Sidebar fully opens and closes using a toggle button.
  - **Desktop:** Sidebar supports **partial collapse**, displaying only icons when closed — maximizing screen space while maintaining usability.

- 🧠 **Atomic Design Architecture**
  Components are structured using Atomic Design principles:
  - `atoms` – base components like `Button`, `Icon`
  - `molecules` – combinations like `FormField`
  - `organisms` – full sections like `Sidebar`, `Header`
  - `templates` – layout skeletons for pages

These features collectively enhance the development experience, scalability, and user interface flexibility.
