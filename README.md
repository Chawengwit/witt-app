# App with Wit - Personal Portfolio

A modern, animated, and responsive portfolio website for Chawengwit (Wit), a UX/UI designer and fullstack developer.

**Live Demo:** [witt-app-rho.vercel.app](https://witt-app-rho.vercel.app)

---

## Features

- **Modern Design:** Clean and elegant UI with a focus on user experience.
- **Smooth Animations:** Engaging user interactions powered by Framer Motion.
- **Dark & Light Mode:** Theme toggling for user preference.
- **Responsive Layout:** Fully responsive design that looks great on all devices.
- **Interactive Sections:** Includes About, Projects (with a carousel), Skills, and a professional Journey/Timeline.
- **Smooth Scrolling:** Seamless navigation between sections.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or later recommended)
- [pnpm](https://pnpm.io/installation)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/witt-app.git
    cd witt-app
    ```
2.  Install dependencies:
    ```sh
    pnpm install
    ```

### Running the Development Server

Run the following command to start the development server:
```sh
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Linting

To run the linter and check for code quality issues:
```sh
pnpm lint
```

## Project Structure

The project is organized into the following directories:

-   **/app**: Contains the core application logic, including pages and API routes.
    -   `page.tsx`: The main entry point of the application, which combines all the different sections.
    -   `layout.tsx`: The main layout of the application, which includes the theme provider.
    -   `/api`: Contains the API routes for the application.
-   **/components**: Contains all the React components used in the application.
    -   **/ui**: Contains the reusable UI components from shadcn/ui.
    -   `navbar.tsx`: The navigation bar component.
    -   `hero.tsx`: The hero section component.
    -   `about.tsx`: The about section component.
    -   `projects.tsx`: The projects section component.
    -   `skills.tsx`: The skills section component.
    -   `timeline.tsx`: The timeline section component.
    -   `contact.tsx`: The contact section component.
    -   `footer.tsx`: The footer component.
-   **/lib**: Contains utility functions and data.
-   **/public**: Contains static assets like images and fonts.
-   **/styles**: Contains global styles.