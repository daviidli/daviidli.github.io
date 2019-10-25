import React from 'react';
import classnames from 'classnames';

import './navButton.scss';

function NavButton(props) {
	const { children, section, onClick, isCurrent } = props;

	return (
		<div onClick={() => onClick && onClick(section)} className={classnames('button', { current: isCurrent })}>
			{ children }
		</div>
	);
}

export default NavButton;