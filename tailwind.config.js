/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-missing-require */
const colors = require('tailwindcss/colors');

module.exports = {
	purge: [],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.lightBlue,
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			warmGray: colors.warmGray,
			trueGray: colors.trueGray,
			gray: colors.gray,
			blueGray: colors.blueGray,
			coolGray: colors.coolGray,
		},
		extend: {
			flex: {
				'2': '2 2 0%',
				'3': '3 3 0%',
			},
			height: {
				'112': '28rem',
				'128': '32rem',
			},
			minHeight: {
				'96': '24rem',
			},
			maxHeight: {
				'half-screen': '50vh',
			},
			zIndex: {
				'90': '90',
			},
		},
	},
	variants: {
		accessibility: ['focus-within', 'focus'],
		alignContent: [],
		alignItems: ['responsive'],
		alignSelf: ['responsive'],
		animation: [],
		appearance: [],
		backgroundAttachment: [],
		backgroundClip: [],
		backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
		backgroundImage: [],
		backgroundOpacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
		backgroundPosition: [],
		backgroundRepeat: [],
		backgroundSize: ['responsive'],
		borderCollapse: [],
		borderColor: ['dark', 'group-hover', 'focus-within', 'hover', 'focus'],
		borderOpacity: ['group-hover', 'focus-within', 'hover', 'focus'],
		borderRadius: ['responsive'],
		borderStyle: [],
		borderWidth: ['responsive'],
		boxShadow: ['group-hover', 'focus-within', 'hover', 'focus'],
		boxSizing: [],
		clear: [],
		cursor: [],
		display: ['responsive'],
		divideColor: ['responsive', 'dark'],
		divideOpacity: [],
		divideStyle: [],
		divideWidth: [],
		fill: [],
		flex: ['responsive'],
		flexDirection: ['responsive'],
		flexGrow: ['responsive'],
		flexShrink: ['responsive'],
		flexWrap: ['responsive'],
		float: [],
		fontFamily: [],
		fontSize: ['responsive'],
		fontSmoothing: [],
		fontStyle: ['responsive'],
		fontVariantNumeric: [],
		fontWeight: ['responsive'],
		gap: ['responsive'],
		gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
		gridAutoColumns: ['responsive'],
		gridAutoFlow: ['responsive'],
		gridAutoRows: ['responsive'],
		gridColumn: ['responsive'],
		gridColumnEnd: ['responsive'],
		gridColumnStart: ['responsive'],
		gridRow: ['responsive'],
		gridRowEnd: ['responsive'],
		gridRowStart: ['responsive'],
		gridTemplateColumns: ['responsive'],
		gridTemplateRows: ['responsive'],
		height: ['responsive'],
		inset: ['responsive'],
		justifyContent: ['responsive'],
		justifyItems: ['responsive'],
		justifySelf: ['responsive'],
		letterSpacing: ['responsive'],
		lineHeight: ['responsive'],
		listStylePosition: ['responsive'],
		listStyleType: ['responsive'],
		margin: ['responsive'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		objectFit: ['responsive'],
		objectPosition: ['responsive'],
		opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
		order: ['responsive'],
		outline: ['responsive', 'focus-within', 'focus'],
		overflow: ['responsive'],
		overscrollBehavior: [],
		padding: ['responsive'],
		placeContent: ['responsive'],
		placeItems: ['responsive'],
		placeSelf: ['responsive'],
		placeholderColor: ['responsive', 'dark', 'focus'],
		placeholderOpacity: ['responsive', 'focus'],
		pointerEvents: ['responsive'],
		position: ['responsive'],
		resize: ['responsive'],
		ringColor: ['dark', 'focus-within', 'hover', 'focus'],
		ringOffsetColor: ['dark', 'focus-within', 'hover', 'focus'],
		ringOffsetWidth: ['focus-within', 'hover', 'focus'],
		ringOpacity: ['focus-within', 'hover', 'focus'],
		ringWidth: ['focus-within', 'hover', 'focus'],
		rotate: ['hover', 'focus'],
		scale: ['hover', 'focus'],
		skew: ['hover', 'focus'],
		space: ['responsive'],
		stroke: [],
		strokeWidth: [],
		tableLayout: [],
		textAlign: ['responsive'],
		textColor: ['dark', 'group-hover', 'focus-within', 'hover', 'focus'],
		textDecoration: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
		textOpacity: [],
		textOverflow: [],
		textTransform: [],
		transform: [],
		transformOrigin: [],
		transitionDelay: [],
		transitionDuration: [],
		transitionProperty: [],
		transitionTimingFunction: [],
		translate: ['hover', 'focus'],
		userSelect: ['responsive'],
		verticalAlign: ['responsive'],
		visibility: ['responsive'],
		whitespace: ['responsive'],
		width: ['responsive'],
		wordBreak: ['responsive'],
		zIndex: [],
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		({addComponents, theme}) => {
			const container = {
				'.container': {
					margin: 'auto',
					maxWidth: theme('maxWidth.full'),

					// Breakpoints
					'@screen sm': {
						maxWidth: theme('maxWidth.2xl'),
					},
					'@screen md': {
						maxWidth: theme('maxWidth.3xl'),
					},
					'@screen lg': {
						maxWidth: theme('maxWidth.5xl'),
					},
					'@screen xl': {
						maxWidth: theme('maxWidth.6xl'),
					},
					'@screen 2xl': {
						maxWidth: theme('maxWidth.7xl'),
					},
				},
			};
			addComponents(container);
		},
	],
};
