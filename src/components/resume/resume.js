import React from 'react';
import useJson from '../hooks/useJson';

import './resume.scss';

function Resume(props) {
	const data = useJson(
		'https://raw.githubusercontent.com/daviidli/daviidli.github.io/code/src/data/resume.json',
		{}
	);

	if (!Object.keys(data).length) {
		return null;
	}
	
	return (
		<div className='resume'>
			<div className='resume-title'>resume</div>

			<div className='minor-title'>{ data.contact.heading }</div>
			<div className='card'>
				<div className='title'>email: { data.contact.email }</div>
			</div>

			<div className='minor-title'>{ data.education.heading }</div>
			<div className='card'>
				<div className='title'>{ data.education.school }: { data.education.program }</div>
				<div className='content'>year: { data.education.year }</div>
				<div className='content'>grad: { data.education.grad }</div>
			</div>

			<div className='minor-title'>{ data.work.heading }</div>
			{ data.work.data.map(item => (
				<div className='card' key={item.company}>
					<div className='title'>{ item.position } @ { item.company }</div>
					<div className='content'>{ item.start } - { item.end }</div>
					<ul className='list'>
						{ item.description.map((description) => (
							<li className='list-item' key={description}>{description}</li>
						))}
					</ul>
				</div>
			))}

			<div className='minor-title'>{ data.technologies.heading }</div>
			{ ['languages', 'technologies'].map((section) => (
				<div className='card' key={section}>
					<div className='title'>{ data.technologies[section].heading }</div>
					<div className='proficient content tech'>
						proficient: { data.technologies[section].proficient.map((item) => <span className='item' key={item}>{ item }</span>) }
					</div>
					<div className='workingKnowledge content tech'>
						working knowledge: { data.technologies[section].workingKnowledge.map((item) => <span className='item' key={item}>{ item }</span>) }
					</div>
				</div>
			))}

			<div className='minor-title'>{ data.hackathons.heading }</div>
			{ data.hackathons.data.map((item) => (
				<div className='card' key={item.title}>
					<div className='title'>{ item.title }</div>
					<div className='content'>
						<ul className='list'>
							{ item.description.map((description) => (
								<li className='list-item' key={description}>{description}</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
}

export default Resume;