import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles( {
	dialogStyle: {
		borderRadius: '80px',
		backgroundColor: '#6D50DE'
	},
	lineBreak: {
		height: '.125rem',
		width: '94%',
		borderWidth: 0,
		color: '#6D50DE',
		backgroundColor: '#6D50DE',
		// marginTop: '.1rem',
		marginTop: '.15vh',
		marginLeft: '2%'
	},
	button : {
		backgroundColor: 'white',
		width: '150px',
		height: '44px',
		borderRadius: '30px',
		marginTop: 'auto'
		// marginBottom: '24px'
	}
} )

const dialogStyle = {
	borderRadius: '20px',
	border: '2px solid black',
	width: '80vw',
	maxWidth: '650px'
}

export const CreateTableDialog  = ({ open = false, handleClose, tableCreation }) => {
	const classes = useStyles();
	const [tableName, updateTableName] = React.useState('');
	const [topics, updateTopics] = React.useState('');
	// eslint-disable-next-line no-unused-vars
	const [maxPeople, updateMaxPeople] = React.useState(1);

	const handleSliderChange = (event, newValue) => {
		updateMaxPeople(newValue);
	};

	const valuetext = (value) => {
		return `${value} Max People`;
	}

	return (
		<>
			<Dialog open={open} onClose={handleClose} PaperProps={{ style: dialogStyle }}>
				<Grid container direction="column" justify="flex-start" alignItems="flex-start" style={{ marginLeft: '6%', width: '94%' }}>
					<Grid item xs={12}>
						<Box style={{ width: 'fit-content', marginTop: '29px' }}>
							<Typography variant='h3'>Table Creation</Typography>
							<hr className={classes.lineBreak}/>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<TextField
							autoFocus
							id="tableName"
							label="Table Name"
							type="text"
							helperText={'Table Name (11 character max)'}
							margin='normal'
							onChange={({ target }) => {
								target.value.length < 12 ?  updateTableName(target.value): null ;
							}}
							value={tableName}
							color="primary"
							required
							style={{ marginBottom: '50px' }}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							autoFocus
							id="topics"
							label="Topics"
							type="text"
							helperText={'What topics would you like to discuss'}
							margin='normal'
							onChange={({ target }) => {
								updateTopics(target.value);
							}}
							value={topics}
							color="secondary"
							required
						/>
					</Grid>
					<Grid item xs={9}>
						<Typography variant='subtitle1'>Max People on the Table</Typography>
						<Slider
							defaultValue={1}
							getAriaValueText={valuetext}
							valueLabelDisplay="auto"
							step={1}
							marks
							onChange={handleSliderChange}
							min={1}
							max={6}
							style={{ marginLeft: '.5vw' }}
						/>
					</Grid>
					<Grid item xs={12}>
						<Box style={{ marginBottom: '18px' }}>
							<Button
								onClick={() => {
									tableCreation( tableName, maxPeople, topics );
									handleClose();
								}
								}
							>
								Create
							</Button>
							<Button onClick={handleClose} color="primary">
								Cancel
							</Button>
						</Box>
					</Grid>
					{/*<DialogContent>*/}
					{/*	<DialogContentText>*/}
					{/*		To subscribe to this website, please enter your email address here. We will send updates*/}
					{/*		occasionally.*/}
					{/*	</DialogContentText>*/}
					{/*	<TextField*/}
					{/*		autoFocus*/}
					{/*		id="tableName"*/}
					{/*		label="Table Name"*/}
					{/*		type="text"*/}
					{/*		helperText={'13 Character Table Name'}*/}
					{/*		margin='normal'*/}
					{/*		onChange={({ target }) => {*/}
					{/*			updateTableName(target.value);*/}
					{/*		}}*/}
					{/*		value={tableName}*/}
					{/*		color="secondary"*/}
					{/*		required*/}
					{/*	/>*/}
					{/*	<TextField*/}
					{/*		autoFocus*/}
					{/*		id="topics"*/}
					{/*		label="Topics"*/}
					{/*		type="text"*/}
					{/*		helperText={'What topics would you like to discuss'}*/}
					{/*		margin='normal'*/}
					{/*		onChange={({ target }) => {*/}
					{/*			updateTopics(target.value);*/}
					{/*		}}*/}
					{/*		value={topics}*/}
					{/*		color="secondary"*/}
					{/*		required*/}
					{/*	/>*/}
					{/*	<Typography variant='subtitle1'>Max People on the Table</Typography>*/}
					{/*	<Slider*/}
					{/*		defaultValue={1}*/}
					{/*		getAriaValueText={valuetext}*/}
					{/*		valueLabelDisplay="auto"*/}
					{/*		step={1}*/}
					{/*		marks*/}
					{/*		onChange={handleSliderChange}*/}
					{/*		min={1}*/}
					{/*		max={6}*/}
					{/*	/>*/}
					{/*</DialogContent>*/}
					{/*<DialogActions>*/}
					{/*	<Button onClick={handleClose} color="primary">*/}
					{/*		Cancel*/}
					{/*	</Button>*/}
					{/*	<Button onClick={handleClose} color="primary">*/}
					{/*		Create*/}
					{/*	</Button>*/}
					{/*</DialogActions>*/}
				</Grid>
			</Dialog>
		</>
	);
}

export default CreateTableDialog;
