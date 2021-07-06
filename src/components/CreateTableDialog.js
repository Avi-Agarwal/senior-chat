import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Blip } from './Blip';
import { createTable } from '../utils/tableUtils';


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
	createButton : {
		backgroundColor: '#6D50DE',
		width: '150px',
		height: '44px',
		borderRadius: '30px',
		marginTop: 'auto',
		marginRight: '45px',
		fontWeight: 600,
		'&:hover': {
			backgroundColor: '#6D50DE'
		}
		// marginBottom: '24px'
	},
	textField : {
		maxWidth: '341px',
		width: '50%',
		marginTop: '8px',
		marginBottom: '0px'
	},
	sliderStyle : {
		maxWidth: '341px',
		width: '50%',
		marginLeft: '.3vw'
	},
	input: {
		fontFamily: 'Nunito',
		fontSize: '1.25',
		fontWeight: 600
	}
});

// Create button text styling
const theme = createMuiTheme({
	overrides: {
		MuiButton: {
			text: {
				color: 'white',
				fontSize: '1.875rem',
				textTransform: 'capitalize',
				fontWeight: 700
			}
		}
	}
});

const dialogStyle = {
	borderRadius: '20px',
	border: '2px solid black',
	width: '80vw',
	maxWidth: '650px',
	marginBottom: '20vh'
	// height: '541px'
}

export const CreateTableDialog  = ({ open = false, handleClose }) => {
	const classes = useStyles();
	const [tableName, updateTableName] = React.useState('');
	const [topics, updateTopics] = React.useState('');
	const [maxPeople, updateMaxPeople] = React.useState(1);
	const [blipInfo, updateBlipInfo] = React.useState({ 
		blipNeeded: false, message: 'default', type: 'success' 
	})

	const handleSliderChange = (event, newValue) => {
		updateMaxPeople(newValue);
	};

	const dialogClose = () => {
		handleClose();
		updateTableName('');
		updateTopics('');
		updateMaxPeople(1);
		updateBlipInfo({ blipNeeded: false })
	}

	const valuetext = (value) => {
		return `${value} Max People`;
	}

	const handleCreate = () => {
		if (tableName.length < 1 || topics.length < 1) {
			updateBlipInfo({
				blipNeeded: true, message: 'Please make sure all fields are filled out', type: 'error'
			})
		}
		else {
			createTable( tableName, maxPeople, topics)
			console.log('creation finished');
			// tableCreation( tableName, maxPeople, topics );
			dialogClose();
		}
	}

	return (
		<>
			<Dialog open={open} onClose={dialogClose} PaperProps={{ style: dialogStyle }}>
				<Grid container spacing={0} direction="column" justify="flex-start" alignItems="flex-start" style={{ marginLeft: '6%', width: '94%' }}>
					<Grid item xs={12}>
						<Box style={{ width: 'fit-content', marginTop: '29px' }}>
							<Typography variant='h3'>Table Creation</Typography>
							<hr className={classes.lineBreak}/>
						</Box>
					</Grid>
					<Grid item xs={12} style={{ width: '100%', marginTop: '25px' }}>
						<Typography variant='h5'>Name</Typography>
						<TextField
							id="tableName"
							type="text"
							placeholder={'Table Name (15 character max)'}
							InputProps={{ className: classes.input }}
							className={classes.textField}
							margin='normal'
							onChange={({ target }) => {
								target.value.length < 16 ?  updateTableName(target.value): null ;
							}}
							value={tableName}
							color="secondary"
							required
							style={{ marginBottom: '0px' }}
						/>
					</Grid>
					<Grid item xs={12} style={{ width: '100%', marginTop: '27.5px' }}>
						<Typography variant='h5'>Topics</Typography>
						<TextField
							id="topics"
							type="text"
							placeholder={'What topics would you like to discuss'}
							InputProps={{ className: classes.input }}
							margin='normal'
							className={classes.textField}
							onChange={({ target }) => {
								target.value.length < 50 ? updateTopics(target.value) : null ;
							}}
							value={topics}
							color="secondary"
							required
						/>
					</Grid>
					<Grid item xs={12} style={{ marginTop: '33px', width: '100%' }}>
						<Typography variant='subtitle1'>Max Participants</Typography>
						<Slider
							defaultValue={1}
							getAriaValueText={valuetext}
							valueLabelDisplay="auto"
							step={1}
							marks
							onChange={handleSliderChange}
							min={1}
							max={6}
							color={'secondary'}
							className={classes.sliderStyle}
						/>
					</Grid>
					<Grid item xs={12}>
						<Box style={{ paddingBottom: '25px', paddingTop: '25px' }}>
							<ThemeProvider theme={theme}>
								<Button
									className={classes.createButton}
									onClick={handleCreate}
								>
									Create
								</Button>
							</ThemeProvider>
							<Button onClick={dialogClose} color="primary">
								Cancel
							</Button>
						</Box>
					</Grid>
					{
						blipInfo.blipNeeded ? 
							<Blip 
								message={blipInfo.message} 
								type={blipInfo.type} 
								externalClose={() => { updateBlipInfo({ blipNeeded: false }) } }
							/> 
							: null
					}
				</Grid>
			</Dialog>
		</>
	);
}

export default CreateTableDialog;
