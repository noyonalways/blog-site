/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			screens: {
				DEFAULT: "100%",
				sm: "640px",
				md: "768px",
				lg: "990px",
				xl: "1024px",
				"2xl": "1100px",
			},
			margin: {
				DEFAULT: "0.8rem",
				sm: "2rem",
				md: "4rem",
				lg: "4.5rem",
				xl: "5rem",
				"2xl": "5.5rem",
			},
		},
		extend: {
			fontFamily: {
				hindSiliguri: ["Hind Siliguri", "sans-serif"],
				spaceGrotesk: ["Space Grotesk", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				dark: "#121212",
				primary: {
					500: "#19a0e4",
					600: "#0284c7",
				},
			},
			backgroundImage: {
				dark: "url('/bg.jpg')",
				light: "url('/light.png')",
				grid: "url('/grid-bg.svg')",
			},
			
		},
	},
	plugins: [],
};
