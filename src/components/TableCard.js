import Button from '@material-ui/core/Button';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import { toTitleCase,  createTableTitle } from '../utils/generalUtils';
import { joinTable } from '../utils/tableUtils';
import { getTableID } from '../utils/databaseUtils';
import { Blip } from './Blip';

const useStyles = makeStyles( {
	cardStyle : {
		paddingLeft: '39px',
		paddingRight: '39px',
		paddingTop: '27px',
		paddingBottom: '26px',
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
		marginTop: 'auto',
		'&:hover': {
			backgroundColor: '#FFFFFF'
		}
	},
	titleStyle : {
		width: '105%',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden'
	},
	topicStyle : {
		width: '100%',
		overflowWrap: 'breakWord',
		wordWrap: 'break-word'
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

const joinTableHandler = async (data, userCount, updateBlipInfo ) => {
	if (userCount >= data.maxUsers) {
		updateBlipInfo({
			blipNeeded: true, message: 'Table Full', type: 'warning'
		})
	} else {
		const userFeedBack = await joinTable(data.tableID || getTableID(data));
		console.log('Table Card Feedback: ', userFeedBack);
		updateBlipInfo({
			blipNeeded: true, message: userFeedBack, type: userFeedBack.includes('Failed ') ? 'error' :'success'
		})
	}
	
}

const colorWheel = ['#E5DEF0', '#D6EDD9', '#F6F0D8', '#E6F2FE', '#F0DEDE', '#D6EDED']

const TableCard = ( { index, data } ) => {
	const classes = useStyles();
	const cardColor = colorWheel[index%colorWheel.length];
	const tableTitle = createTableTitle(data.tableName);
	const usersArray = data.usersArray;
	const activeUsers = usersArray.length;
	if (!usersArray) {console.log('bad usersArray'); console.log(data);}

	const [blipInfo, updateBlipInfo] = React.useState({
		blipNeeded: false, message: 'default', type: 'success'
	})

	return (
		<>
			<Paper elevation={0}  style={cheekyStyle( cardColor )} className={classes.cardStyle}>
				<Box className={'tableContentWrapper'}>
					<Tooltip title={tableTitle} arrow placement="bottom-end">
						<Typography variant='h3' className={classes.titleStyle}>{tableTitle || ''}</Typography>
					</Tooltip>
					<Typography variant='h4'>Talking: {toTitleCase(activeUsers)}/{toTitleCase(data.maxUsers || '')}</Typography>
					<Typography variant='caption' className={classes.topicStyle}>Topics: {toTitleCase(data.topics || '')}</Typography>
					<Button color='white' onClick={() => joinTableHandler(data,activeUsers, updateBlipInfo )} className={classes.button}>Join</Button>
				</Box>
			</Paper>
			{
				blipInfo.blipNeeded ?
					<Blip
						message={blipInfo.message}
						type={blipInfo.type}
						externalClose={() => { updateBlipInfo({ blipNeeded: false }) } }
					/>
					: null
			}
		</>
	);
}

export default TableCard;
