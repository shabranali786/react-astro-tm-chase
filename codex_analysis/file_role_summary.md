# File Role Summary

## Root Directory Files

### `astro.config.mjs`
- **Purpose**: Main configuration file for the Astro build tool
- **Role**: Defines integrations, build settings, and font optimization settings
- **Key Features**: React integration, font optimization for Google Fonts, build optimization settings

### `package.json`
- **Purpose**: Project metadata and dependency management
- **Role**: Defines project dependencies, scripts, and configuration
- **Key Dependencies**: Astro, React integration, Tailwind CSS, Swiper, TW Elements

### `tsconfig.json`
- **Purpose**: TypeScript configuration for the project
- **Role**: Defines TypeScript compiler options and extends Astro's strict config
- **Key Features**: JSX support for React components

### `tailwind.config.js`
- **Purpose**: Tailwind CSS configuration file
- **Role**: Defines content paths, plugins, and theme settings
- **Key Features**: TW Elements integration, dark mode support

### `README.md`
- **Purpose**: Project documentation
- **Role**: Provides project overview, structure information, and commands

## Source Directory Structure

### `src/components/`
- **Purpose**: Reusable Astro components
- **Role**: Atomic UI components used across pages
- **Files**:
  - `BrandRegister.astro` - Displays registered brands section
  - `HeroSection.astro` - Main hero banner with call-to-action
  - `LPHeroSection.astro` - Landing page specific hero section
  - `OfferSlider.astro` - Service offerings carousel using Swiper
  - `ServicesSlider.astro` - Alternative services slider (if exists)

### `src/layouts/`
- **Purpose**: Page layout templates
- **Role**: Provide consistent structure for different site sections
- **Subdirectories**:
  - `web/` - Standard website layouts
    - `Layout.astro` - Main website layout with header and client router
    - `Header.astro` - Navigation header with multiple dropdowns
  - `lp/` - Landing page layouts
    - `Layout.astro` - Landing page layout template
    - `Header.astro` - Landing page specific header
    - `Footer.astro` - Landing page specific footer

### `src/pages/`
- **Purpose**: Route definitions and page-specific content
- **Role**: Defines routes and combines components into complete pages
- **Files**:
  - `index.astro` - Homepage with hero section and service offerings
  - `about.astro` - About Us page
  - `contact.astro` - Contact page
  - `services.astro` - Services page
  - `posts/[id].astro` - Dynamic route for individual posts
  - `lp/` subdirectory - Landing page routes
    - `register-your-trademark.astro` - Trademark registration landing page

### `src/react/`
- **Purpose**: React components integrated with Astro
- **Role**: Provides React components that can be used alongside Astro components
- **Files**:
  - `demo.jsx` - Simple React component example
  - `components/` - React component directory (if exists)

### `src/assets/`
- **Purpose**: Static assets and resources
- **Role**: Stores images, icons, and other static resources
- **Note**: Directory exists but content not examined in detail

## Public Directory
- **Purpose**: Static assets served directly by the web server
- **Role**: Contains assets like CSS, images, and other files that don't need processing
- **Content**: Contains CSS files (including Tailwind output) and other static assets

## Build/Output Directories

### `dist/`
- **Purpose**: Production build output
- **Role**: Contains the statically generated site ready for deployment

### `.astro/`
- **Purpose**: Astro's temporary and cache files
- **Role**: Stores collections and font data for optimization features

## Configuration Files Summary
- **astro.config.mjs**: Framework configuration
- **tsconfig.json**: TypeScript settings
- **tailwind.config.js**: CSS framework settings
- **package.json**: Project dependencies and scripts