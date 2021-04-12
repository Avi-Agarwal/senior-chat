import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme( {
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 768,
			lg: 1200,
			xl: 1400
		}
	},
	palette: {
		primary: {
			main: '#000000'
		},
		secondary: {
			main: '#6D50DE',
			// dark: will be calculated from palette.secondary.main,
			contrastText: '#ffcc00'
		},
		contrastThreshold: 3,
		tonalOffset: 0.2
	},
	typography: {
		fontFamily: 'Nunito',
		h1: {
			color: 'black',
			fontSize: '2.813rem',
			// Use this for mobile
			// '@media (max-width:600px)': {
			// 	fontSize: '1.5rem',
			// },
			fontWeight: 900,
			textAlign: 'left'
		},
		h2: {
			color: 'black',
			fontSize: '2.5rem',
			fontWeight: 900,
			textAlign: 'left'
		},
		h3: {
			color: 'black',
			fontSize: '2.3rem',
			fontWeight: 700,
			textAlign: 'left',
			paddingTop: '0rem'
		},
		h4: {
			color: '#AD99CE',
			fontSize: '1.563rem',
			fontWeight: 700,
			textAlign: 'left',
			paddingTop: '0.4rem',
			paddingLeft: '0.1rem',
			paddingBottom: '.3vh'
		},
		subtitle1:  {
			color: '#454545',
			fontSize: '1.563rem',
			fontWeight: 700,
			textAlign: 'left',
			paddingTop: '0rem',
			paddingLeft: '0.1rem'
		},
		subtitle2:  {
			color: '#868686',
			fontSize: '1.563rem',
			fontWeight: 700,
			textAlign: 'left',
			paddingTop: '0.2rem',
			paddingLeft: '0.1rem'
		},
		caption:  {
			color: '#7E7E7E',
			fontSize: '0.938rem',
			fontWeight: 700,
			textAlign: 'left',
			paddingTop: '0.4rem',
			paddingLeft: '0.14rem',
			lineHeight: '1.4rem'
		},
		button: {
			color: 'black',
			fontSize: '1.875rem',
			textTransform: 'capitalize',
			fontWeight: 700
		}
	}
} );

export default theme
