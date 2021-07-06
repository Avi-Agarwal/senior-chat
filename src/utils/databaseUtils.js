import firebase from '../database/database.secrets';
import { updateUser } from './userUtils';
import { tableMockDataObject } from '../assets/mockData/tableMockData';


export const getTableID = (table) => {
	const tableDocName = table.tableName.replace(/\s/g, '') + '-' + table.id;
	return tableDocName;
}

export const getTableData = async (tableID) => {
	const firestoreDB = firebase.firestore();
	const tablesRef = firestoreDB.collection('tables').doc(tableID);
	try {
		const snapshot = await tablesRef.get();
		if (snapshot.exists) {
			const table = snapshot.data();
			return table;
		} else {
			console.log('No such document');
			return null;
		}
	} catch (error) {
		console.error('Error getting document:', error);
		return null;
	}
}

export const updateTable = (tablesRef, field, data) => {
	return tablesRef.update({
		[field]: data
	}).then(()=>{
		return true;
	}).catch((error) => {
		console.error('Error updating document: ', error);
		return false;
	});
}

export const deleteTable = (tablesRef) => {
	tablesRef.delete().then(() => {
		console.log('Document successfully deleted!');
		return true;
	}).catch((error) => {
		console.error('Error removing document: ', error);
		return false;
	});
}

export const syncTables = (updateData) => {
	const firestoreDB = firebase.firestore();
	const tablesRef = firestoreDB.collection('tables');
	tablesRef.orderBy('creationTime').onSnapshot((snapshot) => {
		let tempData = {};
		snapshot.forEach((table) => {
			const currTable = table.data();
			tempData[currTable.id || currTable.UUID] = currTable;
		});
		// console.log('Synced Tables: ', tempData);
		updateData(tempData);
	}, (error => {
		console.log('Sync Error ', error);
		updateData(tableMockDataObject);
	}));
};

export const startTable = (newTable) => {
	//Firebase
	const firestoreDB = firebase.firestore();
	firestoreDB.collection('tables').doc(newTable.tableID).set( newTable );
}

export const leaveTable = async (tableID, user) => {
	const firestoreDB = firebase.firestore();
	const tablesRef = firestoreDB.collection('tables').doc(tableID);
	const tableData = await getTableData(tableID);

	console.log('Leave Table table data: ', tableData);
	if (!tableData) { return false; }
	
	let userArray = tableData.usersArray
	userArray = userArray.filter(item => item !== user.id);
	user.tableID = null;
	user.tableData = null;
	updateUser(user);

	if (userArray.length <= 0) {
		console.log('deleting table: ', tableData.tableName)
		return deleteTable(tablesRef)
	}

	return updateTable(tablesRef, 'usersArray', userArray);
	// return tablesRef.update({
	// 	usersArray: userArray
	// }).then(()=>{
	// 	return true;
	// }).catch((error) => {
	// 	console.error('Error updating document: ', error);
	// });
}

export const joinTableDB = async (tableID, user) => {
	const firestoreDB = firebase.firestore();
	const tablesRef = firestoreDB.collection('tables').doc(tableID);
	const table = await getTableData(tableID);

	console.log('table Data: ', table);
	if (!table) {return false;}

	let userArray = table.usersArray;
	// Check if user already in array
	if (userArray.includes(user.id)) { return false; }

	userArray.push(user.id);
	table.usersArray = userArray;
	user.tableID = table.tableID;
	user.tableData = JSON.stringify(table);

	updateUser(user);
	return updateTable(tablesRef, 'usersArray', userArray)
}
// OLD EXAMPLES
// ------------
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
