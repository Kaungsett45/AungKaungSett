/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '7': '6px',
      },
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#1A8B9C',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#FF6F61',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'monst': ['Montserrat', 'sans-serif'],
        'rale': ['Raleway', 'sans-serif'],
        'mari': ["Merriweather Sans", 'sans-serif'],
        'bubble': ["Rubik Bubbles", 'system-ui'],
      },
      screens: {
        'xss': '375px',
        'xs': '460px',
        'sm': '640px',
        'md': '768px',
        'lg': '900px',
        'sxl': '1000px',
        '1sxl': '1100px',
        '2sxl': '1200px',
        'xl': '1340px',
        '2xl': '1536px',
      },
      animation: {
        'text-slide': 'text-slide 12s cubic-bezier(0.63, 0, 0.17, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 33%': {
            transform: 'translateY(0%)',
          },
          '55%, 88%': {
            transform: 'translateY(-33.33%)',
          },
          '100%': {
            transform: 'translateY(-63.33%)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'glow': {
          '0%': {
            boxShadow: '0 0 5px rgba(26, 139, 156, 0.5)',
          },
          '100%': {
            boxShadow: '0 0 20px rgba(26, 139, 156, 0.8)',
          },
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
      },
    },
  },
  plugins: [],
}

