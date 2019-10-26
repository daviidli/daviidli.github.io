import React from 'react';
import { Row, Col } from '@daviidli/reactgrid';

import './projectItem.scss';

function ProjectItem(props) {
	const { info } = props;

	return (
		<Row className='project card helloworld'>
			<Col xs={12} md={4} lg={3} className='image'>
				<p>image: { info.image }</p>
			</Col>
			<Col xs={12} md={8} lg={9}>
				<div className='container'>
					<span className='title'>
						{ info.link ? <a href={info.link} target='_blank' rel='noopener noreferrer' className='link'>{ info.title }</a> :  info.title }
					</span>
					<ul>
						{ info.description.map(item => <li className='description' key={item}>{ item }</li>) }
					</ul>
				</div>
			</Col>
		</Row>
	);
}

export default ProjectItem;