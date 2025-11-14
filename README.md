# Quick Form Styling - Assignment Form

A React project that replicates the Figma design with pixel-perfect accuracy. This project implements a page selection modal form matching the exact specifications from the Figma design.

## Features

- **Modal Component**: Interactive page selection form with:
  - Header section with "All pages" text and checkbox
  - Page list with individual checkboxes (Page 1-4)
  - Separator lines with proper spacing
  - Yellow "Done" button with hover effects
  - Custom styled checkboxes with blue selected state
  - Inter font family matching Figma design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

The project uses GitHub Actions to automatically deploy to GitHub Pages whenever you push to the `main` branch.

**Deployment URL**: https://fahimku.github.io/test-assignment-form/

### Manual Deployment Steps

1. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Monitor deployment**:
   - Go to the "Actions" tab in your GitHub repository
   - Watch the workflow run and complete
   - Once successful, your site will be live at the deployment URL

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Build the React app
- Deploy it to GitHub Pages automatically

## Project Structure

```
test-assignment-form/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── src/
│   ├── components/
│   │   ├── Modal.jsx        # Modal form component
│   │   └── Modal.css        # Modal styles
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles and font setup
├── public/
│   └── react-favicon.svg    # React favicon
├── index.html               # HTML entry point with Inter font
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React 18.2.0
- Vite 5.0.8
- CSS3
- Inter Font (Google Fonts)

## Component Details

### Modal Component

The main component is a page selection modal form that includes:

**Header Section:**
- "All pages" text label
- Unchecked checkbox on the right
- Thin separator line below with 20px side margins

**Page List Section:**
- Four page items (Page 1, Page 2, Page 3, Page 4)
- Each page has a checkbox on the right
- Page 2 is checked by default (blue background with white checkmark)
- Hover effects on page items
- Custom styled checkboxes with:
  - Gray border when unchecked
  - Blue background (#2563EB) when checked
  - White checkmark icon perfectly centered
  - Smooth transitions

**Footer Section:**
- Thin separator line above button with 20px side margins
- Yellow "Done" button (#FFD700)
- Button has 20px margins on all sides
- Hover and active states

**Styling Features:**
- Inter font family (weights 400 and 500)
- Rounded corners (8px modal, 4px checkboxes)
- Subtle shadow and border
- Proper spacing and padding throughout
- Responsive design

## Design Reference

The design is based on the Figma file:
- [Figma Design](https://www.figma.com/design/dwBFtlKY933OJWWSrGPs5q/Frontend?node-id=0-1)
- [Figma Prototype](https://www.figma.com/proto/dwBFtlKY933OJWWSrGPs5q/Frontend?node-id=1-140&p=f&t=Qi8iJ8qcH1nHFEVV-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

## Design Specifications

- **Font**: Inter (weights 400 and 500)
- **Colors**:
  - Checkbox selected: #2563EB (blue)
  - Checkbox border: #D1D5DB (gray)
  - Separator: #E5E7EB (light gray)
  - Button: #FFD700 (yellow)
  - Text: #333333 (dark gray)
- **Spacing**: 20px horizontal padding throughout
- **Border Radius**: 8px (modal), 4px (checkboxes)
- **Checkbox Size**: 18px × 18px

