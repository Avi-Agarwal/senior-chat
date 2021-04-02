import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles  = makeStyles({
	contentWrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	homePhoto : {
		height: '20vh',
		objectFit: 'contain'
	},
	lineBreak: {
		height: '.2rem',
		width: '94%',
		borderWidth: 0,
		color: '#6D50DE',
		backgroundColor: '#6D50DE',
		marginTop: '.1rem',
		marginLeft: '0.5%'
	}
});

const Introduction = () => {
	const classes = useStyles();
	const titleText = 'Senior Chat';
	const homeSubtitle = 'A fun place for seniors and others to come together and talk!';
	const voiceText = 'Voice Chat Tables';
	const voiceSubtitle = 'Feel Free to sit down and join a conversation';

	return(
		<Box>
			<Box style={{width: 'fit-content'}}>
				<Typography variant='h1'>{titleText}</Typography>
				<hr className={classes.lineBreak}/>
			</Box>
			<Typography variant='subtitle1'>{homeSubtitle}</Typography>
			<Box style={{width: 'fit-content', paddingTop: '4vh'}}>
				<Typography variant='h2'>{voiceText}</Typography>
			</Box>
			<Typography variant='subtitle2'>{voiceSubtitle}</Typography>
		</Box>
	);
};

export default Introduction;
