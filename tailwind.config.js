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
		borderColor: {
			DEFAULT: "#3b82f6",
		}
	  },
	plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
	darkMode: 'class'
};
