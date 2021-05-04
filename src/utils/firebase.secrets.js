import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAVV51HtObPjRKJNI2IyrHPfCwk-JTiE9E',
	authDomain: 'senior-chat-fdf1b.firebaseapp.com',
	projectId: 'senior-chat-fdf1b',
	storageBucket: 'senior-chat-fdf1b.appspot.com',
	messagingSenderId: '117870800885',
	appId: '1:117870800885:web:58f7bd029ce43b9c71babc',
	measurementId: 'G-X3WF2J440T'
};
// Initialize Firebase secret check
firebase.initializeApp(firebaseConfig);

export default firebase;
