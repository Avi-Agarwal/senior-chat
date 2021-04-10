import Button from '@material-ui/core/Button';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import theme from '../Theme';
import {Typography} from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
	cardStyle : {
		padding: theme.spacing(3),
		marginBottom: '4.5vh',
		borderRadius: '40px',
		width: '320px',
		height: '250px'
	},
	button : {
		backgroundColor: 'white',
		width: '150px',
		height: '44px',
		borderRadius: '30px',
		marginTop: 'auto'
	}
})

const cheekyStyle = (cardColor) => {
	const cardCheeky = {
		backgroundColor: cardColor,
		marginRight: '1.5vw',
		marginLeft: '1.5vw'
	}

	return cardCheeky;
}

const colorWheel = ['#E5DEF0', '#D6EDD9', '#F6F0D8', '#E6F2FE', '#F0DEDE', '#D6EDED']

const TableCard = ({ tableCount }) => {
	const classes = useStyles();
	const cardColor = colorWheel[tableCount%colorWheel.length];

	return (
		<Paper elevation={0}  style={cheekyStyle(cardColor)} className={classes.cardStyle}>
			<Box className={'tableContentWrapper'}>
				<Typography variant='h3'>Grace&#39;s Table</Typography>
				<Typography variant='h4'>Talking: 4/5</Typography>
				<Typography variant='caption'>Topics: Children, Retirement</Typography>
				<Button className={classes.button}>Join</Button>
			</Box>
		</Paper>
	);
}

TableCard.propTypes = {
	tableCount: PropTypes.number.isRequired
};

export default TableCard;
