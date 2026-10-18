/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--theme-bg)',
          bgSubtle: 'var(--theme-bg-subtle)',
          card: 'var(--theme-card)',
          cardHover: 'var(--theme-card-hover)',
          border: 'var(--theme-border)',
          borderSubtle: 'var(--theme-border-subtle)',
          text: 'var(--theme-text)',
          muted: 'var(--theme-muted)',
          accent: 'var(--theme-accent)',
          accentAlt: 'var(--theme-accent-alt)',
          cta: 'var(--theme-cta)',
          ctaHover: 'var(--theme-cta-hover)',
          ctaText: 'var(--theme-cta-text)',
        },
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
