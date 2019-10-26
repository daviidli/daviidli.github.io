import React, { useState, useEffect } from 'react';
import MainView from './views/mainView';
import MainViewContextProvider from './contexts/mainViewContext';
import Sidebar from './components/sidebar/sidebar';
import { Row, Col } from '@daviidli/reactgrid';

import './App.scss';
import SidebarButton from './components/sidebar/sidebarButton';


function App() {

	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const onChange = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', onChange);
		return () => window.removeEventListener('resize', onChange);
	});

	return (
		<MainViewContextProvider>
			<Row>
				<Col xs={1} md={2} xl={1.5}>
					{ width < 768 ? <SidebarButton /> : <Sidebar /> }
				</Col>
				<Col xs={10} md={10} xl={10.5}>
					<MainView width={width} />
				</Col>
			</Row>
		</MainViewContextProvider>
	);
}

export default App;
