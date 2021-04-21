import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Blip = ({ message, type, externalClose = () => {}, ...props  }) => {
	const [open, setOpen] = React.useState(true);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		externalClose();
		setOpen(false);
	};

	return (
		<>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} {...props}>
				<Alert onClose={handleClose} severity={type}>
					{message}
				</Alert>
			</Snackbar>
		</>
	// <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
	// 	<Alert onClose={handleClose} severity="success">
	// 		This is a success message!
	// 	</Alert>
	// </Snackbar>
	// <Alert severity="error">This is an error message!</Alert>
	// <Alert severity="warning">This is a warning message!</Alert>
	// <Alert severity="info">This is an information message!</Alert>
	// <Alert severity="success">This is a success message!</Alert>
	);
}

export default Blip;
