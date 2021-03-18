import './App.css'
import React from 'react'
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="App">
					<Router/>
				</div>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
