import React, { useState, useEffect, useContext } from 'react';
import Projects from '../components/project/projects';
import Resume from '../components/Resume';
import { MainViewContext, SECTIONS } from '../contexts/mainViewContext';

import './mainView.scss';

function MainView() {
	const [section, setSection] = useContext(MainViewContext);
	const [scrollY, setScrollY] = useState(0);
	const [orientation, setOrientation] = useState(0);	
	
	useEffect(() => {
		const onScroll = (e) => {
			setScrollY(e.currentTarget.scrollY);
		};

		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [setScrollY]);

	useEffect(() => {
		const onChange = () => {
			setOrientation(orientation + 1);
		};

		window.addEventListener('resize', onChange);
		return () => window.removeEventListener('resize', onChange);
	});

	useEffect(() => {
		const front = document.querySelector('#front').clientHeight;
		const resume = document.querySelector('#resume').clientHeight;
		const height = [0, front, front + resume];
		setSection(prev => ({ ...prev, height: height }));
	}, [setSection, orientation]);

	useEffect(() => {
		const bufferHeight = window.innerHeight / 5;
		
		if (scrollY >= section.height[SECTIONS.PROJECTS] - bufferHeight) {
			setSection(prev => ({ ...prev, current: SECTIONS.PROJECTS }));
		} else if (scrollY >= section.height[SECTIONS.RESUME] - bufferHeight) {
			setSection(prev => ({ ...prev, current: SECTIONS.RESUME }));
		} else {
			setSection(prev => ({ ...prev, current: SECTIONS.FRONT }));
		}
	}, [scrollY, setSection, section.height])

	return (
		<React.Fragment>
			<div id='front' className='section'>
				front page
			</div>
			<div id='resume' className='section'>
				<Resume />
			</div>
			<div id='projects' className='section'>
				<Projects />
			</div>
		</React.Fragment>
	);
}

export default MainView;