import { v4 as uuidv4 } from 'uuid';
import firebase from '../database/database.secrets';
import { getUser, updateUser } from './userUtils';
import { leaveTable, startTable, joinTableDB, getTableID } from './databaseUtils';

export const createTable = (tableName, maxUsers, topics)  => {
	const currUser = getUser();
	// const firestoreDB = firebase.firestore();

	const tableUuid = uuidv4().toString();
	const newTable = {
		tableName: tableName,
		maxUsers: maxUsers,
		topics: topics,
		UUID: tableUuid,
		tableID: tableName.replace(/\s/g, '') + '-' + tableUuid,
		creationTime: firebase.firestore.FieldValue.serverTimestamp(),
		usersArray: []
	}

	//Firebase
	startTable(newTable);
	console.log('startTable Finished');

	// If user is part of a table, leave that table
	if (currUser.tableID != null) {
		console.log('User Part of other table ' + currUser.tableID);
		leaveTable( currUser.tableID, currUser ).then( r  => console.log('Leave Table Finished ', r));
	}

	joinTable( newTable.tableID ).then( r => console.log(r) );
};

export const joinTable = async (currTableID) => {
	const currUser = getUser();
	let userFeedBack = '';

	console.log(currUser);

	// If user is currently in a table, leave it
	if (currUser.tableID) {
		const oldTable = JSON.parse(currUser.tableData);
		console.log(currUser.tableID);

		await leaveTable( currUser.tableID, currUser )
		userFeedBack = userFeedBack + `Left ${oldTable.tableName}.`;
	}

	const joinTableSuccess = await joinTableDB( currTableID, currUser );
	console.log(joinTableSuccess);
	console.log('Join Table DB Finished');
	if (joinTableSuccess) {
		const newTable = JSON.parse(currUser.tableData);
		userFeedBack = userFeedBack + `Joined ${newTable.tableName}`;
	} else {
		userFeedBack = 'Failed to Join Table';
	}
	console.log(userFeedBack);
	return userFeedBack;
};


