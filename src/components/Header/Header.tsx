import { ThemeToggle } from '../ThemeToggle';
import LanguageSwitcher from '../LanguageSwitcher';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const header = cva(
  [
    'fixed',
    'top-0',
    'left-0',
    'right-0',
    'z-50',
    'flex',
    'items-center',
    'justify-between',
    'px-6',
    'py-4',
    'bg-white/80',
    'dark:bg-gray-900/80',
    'backdrop-blur-sm',
    'border-b',
    'border-gray-200',
    'dark:border-gray-700',
  ],
  {
    variants: {
      variant: {
        default: ['bg-white/80', 'dark:bg-gray-900/80'],
        transparent: ['bg-transparent', 'border-transparent'],
        solid: ['bg-white', 'dark:bg-gray-900'],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof header> {
  showLanguageSwitcher?: boolean;
  showThemeToggle?: boolean;
}

export function Header({
  className,
  variant,
  showLanguageSwitcher = true,
  showThemeToggle = true,
  children,
  ...props
}: HeaderProps) {
  return (
    <header className={twMerge(header({ variant, className }))} {...props}>
      <div className="flex items-center gap-4">
        {children}
      </div>
      <div className="flex items-center gap-3">
        {showLanguageSwitcher && <LanguageSwitcher />}
        {showThemeToggle && <ThemeToggle />}
      </div>
    </header>
  );
};

export default Header;