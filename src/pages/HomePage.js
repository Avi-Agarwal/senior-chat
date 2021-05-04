import React from 'react';
import '../App.css';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import homeImage from '../assets/images/117297019_l.jpg'
import Introduction from '../components/Introducton';
// import TableCard from '../components/TableCard';
import StartTable from '../components/StartTable';
import '../assets/mockData/tableMockData'
import { tableMockData } from '../assets/mockData/tableMockData';
import TableCard from '../components/TableCard';
import CreateTableDialog from '../components/CreateTableDialog';
import { v4 as uuidv4 } from 'uuid';
import firebase from '../utils/firebase.secrets';

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
	return tableMockData;
}

const HomePage = () => {
	const classes = useStyles();
	// const firebaseRef = firebase.database().ref().child('tables');
	const firestoreDB = firebase.firestore();
	// eslint-disable-next-line no-unused-vars
	const [data, updateData] = React.useState(getMockData());
	const [dialogState, updateDialogState] = React.useState(false);

	React.useEffect(async () => {
		const tablesRef = firestoreDB.collection('tables');

		// Realtime Updates
		tablesRef.orderBy('creationTime').onSnapshot((snapshot) => {
			let tempData = [];
			tempData = tempData.concat(getMockData())
			snapshot.forEach((table) => {
				console.log(table.id);
				console.log(table.data()); // returns an object
				tempData.push(table.data())
			});
			console.log(data);
			console.log(tempData);
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
		console.log('opened');
	};

	const handleClose = () => {
		updateDialogState(false);
		console.log('closed');
	};

	const tableCreation = (tableName, maxUsers, topics)  => {
		const newTable = {
			tableName: tableName,
			maxUsers: maxUsers,
			activeUsers: 1,
			topics: topics,
			uuid: uuidv4(),
			creationTime: firebase.firestore.FieldValue.serverTimestamp()
		}
		data.push(newTable);
		updateData(data);

		//Firebase
		// firebase.database().ref( 'tables/' + newTable.uuid.toString() ).set( newTable );
		// const db = firebase.firestore();
		firestoreDB.collection('tables').doc(newTable.uuid).set( newTable );
	}

	return (
		<Box className={classes.contentWrapper}>
			<Grid container spacing={6}>
				<Grid item xs={12}  style={{ position: 'relative' }}>
					<Box className={'headerWrapper'}>
						<Introduction/>
						<img className={classes.homePhoto} src={homeImage}/>
					</Box>
				</Grid>
			</Grid>
			<Box className={'voiceChatWrapper'}>
				{
					data.map( ( table, index ) => (
						<TableCard key={table.uuid} index={index} data={table}/>
					) )
				}
				<StartTable tableCount={data.length} handleClickOpen={handleClickOpen}/>
			</Box>
			<CreateTableDialog open={dialogState} handleClose={handleClose} tableCreation={tableCreation}/>
		</Box>
	);
}

export default HomePage;
