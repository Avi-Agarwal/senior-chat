import Button from '@material-ui/core/Button';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
// import theme from '../Theme';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { toTitleCase,  createTableTitle } from '../utils/generalUtils';

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
		// marginBottom: '24px'
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

const TableCard = ( { index, data } ) => {
	const classes = useStyles();
	const cardColor = colorWheel[index%colorWheel.length];

	// 10 max characters
	return (
		<Paper elevation={0}  style={cheekyStyle( cardColor )} className={classes.cardStyle}>
			<Box className={'tableContentWrapper'}>
				<Typography variant='h3'>{createTableTitle(data.tableName)}</Typography>
				<Typography variant='h4'>Talking: {toTitleCase(data.activeUsers)}/{toTitleCase(data.maxUsers)}</Typography>
				<Typography variant='caption'>Topics: {toTitleCase(data.topics)}</Typography>
				<Button color='white' onClick={()=>{console.log(data.uuid)}} className={classes.button}>Join</Button>
			</Box>
		</Paper>
	);
}

export default TableCard;