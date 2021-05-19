import TableCard from './TableCard';
import StartTable from './StartTable';
import Box from '@material-ui/core/Box';
import React from 'react';


const VoiceChatList = ({ data, handleClickOpen }) => {
	
	return(
		<Box className={'voiceChatWrapper'}>
			{
				Object.values(data).map(( table, index ) => (
					<TableCard key={table.id} index={index} data={table}/>
				))
			}
			<StartTable tableCount={Object.keys(data).length} handleClickOpen={handleClickOpen}/>
		</Box>
	)
}

export default VoiceChatList;
