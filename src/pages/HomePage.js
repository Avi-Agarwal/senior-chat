import React from 'react';
import '../App.css';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Introduction from '../components/IntroductonText';
// import TableCard from '../components/TableCard';
import '../assets/mockData/tableMockData'
import { tableMockDataObject } from '../assets/mockData/tableMockData';
import CreateTableDialog from '../components/CreateTableDialog';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../database/database.secrets';
import { getUser, updateUser } from '../utils/user';
import VoiceChatList from '../components/VoiceChatList';

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
	// const firebaseRef = firebase.database().ref().child('tables');
	const firestoreDB = firebase.firestore();
	// eslint-disable-next-line no-unused-vars
	const [data, updateData] = React.useState(getMockData());
	const [dialogState, updateDialogState] = React.useState(false);

	// Initialize User
	let currUser = getUser();

	React.useEffect(async () => {
		const tablesRef = firestoreDB.collection('tables');

		// Realtime Updates
		tablesRef.orderBy('creationTime').onSnapshot((snapshot) => {
			// Make object
			let tempData = {};
			snapshot.forEach((table) => {
				console.log(table.data());
				const currTable = table.data();
				tempData[currTable.id] = currTable;
				// tempData.push(table.data())
			});
			// console.log(tempData);
			updateData(tempData);
		});

		// Get Data Once
		// tablesRef.get().then((snapshot) => {
		// 	let tempData = [];
		// 	tempData = tempData.concat(getMockData())
		// 	snapshot.forEach((table) => {
		// 		console.log(table.id);
		// 		console.log(table.data()); // returns an object
		// 		tempData.push(table.data())
		// 	});
		// 	console.log(data);
		// 	console.log(tempData);
		// 	updateData(tempData);
		// });

		// Real time DB
		// firebaseRef.on('value', (snapshot) => {
		// 	// updateData([]);
		// 	let tempData = [];
		// 	tempData = tempData.concat(getMockData())
		// 	const tableData = snapshot.val();
		// 	console.log(tableData);
		// 	for (const tableID in tableData) {
		// 		console.log(tableData[tableID]);
		// 		tempData.push(tableData[tableID]);
		// 	}
		//
		// 	console.log(data);
		// 	console.log(tempData);
		// 	// updateData([]);
		// 	updateData(tempData);
		// })
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
		const tableUuid = uuidv4().toString();
		const newTable = {
			tableName: tableName,
			maxUsers: maxUsers,
			topics: topics,
			id: tableUuid,
			creationTime: firebase.firestore.FieldValue.serverTimestamp(),
			usersArray: [currUser.id]
		}
		currUser.table = newTable.id;
		updateUser(currUser);

		// make this add for object
		data[newTable.id] = newTable
		updateData(data);

		//Firebase
		// firebase.database().ref( 'tables/' + newTable.uuid.toString() ).set( newTable );
		// const db = firebase.firestore();
		// newTable.tableName.replace(/\s/g, '') + '-' + newTable.uuid
		firestoreDB.collection('tables').doc(newTable.tableName.replace(/\s/g, '') + '-' + newTable.id).set( newTable );
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
