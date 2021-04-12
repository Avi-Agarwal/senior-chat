import Button from '@material-ui/core/Button';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
// import theme from '../Theme';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const useStyles = makeStyles( {
	cardStyle : {
		paddingLeft: '39px',
		paddingRight: '39px',
		paddingTop: '27px',
		paddingBottom: '26px',
		marginBottom: '4.5vh',
		// marginBottom: '2.5vh',
		borderRadius: '40px',
		width: '320px',
		height: '250px'
		// height: 'fit-content',
		// minHeight: '250px'
		// minHeight: '226px'
	},
	button : {
		backgroundColor: 'white',
		width: '150px',
		height: '44px',
		borderRadius: '30px',
		marginTop: 'auto'
	}
} )

const cheekyStyle = ( cardColor ) => {
	const cardCheeky = {
		backgroundColor: cardColor,
		marginRight: '1.5vw',
		marginLeft: '1.5vw'
	}

	return cardCheeky;
}

const colorWheel = ['#E5DEF0', '#D6EDD9', '#F6F0D8', '#E6F2FE', '#F0DEDE', '#D6EDED']

const StartTable = ( { tableCount } ) => {
	const classes = useStyles();
	const cardColor = colorWheel[tableCount%colorWheel.length];

	return (
		<Paper elevation={0}  style={cheekyStyle( cardColor )} className={classes.cardStyle}>
			<Box className={'tableContentWrapper'}>
				<Typography variant='h3'>Start A Table</Typography>
				<Typography variant='h4'>:D</Typography>
				<Typography variant='caption'>Create a new table to host a conversation!</Typography>
				<Button className={classes.button}>Create</Button>
			</Box>
		</Paper>
	);
}

StartTable.propTypes = {
	tableCount: PropTypes.number.isRequired
};

export default StartTable;
