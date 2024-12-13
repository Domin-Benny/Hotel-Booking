import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "room": "url('/images/bg.images/bedroom.jpg')",
        "conference": "url('/images/bg.images/conference.jpg')",
        "event": "url('/images/bg.images/event.jpg')",
        "restaurant": "url('/images/bg.images/restaurant.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
