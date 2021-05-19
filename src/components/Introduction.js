import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import IntroductionText from './IntroductonText';
import homeImage from '../assets/images/117297019_l.jpg';
import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles  = makeStyles( {
	homePhoto : {
		marginTop: 0,
		// width: '100%',
		width: 'min(400px, 30vw)',
		objectFit: 'contain'
	}
} );

const Introduction = () => {
	const classes = useStyles();

	return(
		<Grid container spacing={6}>
			<Grid item xs={12}  style={{ position: 'relative' }}>
				<Box className={'headerWrapper'}>
					<IntroductionText/>
					<img className={classes.homePhoto} src={homeImage}/>
				</Box>
			</Grid>
		</Grid>
	);
}

export default Introduction;
