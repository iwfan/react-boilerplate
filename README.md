# LLM friendly React Boilerplate

A modern React boilerplate uses the latest React and integrates a series of excellent development tools and best practices. This project is aim to porvide another option for people who prefer not to use React Server Component.

## ✨ Features

- 🚀 Fast development and building with [Vite](https://vitejs.dev/)
- ⚛️ Latest [React 19](https://react.dev/) with React Router
- 🎨 Styling with [Tailwind CSS](https://tailwindcss.com) and [Class Variance Authority](https://cva.style/)
- 📝 Full TypeScript support
- 🧪 Testing with [Vitest](https://vitest.dev)
- 🎯 Code quality with ESLint and Prettier
- 📊 Bundle analysis
- 🌐 Internationalization with i18next
- 🚦 Git hooks and commit lint (coming soon)
- 📦 Semantic Release (coming soon)

## 🔧 Prerequisites

- Node.js >= 20.0.0
- pnpm >= 10.0.0

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/react-boilerplate.git
cd react-boilerplate

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Visit http://localhost:5173 to view your application.

### Building

```bash
# Build for production
pnpm build

# Preview the build
pnpm preview
```

### Testing

```bash
# Run tests
pnpm test
```

### Linting

```bash
# Run ESLint
pnpm lint
```

## 📁 Project Structure

```
src/
├── assets/        # Static assets
├── components/    # Reusable components
├── pages/         # Page components
├── shared/        # Shared utilities and types
│   └── i18n/      # Internationalization configuration
├── App.tsx        # Root component
├── AppRoutes.tsx  # Route configuration
└── main.tsx       # Application entry point
```

## 🛠 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router
- **Styling:** Tailwind CSS, Class Variance Authority
- **Testing:** Vitest, Testing Library
- **Code Quality:** ESLint, Prettier
- **Type Checking:** TypeScript
- **Package Manager:** pnpm
- **Internationalization:** i18next, react-i18next

## 🔍 Development Guide

### Styling

The project uses Tailwind CSS for styling, combined with Class Variance Authority for reusable component variants.

### Routing

Route configuration is located in `src/AppRoutes.tsx`, implemented using React Router.

### Internationalization

The project uses i18next for internationalization. Language files are located in `src/shared/i18n/locales/`. To add a new language:

1. Create a new language folder in `src/shared/i18n/locales/`
2. Add translation files following the existing structure
3. Update the language list in `src/components/LanguageSwitcher.tsx`

Currently supported languages:
- English (en-US)
- Chinese (zh-CN)

### Testing

- Vitest as the test runner
- React Testing Library for component testing
- Test files use the `.test.tsx` extension

## 📝 Environment Variables

The project supports the following environment configurations:

- `.env.development` - Development environment settings
- `.env.production` - Production environment settings
- `.env.test` - Test environment settings

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Thanks to all the developers who have contributed to this project!

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Class Variance Authority Documentation](https://cva.style/docs)
- [i18next Documentation](https://www.i18next.com)
