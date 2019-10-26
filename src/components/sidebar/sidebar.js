import React, { useContext } from 'react';
import { MainViewContext } from '../../contexts/mainViewContext';
import Github from '../../assets/github.svg';
import cn from 'classnames';

import './sidebar.scss';

function Sidebar(props) {
	const [section] = useContext(MainViewContext);

	const scrollToSection = (selected) => {
		window.scrollTo({
			top: document.getElementById(selected).offsetTop,
			left: 0,
			behavior: 'smooth'
		});
	};

	const openLink = (url) => {
		window.open(url, '_blank', 'noopener');
	};

	const sections = ['david', 'resume', 'projects', 'interests'];
	
	return (
		<div className={cn('sidebar', props.className)}>
			{ sections.map((item, i) => (
				<div className={ cn('button', { current: section.current === i })} onClick={() => scrollToSection(item)} key={item}>
					{ item }
				</div>
			))}
			<div className='button' onClick={() => openLink('https://github.com/daviidli')}>
				<img src={Github} alt='github' className='github' />
			</div>
		</div>
	);
}

export default Sidebar;
