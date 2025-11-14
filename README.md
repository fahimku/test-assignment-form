# Figma Match - Assignment Form

A React project that replicates the Figma design with pixel-perfect accuracy.

## Features

- **Button Component**: Three yellow "Done" buttons with hover effects
- **Home Component**: List of checkboxes with various states (unchecked, indeterminate, checked)
- **Modal Component**: Interactive modal with input field, page list, avatars, and checkboxes

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

## Project Structure

```
test-assignment-form/
├── src/
│   ├── components/
│   │   ├── Button.jsx       # Button component
│   │   ├── Button.css
│   │   ├── Home.jsx         # Home component with checkboxes
│   │   ├── Home.css
│   │   ├── Modal.jsx        # Modal component
│   │   └── Modal.css
│   ├── App.jsx              # Main app component
│   ├── App.css
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- React 18.2.0
- Vite 5.0.8
- CSS3

## Component Details

### Button Component
- Yellow background (#FFD700)
- Black text
- Rounded corners
- Hover and active states

### Home Component
- List of 8 items with "All pages" text
- Each item has two checkboxes (small on left, large on right)
- Supports checked, unchecked, and indeterminate states
- Interactive checkbox functionality

### Modal Component
- White modal with rounded corners
- Input field with green border (focused state)
- List of pages with checkboxes
- Avatar icons for Page 1 (purple "k" and green "D")
- Yellow "Done" button at the bottom

## Design Reference

The design is based on the Figma file: [Figma Design Link](https://www.figma.com/design/dwBFtlKY933OJWWSrGPs5q/Frontend?node-id=0-1)

