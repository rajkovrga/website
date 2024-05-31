/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
	],
	theme: {
		fontFamily: {
			'sans-serif': ['montserrat'],
			'montserrat': ['Montserrat'],
		},
		extend: {
		  spacing: {
			'8xl': '96rem',
			'9xl': '128rem',
		  },
		  borderRadius: {
			'4xl': '2rem',
		  },
		},
		borderColor: {
			DEFAULT: "#39396f",
		},
	  },
	plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
	darkMode: 'class'
};
