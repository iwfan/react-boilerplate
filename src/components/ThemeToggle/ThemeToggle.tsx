import { useTheme, Theme } from '../../shared/theme';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

const themeToggle = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-lg',
    'p-2',
    'text-gray-600',
    'dark:text-gray-300',
    'hover:bg-gray-100',
    'dark:hover:bg-gray-800',
    'transition-colors',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-offset-2',
    'dark:focus:ring-offset-gray-900',
  ],
  {
    variants: {
      size: {
        sm: ['w-8', 'h-8', 'text-sm'],
        md: ['w-10', 'h-10', 'text-base'],
        lg: ['w-12', 'h-12', 'text-lg'],
      },
      variant: {
        ghost: [
          'bg-transparent',
          'hover:bg-gray-100',
          'dark:hover:bg-gray-800',
        ],
        outline: [
          'bg-transparent',
          'border',
          'border-gray-300',
          'dark:border-gray-600',
          'hover:bg-gray-50',
          'dark:hover:bg-gray-800',
        ],
        solid: [
          'bg-white',
          'dark:bg-gray-800',
          'shadow-sm',
          'hover:shadow-md',
        ],
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'ghost',
    },
  }
);

export interface ThemeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof themeToggle> {
  showLabel?: boolean;
}

const SunIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SystemIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

export function ThemeToggle({
  className,
  size,
  variant,
  showLabel = false,
  ...props
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { t } = useTranslation();

  const handleThemeChange = () => {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  const getIcon = () => {
    if (theme === 'system') {
      return <SystemIcon className="w-5 h-5" />;
    }
    return resolvedTheme === 'dark' ? (
      <MoonIcon className="w-5 h-5" />
    ) : (
      <SunIcon className="w-5 h-5" />
    );
  };

  const getLabel = () => {
    if (theme === 'system') {
      return t('theme.system', 'Auto');
    }
    return resolvedTheme === 'dark'
      ? t('theme.dark', 'Dark')
      : t('theme.light', 'Light');
  };

  return (
    <button
      type="button"
      onClick={handleThemeChange}
      className={twMerge(themeToggle({ size, variant, className }))}
      aria-label={t('theme.toggle', 'Toggle theme')}
      title={t('theme.toggle', 'Toggle theme')}
      {...props}
    >
      {getIcon()}
      {showLabel && (
        <span className="ml-2 text-sm font-medium">{getLabel()}</span>
      )}
    </button>
  );
}