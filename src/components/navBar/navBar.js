import React, { useContext } from 'react';
import { MainViewContext } from '../../contexts/mainViewContext';
import { Grid, GridItem } from '@daviidli/reactgrid';
import NavButton from './navButton';
import Github from '../../assets/github.svg';

import './navBar.scss';

function NavBar() {
	const [section] = useContext(MainViewContext);
	const scrollToSection = (selected) => {
		window.scrollTo({
			top: section.height[selected],
			left: 0,
			behavior: 'smooth'
		});
	};

	const openLink = (url) => {
		window.open(url, '_blank', 'noopener');
	}

	const sectionTitles = ['david', 'resume', 'projects'];
	return (
		<div className='bar'>
			<Grid justifyContent={'center'} alignContent={'center'} className='grid'>
				{ sectionTitles.map((item, i) => 
					<GridItem className='gridItem' xs={3} md={3} lg={2} key={item}>
						<NavButton 
							section={i}
							onClick={scrollToSection}
							isCurrent={i === section.current}
						>
							{ item }
						</NavButton>
					</GridItem>
				)}
				<GridItem className='gridItem' xs={1} md={1} lg={1}>
					<NavButton onClick={() => openLink('https://github.com/daviidli')}>
						<img src={Github} alt='github' className='github' />
					</NavButton>
				</GridItem>
				{/* <GridItem className='gridItem' xs={1} md={1} lg={1}>
					<NavButton 
						title={'t'}
						onClick={() => console.log('emoji')}
					/>
				</GridItem> */}
			</Grid>
		</div>
	);
}

export default NavBar;