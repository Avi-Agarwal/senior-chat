import React from 'react';
import '../App.css';
import Box from '@material-ui/core/Box';
import {Grid} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import homeImage from '../assets/images/117297019_l.jpg'
import Introduction from '../components/Introducton';

const useStyles  = makeStyles({
	contentWrapper: {
		width: '100%',
		paddingTop: 'max(4.5vh, 30px)',
		paddingLeft: 'max(4vw, 40px)',
		paddingRight: 'max(4vw, 40px)',
		flexGrow: 1
	},
	homePhoto : {
		marginTop: 0,
		// width: '100%',
		width: 'min(400px, 30vw)',
		objectFit: 'contain'
	}
});

const HomePage = () => {
	const classes = useStyles();

	return (
		<Box className={classes.contentWrapper}>
			<Grid container spacing={6}>
				{/*<Grid item  xs={9} style={{position: 'relative'}}>*/}
				{/*	<Title/>*/}
				{/*	<Box style={{paddingTop: '5vh'}}>*/}
				{/*		<Title/>*/}
				{/*	</Box>*/}
				{/*</Grid>*/}
				{/*<Grid item xs={3} style={{position: 'relative'}}>*/}
				{/*	<img className={classes.homePhoto} src={homeImage}/>*/}
				{/*</Grid>*/}
				<Grid item xs={12}  style={{position: 'relative'}}>
					<Box className={'headerWrapper'}>
						<Introduction/>
						<img className={classes.homePhoto} src={homeImage}/>
					</Box>
				</Grid>
				<Grid item xs={12}  style={{position: 'relative'}}>
					<Box className={'bodyWrapper'}>
						<Introduction/>
						<img className={classes.homePhoto} src={homeImage}/>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default HomePage;
