import firebase from '../database/database.secrets';
import { updateUser } from './userUtils';


export const getTableID = (table) => {
	const tableDocName = table.tableName.replace(/\s/g, '') + '-' + table.id;
	return tableDocName;
}

export const getTableData = async (tableID) => {
	const firestoreDB = firebase.firestore();
	const tablesRef = firestoreDB.collection('tables').doc(tableID);
	const snapshot = await tablesRef.get().catch((error) => {
		console.log('Error getting document:', error);
		return null
	});

	const table = snapshot.data();

	// await tablesRef.get().then((snapshot) => {
	// 	if (snapshot.exists) {
	// 		const table = snapshot.data();
	// 		console.log('Document data:', table);
	// 		return table;
	// 	} else {
	// 		// doc.data() will be undefined in this case
	// 		const table = null;
	// 		console.log('No such document!');
	// 		return table;
	// 	}
	// }).catch((error) => {
	// 	console.log('Error getting document:', error);
	// 	return null
	// });
	
	return table;
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
		console.log('Synced Tables: ', tempData);
		updateData(tempData);
	});
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
