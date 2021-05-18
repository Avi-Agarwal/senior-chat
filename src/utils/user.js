import { v4 as uuidv4 } from 'uuid';

export const getUser = () => {
	let currUser;
	if (localStorage.getItem('userSession') == null) {
		currUser = {
			id: 'user-' + uuidv4().toString(),
			table: null,
			icon: 'lion'
		};
		localStorage.setItem('userSession', JSON.stringify(currUser));
	} else {
		const userJson = localStorage.getItem('userSession');
		currUser = JSON.parse(userJson);
	}

	return currUser;
};

export const updateUser = (user) => {
	localStorage.setItem('userSession', JSON.stringify(user));
}

