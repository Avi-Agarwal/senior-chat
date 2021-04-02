import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
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
			main: '#ff4400'
		},
		secondary: {
			light: '#0066ff',
			main: '#0044ff',
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
			fontWeight: 900,
			textAlign: 'left'
		},
		h2: {
			color: 'black',
			fontSize: '2.5rem',
			fontWeight: 900,
			textAlign: 'left'
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
		}
	}
});

export default theme
