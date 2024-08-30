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
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'monst' : [ 'Montserrat', 'sans-serif'],
        'rale' : [ 'Raleway','sans-serif'],
        'mari' : ["Merriweather Sans", 'sans-serif'],
        'bubble':["Rubik Bubbles ", 'system-ui'],
     
      },
      screens: {
        'xss':'375px',
        'xs': '460px', // Custom extra small breakpoint
        'sm': '640px', // Default small breakpoint
        'md': '768px', // Default medium breakpoint
        'lg': '900px', // Default large breakpoint
        'sxl': '1000px', // Default extra-large breakpoint
        '1sxl': '1100px', // Default extra-large breakpoint
        '2sxl': '1200px', // Default extra-large breakpoint
        'xl': '1340px', // Default extra-large breakpoint
        // '2xl': '1536px', // Default 2xl breakpoint
        // Add your custom breakpoints here
      },
      animation: {
        'text-slide': 'text-slide 12s cubic-bezier(0.63, 0, 0.17, 1) infinite',
    },
    keyframes: {
        'text-slide': {
            '0%, 25%': {
                transform: 'translateY(0%)',
            }, 
            '31.25%, 56.25%': {
              transform: 'translateY(-25%)',
          },
            '62.5%, 87.5%': {
              transform: 'translateY(-50%)',
          },
            '100%': {
              transform: 'translateY(-75%)',
          },
          
        },       
      },
    },
  },
  plugins: [],
}

