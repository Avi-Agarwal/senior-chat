import Button from '@material-ui/core/Button';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import theme from '../Theme';

const useStyles = makeStyles({
	cardStyle : {
		padding: theme.spacing(3),
		marginBottom: '50px',
		borderRadius: '40px',
		width: '320px',
		height: '250px'
	}
})

const cheekyStyle = (tableCount, cardColor) => {
	const cardCheeky = {
		backgroundColor: cardColor,
		marginRight: '20px',
		marginLeft: '20px'
	}

	return cardCheeky;
}

const colorWheel = ['#E5DEF0', '#D6EDD9', '#F6F0D8', '#E6F2FE', '#F0DEDE', '#D6EDED']


const TableCard = ({ tableCount }) => {
	const classes = useStyles();
	const cardColor = colorWheel[tableCount%colorWheel.length - 1];

	return (
		<Paper elevation={0}  style={cheekyStyle(tableCount, cardColor)} className={classes.cardStyle}>
			<p>Grace&#39;s Table</p>
			<p>Talking: 4/5</p>
			<p>Topics: Children, Retirement</p>
			<Button>Join</Button>
		</Paper>
	);
}

TableCard.propTypes = {
	tableCount: PropTypes.number.isRequired
};

export default TableCard;
