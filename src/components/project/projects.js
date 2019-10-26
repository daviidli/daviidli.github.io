import React from 'react';
import ProjectItem from './projectItem';
import useJson from '../hooks/useJson';

import './projects.scss';

function Projects() {
	const initialState = {
		heading: 'projects',
		projects: []
	}
	const data = useJson(
		'https://raw.githubusercontent.com/daviidli/daviidli.github.io/code/src/data/projects.json',
		initialState
	);

	return (
		<div>
			<div className='project-title'>{ data.heading }</div>
			{ data.projects.map((item, i) => <ProjectItem info={item} key={i} />)}
		</div>
	);
}

export default Projects;