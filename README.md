# react-vite-tailwind-app

This is a React application set up with Vite and styled using Tailwind CSS. The project follows modern frontend best practices and is structured for scalability and reusability.

## Installation

To get started with the project, run the following commands:

1. npm create vite@latest react-vite-tailwind-app --template react
2. cd react-vite-tailwind-app
3. npm install
4. npm install -D tailwindcss postcss autoprefixer
5. npx tailwindcss init -p

## Tailwind CSS Setup

### Configuration

In `tailwind.config.js`, add paths to your template files:

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Styles

In `src/styles/tailwind.css`, import Tailwind's base, components, and utilities:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Project Structure

The project is organized as follows:

```
src/
├── assets/          # Static assets like images and fonts
├── components/      # Reusable React components
├── sections/        # Section components for larger UI parts
├── pages/           # Page components for different routes
├── hooks/           # Custom React hooks
├── styles/          # CSS styles
│   ├── globals.css  # Global CSS styles
│   └── tailwind.css # Tailwind CSS imports
├── App.jsx          # Main application component
└── main.jsx         # Entry point of the application
```

## Global Styles

In `src/styles/globals.css`, define global styles:

```css
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #1a202c; /* Dark background */
  color: #f7fafc; /* Light text */
}
```

## Reusable Design System Suggestions

- **Button Component**: Create a reusable button component with props for styles, sizes, and click handlers.
- **Section Wrapper**: Create a section wrapper component that applies consistent padding and margin.
- **Container Utility Classes**: Define utility classes for consistent layout, such as max-width and padding.
- **Dark Theme**: Use Tailwind's dark mode feature to apply dark styles based on user preference or system settings.

## License

This project is licensed under the MIT License.