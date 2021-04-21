// import React from 'react';

export const toTitleCase = ( str ) => {
	const newStr = str.toString().toLowerCase()
		.split( ' ' )
		.map( ( s ) => s.charAt( 0 ).toUpperCase() + s.substring( 1 ) )
		.join( ' ' );
	return newStr
}

export const createTableTitle = ( str ) => {
	if (str.toString().length < 8) {
		return toTitleCase(str) + ' Table';
	}
	else {
		return toTitleCase(str);
	}
}

// 13 Char max to title
