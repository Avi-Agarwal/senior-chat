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
			fontSize: '2rem',
			fontWeight: 900,
			textAlign: 'left'
			// textDecoration: 'underline .2rem solid #6D50DE'
			// borderBottom: '.2rem solid #6D50DE '
		},
		h2:  {
			color: '#454545',
			fontSize: '1rem',
			fontWeight: 750,
			textAlign: 'left',
			paddingTop: '.5rem'
		}
	}
});

export default theme
