/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: {
                    light: '#ffffff',
                    dark: '#0f172a',
                },
                foreground: {
                    light: '#0f172a',
                    dark: '#f8fafc',
                },
                card: {
                    light: '#ffffff',
                    dark: '#1e293b',
                },
                'card-foreground': {
                    light: '#0f172a',
                    dark: '#f8fafc',
                },
                popover: {
                    light: '#ffffff',
                    dark: '#1e293b',
                },
                'popover-foreground': {
                    light: '#0f172a',
                    dark: '#f8fafc',
                },
                primary: {
                    light: '#7e22ce',
                    dark: '#c084fc',
                },
                'primary-foreground': {
                    light: '#f8fafc',
                    dark: '#0f172a',
                },
                secondary: {
                    light: '#f1f5f9',
                    dark: '#334155',
                },
                'secondary-foreground': {
                    light: '#0f172a',
                    dark: '#f8fafc',
                },
                muted: {
                    light: '#64748b',
                    dark: '#94a3b8',
                },
                'muted-foreground': {
                    light: '#64748b',
                    dark: '#94a3b8',
                },
                accent: {
                    light: '#f1f5f9',
                    dark: '#334155',
                },
                'accent-foreground': {
                    light: '#0f172a',
                    dark: '#f8fafc',
                },
                destructive: {
                    light: '#dc2626',
                    dark: '#ef4444',
                },
                'destructive-foreground': {
                    light: '#f8fafc',
                    dark: '#0f172a',
                },
                border: {
                    light: '#e2e8f0',
                    dark: '#334155',
                },
                input: {
                    light: '#e2e8f0',
                    dark: '#334155',
                },
                ring: {
                    light: '#7e22ce',
                    dark: '#c084fc',
                },
            },
            borderRadius: {
                lg: '0.5rem',
                md: '0.375rem',
                sm: '0.25rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};
