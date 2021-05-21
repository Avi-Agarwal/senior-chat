import { v4 as uuidv4 } from 'uuid';

export const tableMockDataObject = {
	'2c8b21c5-006f-49a3-8c24-b66afccd128e': {
		tableName: 'Grace\'s',
		activeUsers: 2,
		maxUsers: 5,
		topics: 'Children, Retirement, Life Stories',
		id: '2c8b21c5-006f-49a3-8c24-b66afccd128e',
		usersArray: ['user-temp']
	},
	'4d4e953f-132f-4045-85d7-3001c0f7c6e2': {
		tableName: 'Anxiety',
		activeUsers: 4,
		maxUsers: 5,
		topics: 'Anxiety, Depresion',
		id: '4d4e953f-132f-4045-85d7-3001c0f7c6e2',
		usersArray: ['user-temp']
	},
	'5c0747b7-6a2f-4a08-8bf2-0b490b14e7f1': {
		tableName: 'Steve',
		activeUsers: 5,
		maxUsers: 5,
		topics: 'Children, Retirement, Life Stories',
		id: uuidv4(),
		usersArray: ['user-temp']
	},
	'52897aef-c7ed-4d6d-ab46-1d4485334627': {
		tableName: 'Say Smile',
		activeUsers: 4,
		maxUsers: 8,
		topics: 'Senior companionship, company building',
		id: uuidv4(),
		usersArray: ['user-temp']
	},
	'dca55c69-daf7-4569-ae9d-55f82acf22c8': {
		tableName: 'Avi\'s',
		activeUsers: 1,
		maxUsers: 2,
		topics: 'Meaning of Life',
		id: uuidv4(),
		usersArray: ['user-temp']
	}
};


export const tableMockDataArray = [
	{
		tableName: 'Grace\'s',
		activeUsers: 2,
		maxUsers: 5,
		topics: 'Children, Retirement, Life Stories',
		uuid: uuidv4(),
		usersArray: ['user-temp']
	},
	{
		tableName: 'Anxiety',
		activeUsers: 4,
		maxUsers: 5,
		topics: 'Anxiety, Depresion',
		uuid: uuidv4(),
		usersArray: ['user-temp']
	},
	{
		tableName: 'Steve',
		activeUsers: 5,
		maxUsers: 5,
		topics: 'Children, Retirement, Life Stories',
		uuid: uuidv4(),
		usersArray: ['user-temp']
	},
	{
		tableName: 'Say Smile',
		activeUsers: 4,
		maxUsers: 8,
		topics: 'Senior companionship, company building',
		uuid: uuidv4(),
		usersArray: ['user-temp']
	},
	{
		tableName: 'Avi\'s',
		activeUsers: 1,
		maxUsers: 2,
		topics: 'Meaning of Life',
		uuid: uuidv4(),
		usersArray: ['user-temp']
	}
];
