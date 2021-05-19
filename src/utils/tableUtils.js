import { v4 as uuidv4 } from 'uuid';
import firebase from '../database/database.secrets';
import { getUser, updateUser } from './user';

export const createTableUtil = (tableName, maxUsers, topics, data, updateData)  => {
	const currUser = getUser();
	const firestoreDB = firebase.firestore();

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

