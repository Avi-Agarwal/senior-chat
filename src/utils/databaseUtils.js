import firebase from '../database/database.secrets';

export const syncTables = (updateData) => {
	const firestoreDB = firebase.firestore();
	const tablesRef = firestoreDB.collection('tables');

	tablesRef.orderBy('creationTime').onSnapshot((snapshot) => {
		let tempData = {};
		snapshot.forEach((table) => {
			console.log(table.data());
			const currTable = table.data();
			tempData[currTable.id] = currTable;
		});
		// console.log(tempData);
		updateData(tempData);
	});
};


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
