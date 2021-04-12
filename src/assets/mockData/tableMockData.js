import { v4 as uuidv4 } from 'uuid';

export const tableMockData = [
	{
		tableName: 'Grace\'s',
		activeUsers: 2,
		maxUsers: 5,
		topics: 'Children, Retirement, Life Stories',
		uuid: uuidv4()
	},
	{
		tableName: 'Anxiety',
		activeUsers: 4,
		maxUsers: 5,
		topics: 'Anxiety, Depresion',
		uuid: uuidv4()
	},
	{
		tableName: 'Steve',
		activeUsers: 5,
		maxUsers: 5,
		topics: 'Children, Retirement, Life Stories',
		uuid: uuidv4()
	},
	{
		tableName: 'Say Smile',
		activeUsers: 4,
		maxUsers: 8,
		topics: 'Senior companionship, company building',
		uuid: uuidv4()
	},
	{
		tableName: 'Avi\'s',
		activeUsers: 1,
		maxUsers: 2,
		topics: 'Meaning of Life',
		uuid: uuidv4()
	}
]
