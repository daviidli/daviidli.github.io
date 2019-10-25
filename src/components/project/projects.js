import React, { useEffect, useState } from 'react';
// import data from '../../data/projects';
import ProjectItem from './projectItem';
import axios from 'axios';

import './projects.scss';

function Projects() {

	const [data, setData] = useState({
		heading: 'projects',
		projects: []
	});

	// useEffect(() => {
	// 	axios.get('https://raw.githubusercontent.com/daviidli/News/master/frontend/package.json')
	// 		.then((response) => {
	// 			setData(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 			setData({
	// 				heading: 'projects',
	// 				projects: []
	// 			});
	// 		})
	// }, [data, setData]);

	return (
		<React.Fragment>
			<div className='projects'>{ data.heading }</div>
			{ data.projects.map((item, i) => <ProjectItem info={item} key={i} />)}
		</React.Fragment>
	);
}

export default Projects;