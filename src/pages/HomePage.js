import React from 'react';
import '../App.css';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Introduction from '../components/IntroductonText';
import '../assets/mockData/tableMockData'
import { tableMockDataObject } from '../assets/mockData/tableMockData';
import CreateTableDialog from '../components/CreateTableDialog';
import VoiceChatList from '../components/VoiceChatList';
import { createTableUtil } from '../utils/tableUtils';
import { syncTables } from '../utils/databaseUtils';

const useStyles  = makeStyles( {
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
} );

const getMockData = () =>  {
	return tableMockDataObject;
}

const HomePage = () => {
	const classes = useStyles();
	// eslint-disable-next-line no-unused-vars
	const [data, updateData] = React.useState(getMockData());
	const [dialogState, updateDialogState] = React.useState(false);

	React.useEffect(async () => {
		syncTables(updateData);
	},[])

	const handleClickOpen = () => {
		updateDialogState(true);
		// console.log('opened');
	};

	const handleClose = () => {
		updateDialogState(false);
		// console.log('closed');
	};

	const tableCreation = (tableName, maxUsers, topics)  => {
		createTableUtil(tableName, maxUsers, topics, data, updateData);
	}

	return (
		<Box className={classes.contentWrapper}>
			<Introduction/>
			<VoiceChatList data={data} handleClickOpen={handleClickOpen}/>
			<CreateTableDialog open={dialogState} handleClose={handleClose} tableCreation={tableCreation}/>
		</Box>
	);
}

export default HomePage;
