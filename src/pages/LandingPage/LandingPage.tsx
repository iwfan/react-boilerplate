import React, { JSX } from "react";

// Helper for gradient text
const GradientText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <span
      className={`bg-gradient-to-r from-[#C084FC] to-[#7E22CE] bg-clip-text text-transparent ${className || ""}`}
    >
      {children}
    </span>
  );
};

// Helper for gradient background
const GradientBg: React.FC<{
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  href?: string;
}> = ({ children, className, as = "div", href }) => {
  const Component = as;
  const commonProps = {
    className: `bg-gradient-to-r from-[#C084FC] to-[#7E22CE] ${className || ""}`,
  };
  if (href && Component === "a") {
    return (
      <a href={href} {...commonProps}>
        {children}
      </a>
    );
  }
  return <Component {...commonProps}>{children}</Component>;
};

// --- Icon Components ---
const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`h-5 w-5 ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M10 3a.75.75 0 01.75.75v.008A3.004 3.004 0 0113 7.524C13 9.243 11.42 10.5 10 10.5A3.004 3.004 0 017 7.524V3.75A.75.75 0 0110 3zM8.912 11.518a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 101.06 1.062L8.5 13.005V16.5a.75.75 0 001.5 0v-3.495l1.088 1.087a.75.75 0 101.06-1.062l-1.5-1.5a.75.75 0 00-1.06 0z"
      clipRule="evenodd"
    />
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.25 5.25v.037a4.503 4.503 0 002.996 4.013C12.66 9.61 13 9.99 13 10.5c0 .828-.672 1.5-1.5 1.5h-3A1.5 1.5 0 017 10.5c0-.51.34-.89.754-1.2L9.25 5.25z" />
  </svg>
);

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={`h-5 w-5 ${className}`}
  >
    <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
    <path d="M10 11.955c.264 0 .52-.026.768-.075l.006-.002L11.79 11.5l.01-.002L12.24 11.3a2.25 2.25 0 001.26-2.05 2.379 2.379 0 00-.92-1.745 2.379 2.379 0 00-1.745-.92 2.25 2.25 0 00-2.05 1.26l-.226.438-.002.01-.327.638-.002.006a2.51 2.51 0 00-.075.768c0 1.38 1.12 2.5 2.5 2.5z" />
  </svg>
);

const PuzzlePieceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={`h-6 w-6 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56v4.82M15.59 14.37A6 6 0 0018.23 12H12.11m3.48 2.37A6 6 0 0115.59 14.37m-5.84 7.38v-4.82m0 0a6 6 0 016.34-6.06M12.11 12H18.23m-7.86 4.37A6 6 0 019.75 12H3.86m7.86 4.37V12m6.34-6.06A6 6 0 0012.11 0H9.75m2.36 6.06A6 6 0 003.86 6H2.25m1.61 0H12.11m0 0V0m0 6.06v6.34m0-6.34H9.75M3.86 6H2.25m13.34 0h-1.61"
    />
  </svg>
);

const PaintBrushIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={`h-6 w-6 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.39m3.421 1.756a15.975 15.975 0 001.622-3.39m3.75 0a15.995 15.995 0 00-1.622 3.39m-3.42 1.756l-1.063 1.839A15.975 15.975 0 0110.25 16.122zm7.032-3.39a15.975 15.975 0 00-1.622-3.39m0 0c-.247.037-.5.06-.75.06A4.5 4.5 0 009.75 12.75c0 .25.023.498.06.745m3.42-1.756a15.975 15.975 0 00-1.622 3.39"
    />
  </svg>
);

const TestTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={`h-6 w-6 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075-5.925l.075 5.925m9.75-5.925l.075 5.925M9.75 16.125a1.575 1.575 0 10-3.15 0v3m3.15-3L12 12.75l6 6m-15-6l6-6l6 6"
    />
  </svg>
);

const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={`h-5 w-5 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-1.5m-6-9V3.75m0 3.75a3 3 0 11-6 0 3 3 0 016 0zM12 12.75v3.75m0-3.75a3 3 0 116 0 3 3 0 01-6 0z"
    />
  </svg>
);

const GlobeAltIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={`h-5 w-5 ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-5.834A8.959 8.959 0 003 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0012 16.5c2.998 0 5.74 1.1 7.843 2.918"
    />
  </svg>
);

const IconPurple: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        className: `${child.props.className || ""} text-[#7E22CE]`,
      });
    }
    return child;
  });
};

// --- Reusable Components ---
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={`rounded-[20px] bg-white p-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05),_0_4px_6px_-2px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.07),_0_10px_10px_-5px_rgba(0,0,0,0.07)] ${className || ""}`}
    >
      {children}
    </div>
  );
};

interface TagPillProps {
  children: React.ReactNode;
}

const TagPill: React.FC<TagPillProps> = ({ children }) => {
  return (
    <span className="mr-2 mb-2 inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
      {children}
    </span>
  );
};

// --- Main App Component ---
const App: React.FC = () => {
  const iconPurpleClass = "mr-2 mt-0.5 flex-shrink-0 text-[#7E22CE]"; // Common class for purple icons

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4 font-['Inter',_sans-serif] sm:p-6 lg:p-8">
      <main className="w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Main Announcement */}
          <Card className="md:col-span-2 lg:col-span-2">
            <h1 className="mb-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              <GradientText>LLM friendly React Boilerplate</GradientText>
            </h1>
            <p className="mb-4 text-base text-slate-600 sm:text-lg">
              一个现代的 React 脚手架，采用最新的 React
              技术栈，并集成了一系列优秀的开发工具和最佳实践。
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <LightBulbIcon className={iconPurpleClass} />
                <p className="text-sm text-slate-500">
                  专为不倾向使用 React Server Component 的开发者设计。
                </p>
              </div>
              <div className="flex items-start">
                <SparklesIcon className={iconPurpleClass} />
                <p className="text-sm text-slate-500">
                  开箱即用，快速启动您的下一个项目。
                </p>
              </div>
            </div>
          </Card>

          {/* Card 2: Why Choose? */}
          <Card className="flex flex-col items-center justify-center text-center">
            <h2 className="mb-2 text-xl font-semibold text-slate-800 sm:text-2xl">
              告别 RSC 烦恼
            </h2>
            <p className="mb-3 px-2 text-sm text-slate-600">
              专注于客户端渲染的极致体验。拥抱最新 React 特性，无需复杂配置。
            </p>
            <p className="text-5xl font-bold">
              <GradientText>100%</GradientText>
            </p>
            <p className="text-xs text-slate-500">Client-Side Focus</p>
          </Card>

          {/* Card 3: Core Tech Stack */}
          <Card>
            <h2 className="mb-4 flex items-center text-xl font-semibold text-slate-800">
              <IconPurple>
                <PuzzlePieceIcon className="mr-2" />
              </IconPurple>
              核心技术栈
            </h2>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600">
                <strong>Vite:</strong> 极速开发与构建
                <div>
                  <TagPill>Vite</TagPill>
                  <TagPill>HMR</TagPill>
                </div>
              </li>
              <li className="text-sm text-slate-600">
                <strong>React 19:</strong> 最新 React 版本
                <div>
                  <TagPill>React 19</TagPill>
                  <TagPill>Router</TagPill>
                </div>
              </li>
              <li className="text-sm text-slate-600">
                <strong>TypeScript:</strong> 全面类型支持
                <div>
                  <TagPill>TypeScript</TagPill>
                </div>
              </li>
            </ul>
          </Card>

          {/* Card 4: Styling & DX */}
          <Card>
            <h2 className="mb-4 flex items-center text-xl font-semibold text-slate-800">
              <IconPurple>
                <PaintBrushIcon className="mr-2" />
              </IconPurple>
              现代化样式与 DX
            </h2>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600">
                <strong>Tailwind CSS:</strong> 功能优先的 CSS 框架
                <div>
                  <TagPill>TailwindCSS</TagPill>
                </div>
              </li>
              <li className="text-sm text-slate-600">
                <strong>Class Variance Authority:</strong> 可组合的组件变体
                <div>
                  <TagPill>CVA</TagPill>
                </div>
              </li>
              <li className="text-sm text-slate-600">
                <strong>ESLint & Prettier:</strong> 代码规范与格式化
                <div>
                  <TagPill>ESLint</TagPill>
                  <TagPill>Prettier</TagPill>
                </div>
              </li>
            </ul>
          </Card>

          {/* Card 5: Testing & Quality */}
          <Card>
            <h2 className="mb-4 flex items-center text-xl font-semibold text-slate-800">
              <IconPurple>
                <TestTubeIcon className="mr-2" />
              </IconPurple>
              测试与质量保障
            </h2>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600">
                <strong>Vitest:</strong> 由 Vite 驱动的极速单元测试
                <div>
                  <TagPill>Vitest</TagPill>
                  <TagPill>Testing</TagPill>
                </div>
              </li>
              <li className="text-sm text-slate-600">
                <strong>🚦 Git Hooks & Commit Lint:</strong> 自动化代码提交检查
                <div>
                  <TagPill>Husky</TagPill>
                  <TagPill>Commitlint</TagPill>
                </div>
              </li>
            </ul>
          </Card>

          {/* Card 6: Advanced Features & CTA */}
          <Card className="md:col-span-2 lg:col-span-3">
            <h2 className="mb-6 text-xl font-semibold text-slate-800 sm:text-2xl">
              更多特性与行动
            </h2>
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-medium text-slate-700">
                  进阶特性
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-slate-600">
                    <IconPurple>
                      <ChartBarIcon className="mt-0.5 mr-2 flex-shrink-0" />
                    </IconPurple>
                    <div>
                      <strong>Bundle Analysis:</strong> 打包分析，优化产物体积
                      <div>
                        <TagPill>Optimization</TagPill>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start text-sm text-slate-600">
                    <IconPurple>
                      <GlobeAltIcon className="mt-0.5 mr-2 flex-shrink-0" />
                    </IconPurple>
                    <div>
                      <strong>Internationalization (i18next):</strong>{" "}
                      支持多语言
                      <div>
                        <TagPill>i18n</TagPill>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start justify-center md:items-end">
                <p className="mb-4 text-left text-sm text-slate-600 md:text-right">
                  为您的下一个大型语言模型应用提供坚实、高效的前端基础。
                </p>
                <GradientBg
                  as="a"
                  href="#"
                  className="mb-3 inline-block w-full rounded-lg px-8 py-3 text-center text-base font-semibold text-white shadow-md transition-all duration-300 ease-in-out hover:shadow-lg md:w-auto"
                >
                  🚀 即刻开始
                </GradientBg>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-sm font-medium text-purple-600 hover:text-purple-800"
                  >
                    View on GitHub
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-purple-600 hover:text-purple-800"
                  >
                    阅读文档
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-purple-600 hover:text-purple-800"
                  >
                    参与贡献
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default App;

// To make this runnable in a typical React + TS setup, you would:
// 1. Save this as App.tsx in your src folder.
// 2. Ensure you have React, ReactDOM, and TypeScript installed.
// 3. Ensure Tailwind CSS is set up in your project (e.g., via PostCSS).
//    Your tailwind.config.js should be configured to scan .tsx files.
// 4. Your main index.tsx (or main.tsx) would look something like:
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Assuming your Tailwind base styles are imported here

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
*/
// 5. You'd need an index.html file with a <div id="root"></div>.
// 6. The Inter font should be linked in your main HTML file or imported via CSS.
//    Example in index.html:
//    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
//    And your main CSS (e.g., index.css) should apply it to the body:
//    body { font-family: 'Inter', sans-serif; }
//    (This is already handled by the body className in the App component for this standalone example)
