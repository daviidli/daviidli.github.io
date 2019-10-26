import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import cn from 'classnames';
import Menu from '../../assets/menu.svg';

import './sidebarButton.scss';

function SidebarButton(props) {
	const [open, setOpen] = useState(false);
	
	useEffect(() => {
		const handleClick = (e) => {
			if (open) {
				setOpen(false);
			}
		}
		window.addEventListener('click', handleClick);
		return () => window.removeEventListener('click', handleClick);
	});

	return (
		<div>
			<Sidebar className={cn('small-sidebar', { open: open })} />
			<div className={cn('toggle', { open: open })} onClick={() => setOpen(prev => !prev)}>
				<img src={Menu} alt='menu' className='menu' />
			</div>
		</div>
	);
}

export default SidebarButton;