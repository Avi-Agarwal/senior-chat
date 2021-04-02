import React from 'react';
import Box from '@material-ui/core/Box';
import {Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
// import homeImage from '../assets/images/117297019_l.jpg'

const useStyles  = makeStyles({
	contentWrapper: {
		paddingTop: 'max(2vh, 30px)',
		paddingLeft: 'max(4vw, 40px)',
		paddingRight: '4%'
	},
	homePhoto : {
		margin: 'auto',
		height: '5%',
		objectFit: 'contain'
	},
	lineBreak: {
		height: '.2rem',
		width: '94%',
		borderWidth: 0,
		color: '#6D50DE',
		backgroundColor: '#6D50DE',
		marginTop: '.15rem',
		marginLeft: '0.5%'
	}
});

const HomePage = () => {
	const classes = useStyles();
	const titleText = 'Senior Chat'
	const homeSubtitle = 'A fun place for seniors and others to come together and talk!'

	return (
		<Box className={classes.contentWrapper}>
			<Grid container spacing={3}>
				<Grid item xs={12}  >
					<Box style={{width: 'fit-content'}}>
						<Typography variant='h1'>{titleText}</Typography>
						<hr className={classes.lineBreak}/>
					</Box>
					<Typography variant='h2'>{homeSubtitle}</Typography>
				</Grid>
				<Grid item xs={6}>
					{/*<img className={classes.homePhoto} src={homeImage}/>*/}
				</Grid>
			</Grid>
		</Box>
	);
}

export default HomePage;
