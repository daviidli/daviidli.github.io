import React from 'react';
import { Grid, GridItem } from '@daviidli/reactgrid';

import './projectItem.scss';

function ProjectItem(props) {
	const { info } = props;

	return (
		<Grid className='card'>
			<GridItem xs={12} md={5} lg={4}>
				<p>image: { info.image }</p>
			</GridItem>
			<GridItem xs={12} md={7} lg={8}>
				<span className='title'>{ info.link ? <a href={info.link} target='_blank' rel='noopener noreferrer' className='link'>{ info.title }</a> :  info.title }</span>
				<ul>
					{ info.description.map(item => <li className='description' key={item}>{ item }</li>) }
				</ul>
			</GridItem>
		</Grid>
	);
}

export default ProjectItem;