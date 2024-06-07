import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPrimary: '#21252b',
        darkSecondary: '#333841',
        whitePrimary: '#f6f8fc',
        whiteSecondary: '#fff',
        borderColor: '#efefef',
        blockBorderColorDark: '#464646',
        blockBorderColorLight: '#efefef',
        secondTextColor: '#616161',
        secondTextColorDark: '#C0C0C0',
        accentBg: '#6767ab29',
      },
      maxWidth: {
        textContainer: '680px',
      },
      typography: () => ({
        custom: {
          css: {
            '--tw-prose-body': 'var(--light-text-color)',
            '--tw-prose-headings': 'var(--light-text-color)',
            '--tw-prose-links': 'var(--light-text-color)',
            '--tw-prose-bold': 'var(--light-text-color)',
            '--tw-prose-invert-links': 'var(--dark-text-color)',
            '--tw-prose-invert-bold': 'var(--dark-text-color)',
            '--tw-prose-invert-body': 'var(--dark-text-color)',
            '--tw-prose-invert-headings': 'var(--dark-text-color)',
            
            // ...
          },
        }
      }),
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      }
    },
    fontFamily: {
      sans: ['var(--font-open-sans)'],
      boss: ['var(--font-raleway)'],
      playfair: ['var(--font-playfair-display)'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
