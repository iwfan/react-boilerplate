export default {
  welcome: "欢迎使用 React Boilerplate",
  features: {
    title: "特性",
    vite: "使用 Vite 实现快速开发和构建",
    react: "使用最新的 React 19 和 React Router",
    styling: "使用 Tailwind CSS 和 Class Variance Authority 进行样式管理",
    typescript: "完整的 TypeScript 支持",
    testing: "使用 Vitest 进行测试",
    quality: "使用 ESLint 和 Prettier 确保代码质量",
    responsive: "响应式设计支持",
    hmr: "热模块替换 (HMR)",
    bundle: "构建产物分析",
    typeSafety: "类型安全",
    i18n: "国际化支持",
  },
  actions: {
    switchLanguage: "切换语言",
    login: "登录",
    logout: "退出",
    register: "注册",
  },
  nav: {
    home: "首页",
    about: "关于",
    contact: "联系我们",
  },
  theme: {
    light: "浅色",
    dark: "深色",
    system: "自动",
    toggle: "切换主题",
  },
} as const;
