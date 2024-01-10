import withMT from '@material-tailwind/react/utils/withMT'
export default withMT({
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				ultraXl: '1729px',
			},
			colors: {
				'color-text-title': '#000B19',
				'color-text-chip-card': '#6F7C8F',
				'color-text-subtitle-inputItem': '#8F9DB2',
				'color-blue-accent-hover': '#0066DD',
				'color-blue-accent': '#2388FF',
				'color-sideBarButton-hover': '#CCE3FD',
				'color-sideBarButton-item': '#363D47',
				'color-chip': '#F0F7FF',
				'color-chip-hover': '#D3E7FF',
				'color-border': '#D6E2F1',
				'color-card-hover': '#E6F1FE',
				'color-error': '#E30000',
				'color-error-low': '#FCE6E6',
				'color-valid': '#18DB68',
				'color-valid-low': '#F0FFF6',
				'color-activeRegion': '#80B8FB',
				'color-notActiveRegion': '#D3E7FF',
			},
			fontFamily: {
				cygro: 'var(--font-cygro)',
				mursa: 'var(--font-mursGothic)',
			},
		},
	},
	plugins: [],
})
