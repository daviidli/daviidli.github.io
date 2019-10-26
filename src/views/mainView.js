import React, { useState, useEffect, useContext } from 'react';
import Projects from '../components/project/projects';
import Resume from '../components/resume/resume';
import { MainViewContext, SECTIONS } from '../contexts/mainViewContext';

import './mainView.scss';

function MainView(props) {
	const [section, setSection] = useContext(MainViewContext);
	const [scrollY, setScrollY] = useState(0);
	
	useEffect(() => {
		const onScroll = (e) => {
			setScrollY(e.currentTarget.scrollY);
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [setScrollY]);

	useEffect(() => {
		const setHeights = () => {
			const front = document.getElementById('david').clientHeight;
			const resume = document.getElementById('resume').clientHeight;
			const projects = document.getElementById('projects').clientHeight;
			const height = [0, front, front + resume, front + resume + projects];
			setSection(prev => ({ ...prev, height: height }));
		}

		setTimeout(setHeights, 100);
	}, [setSection, props.width]);

	useEffect(() => {
		const bufferHeight = window.innerHeight / 5;
		
		if (scrollY >= section.height[SECTIONS.INTERESTS] - bufferHeight) {
			setSection(prev => ({ ...prev, current: SECTIONS.INTERESTS }));
		} else if (scrollY >= section.height[SECTIONS.PROJECTS] - bufferHeight) {
			setSection(prev => ({ ...prev, current: SECTIONS.PROJECTS }));
		} else if (scrollY >= section.height[SECTIONS.RESUME] - bufferHeight) {
			setSection(prev => ({ ...prev, current: SECTIONS.RESUME }));
		} else {
			setSection(prev => ({ ...prev, current: SECTIONS.FRONT }));
		}
	}, [scrollY, setSection, section.height])

	return (
		<React.Fragment>
			<div id='david' className='section'>
				front page
			</div>
			<div id='resume' className='section'>
				<Resume />
			</div>
			<div id='projects' className='section'>
				<Projects />
			</div>
			<div id='interests' className='section'>
				interests
			</div>
		</React.Fragment>
	);
}

export default MainView;