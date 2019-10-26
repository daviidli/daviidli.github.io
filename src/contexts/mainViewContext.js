import React, { useState } from 'react';

const MainViewContext = React.createContext();

const SECTIONS = Object.freeze({
	FRONT: 0,
	RESUME: 1,
	PROJECTS: 2,
	INTERESTS: 3
});

const MainViewContextProvider = (props) => {
	const [section, setSection] = useState({
		current: SECTIONS.FRONT,
		height: [0, 0, 0]
	});

	return (
		<MainViewContext.Provider value={[section, setSection]}>
			{props.children}
		</MainViewContext.Provider>
	);
};

export { SECTIONS, MainViewContext };
export default MainViewContextProvider;