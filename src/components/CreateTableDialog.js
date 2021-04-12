import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
// import makeStyles from '@material-ui/core/styles/makeStyles';


// const useStyles  = makeStyles( {
// 	contentWrapper: {
// 		display: 'flex',
// 		flexDirection: 'column',
// 		justifyContent: 'flex-start',
// 		alignItems: 'flex-start'
// 	},
// });


export const CreateTableDialog  = ({ open = false, handleClose }) => {
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
			<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
				<Grid container direction="column" justify="flex-start" alignItems="flex-start" style={{ paddingLeft: '1vw' }}>
					<Grid item xs={12}>
						<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
					</Grid>
					<Grid item xs={12}>
						<DialogContentText>
							To subscribe to this website, please enter your email address here. We will send updates
							occasionally.
						</DialogContentText>
					</Grid>
					<Grid item xs={12}>
						<TextField
							autoFocus
							id="tableName"
							label="Table Name"
							type="text"
							helperText={'Table Name (13 character max)'}
							margin='normal'
							onChange={({ target }) => {
								target.value.length < 14 ?  updateTableName(target.value): null ;
							}}
							value={tableName}
							color="secondary"
							required
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
					<Grid item xs={12}>
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
						/>
					</Grid>
					<Grid item xs={12}>
						<Button onClick={handleClose} color="primary">
							Create
						</Button>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
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
