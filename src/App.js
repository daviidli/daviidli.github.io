import React from 'react';
import { Grid, GridItem } from '@daviidli/reactgrid';
import MainView from './views/mainView';
import NavBar from './components/navBar/navBar';
import MainViewContextProvider from './contexts/mainViewContext';

function App() {
	return (
		<MainViewContextProvider>
			<Grid justifyContent={'center'} gutter={12}>
				<GridItem xs={12} md={8}>
					<MainView />
				</GridItem>
			</Grid>
			<NavBar />
		</MainViewContextProvider>
	);
}

export default App;
