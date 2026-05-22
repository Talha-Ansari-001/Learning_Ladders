# Renaissance Preschool Project Overview

## Project Description
Renaissance Preschool is a high-end educational institution's website designed to showcase its unique pedagogical approach, premium facilities, and developmental programs. The website aims to attract parents by highlighting a blend of traditional prestige and modern innovation in early childhood education.

## Technical Stack
- **Framework:** React 18.3.1 (TypeScript)
- **Build Tool:** Vite 5.3.1
- **Styling:** Tailwind CSS 3.4.4, PostCSS, Autoprefixer
- **Icons:** Material Symbols Outlined (Google Fonts)
- **Typography:** Literata (Serif) and Plus Jakarta Sans (Sans-serif)
- **UI Components:** Built using custom Tailwind classes for a "terracotta" aesthetic.

## Architecture
The project follows a standard Vite + React structure:
- `src/main.tsx`: Entry point.
- `src/App.tsx`: Contains the entire application logic, state management, and UI sections.
- `src/index.css`: Global styles and Tailwind directives.
- `src/assets/`: Contains images used in the application.

## Key Features & Sections

### 1. Navigation & Accessibility
- **Sticky Header:** Floating navigation bar with smooth backdrop blur.
- **Mobile Menu:** Full-screen overlay for mobile navigation.
- **Sticky Call Button:** Persistent call-to-action for mobile users to contact admissions.

### 2. Hero Section
- **Branding:** Focus on "Love & Laughter" as a core learning value.
- **Visuals:** Floating grid of high-quality classroom and activity images.
- **CTA:** Primary "Enroll Your Child" and "Call Admissions" buttons.

### 3. Philosophy Section
- **Core Values:** Emotional Security, Experiential Play, and Advanced Readiness.
- **Interactivity:** Scroll-triggered animations for philosophy cards.

### 4. Developmental Programs
- **Tabbed Interface:** Easy navigation between Play Group, Pre-Kindergarten, and Kindergarten.
- **Age-Specific Content:** Tailored descriptions and curriculum download options for each level.
- **Quick Comparison:** A modal-based table for easy program differentiation.

### 5. Campus Facilities
- **Visual Gallery:** Showcasing smart classrooms and child-safe environments.
- **Interactive Hover Effects:** Captions providing more details on each facility.

### 6. Location & Contact
- **Interactive Map:** Visual representation of the campus location.
- **Contact Details:** Clear address, multiple phone numbers, and operational hours.
- **Tour Request Form:** Integrated validation for name, email, and program selection.

### 7. Social Proof
- **Testimonial Marquee:** Scrolling quotes from parents emphasizing the school's impact.

## Assets
The project utilizes several thematic images located in `src/assets/`:
- `child_painting.png` (Logo placeholder)
- `teacher_reading.png` (Map placeholder)
- Smart classroom and children activity photos (JPEG/PNG).

## Configuration
- `tailwind.config.js`: Custom theme configuration including "terracotta-soft" shadows, custom spacing, and typography tokens.
- `package.json`: Manages dependencies including Tailwind plugins like `@tailwindcss/forms` and `@tailwindcss/container-queries`.
