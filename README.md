# Modern E-commerce Store

A full-featured e-commerce platform built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This project implements a modern, responsive design with a focus on user experience and performance.

## 🌐 Live Demo

Check out the live demo: [E-commerce Store](https://ecommerce-new-store.vercel.app/cart)

## 📸 Screenshots

### Home Page
![Home Page](./screenshots/Screenshot%202025-06-14%20003920.png)
### Product List
![Product List](./screenshots/Screenshot%202025-06-14%20003952.png)

### Shopping Cart
![Shopping Cart](./screenshots/Screenshot%202025-06-14%20003857.png)

## 🚀 Features

- **Modern Tech Stack**
  - Next.js 15.3.3
  - React 19
  - TypeScript
  - Tailwind CSS
  - Zustand for state management

- **Key Functionality**
  - Product browsing and filtering
  - Category-based navigation
  - Shopping cart management
  - Product preview modal
  - Responsive design
  - Dynamic routing
  - Server-side rendering

- **UI Components**
  - Custom product cards
  - Image gallery
  - Shopping cart interface
  - Navigation bar with actions
  - Billboard component for featured content
  - Toast notifications
  - Modal dialogs

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/shreenivas-nayakawadi/Ecommerce-new-store.git
cd Ecommerce-new-store
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── (routes)/          # Route groups
│   │   ├── cart/         # Shopping cart pages
│   │   ├── category/     # Category pages
│   │   └── product/      # Product pages
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── ui/              # Reusable UI components
│   ├── gallery/         # Image gallery components
│   └── ...              # Other components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── providers/           # Context providers
└── public/             # Static assets
```

## 🛍️ Key Components

- **Product List**: Displays products in a grid layout with filtering options
- **Product Card**: Individual product display with image, price, and actions
- **Shopping Cart**: Manages cart items with quantity controls
- **Navigation**: Responsive navigation with category menu
- **Preview Modal**: Quick product preview without page navigation

## 🎨 UI/UX Features

- Responsive design for all screen sizes
- Smooth animations and transitions
- Toast notifications for user feedback
- Modal dialogs for product previews
- Clean and modern interface

## 🛠️ Development

- **Build for production**:
```bash
npm run build
```

- **Start production server**:
```bash
npm start
```

- **Run linter**:
```bash
npm run lint
```

## 📦 Dependencies

- **Core**
  - Next.js 15.3.3
  - React 19
  - TypeScript
  - Tailwind CSS

- **UI Components**
  - @headlessui/react
  - lucide-react
  - react-hot-toast

- **State Management**
  - zustand

- **Utilities**
  - axios
  - class-variance-authority
  - clsx
  - tailwind-merge

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
