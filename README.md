# Portfolio Website
A modern, responsive portfolio website showcasing my work as a full-stack software engineer. Built with React, Vite, and clean, maintainable code.

![Portfolio Screenshot](./public/portfolio-screenshot.png)

Link to project: https://jackgermain.online

## How It's Made:
**Tech used:** React, Vite, JavaScript, CSS3, React Router

This portfolio was built using React 19 with modern functional components and hooks for state management. Vite provides lightning-fast development with Hot Module Replacement and optimized production builds. The architecture follows React best practices with reusable components, custom hooks for page meta management, and React Router for client-side navigation.

The styling uses CSS3 with custom properties for consistent theming across components. The project data is managed through a centralized JavaScript file that imports and organizes all project information, screenshots, and metadata. Each project is displayed through a reusable ProjectCard component with modal galleries for viewing screenshots.

The site is fully responsive with mobile-first design principles, semantic HTML for accessibility, and optimized images. SEO optimization includes proper meta tags, sitemap, and Open Graph support for social sharing.

## Optimizations
Implemented lazy loading for project images to improve initial page load times. Used React Router for code splitting opportunities and efficient bundle management. Vite's build process automatically optimizes bundle size through tree shaking and modern ES6+ transpilation.

Optimized the project filtering system to avoid unnecessary re-renders by using proper dependency arrays in useEffect hooks. CSS custom properties enable consistent theming while CSS Grid and Flexbox provide responsive layouts without JavaScript overhead.

Added proper image alt attributes and semantic HTML structure for accessibility compliance. The modal gallery system provides smooth user experience with keyboard navigation support.

## Lessons Learned:
**Component Architecture** - Building this portfolio reinforced the importance of reusable components and proper separation of concerns. The ProjectCard component demonstrates how well-designed components can handle complex data while maintaining simplicity.

**Performance Optimization** - Working with multiple project screenshots taught me the value of image optimization and lazy loading. Vite's build tools showed how modern bundlers can significantly improve performance with minimal configuration.

**User Experience** - Designing for both recruiters and technical audiences highlighted the importance of clear information hierarchy and intuitive navigation. The filtering system and modal galleries provide easy project exploration while maintaining professional presentation.

## Future Improvements
Add a contact form to allow visitors to send messages directly through the site. Implement a simple blog section to showcase technical writing skills and improve SEO.

Add a dark/light theme toggle for better user experience. Include a downloadable PDF version of my resume. Add loading animations for project images and smooth transitions between pages.

## Examples of Featured Work
- **[Binary Upload Boom](https://github.com/JackGer26/binary-upload-boom)** - Full-stack social network with image uploads and authentication
- **[100Jobs React Board](https://github.com/JackGer26/100Jobs)** - Modern React SPA with component architecture and state management
- **[Movie Watchlist Tracker](https://github.com/JackGer26/MVC-Passport-Movie-App)** - MVC application with Passport.js authentication and MongoDB