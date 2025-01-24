import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
            screens: {
        'custom': '1019px', // Define a custom breakpoint
      },
    },
  },
  plugins: [],
} satisfies Config;

// module.exports = {
//   theme: {
//     extend: {
//       screens: {
//         'custom': '1029px', // Define a custom breakpoint
//       },
//     },
//   },
//   plugins: [],
// };