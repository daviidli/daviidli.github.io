import React, { useState } from 'react';
import Sidebar from '@bit/daviidli.corn-ui.sidebar';
import { Link } from 'react-scroll';
import Button from '@bit/daviidli.corn-ui.button';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import sections from '../../data/index';
import './Sidebar.scss';

const Header = () => {
	const [sidebar, toggleSidebar] = useState(false);

	const openButton = (
		<Button
			color="#232323"
			corners="circle"
			hoverRaised
		>
			<AiOutlineMenu />
		</Button>
	);

	const closeButton = (
		<Button
			color="#232323"
			corners="circle"
			hoverRaised
		>
			<AiOutlineClose />
		</Button>
	);

	return (
		<Sidebar
			className="side-drawer"
			open={sidebar}
			onOpen={() => toggleSidebar(true)}
			onClose={() => toggleSidebar(false)}
			width={280}
			color="rgba(255, 255, 255, 0.7)"
			panelColor="linear-gradient(#232323, #121212)"
			openButton={openButton}
			closeButton={closeButton}
		>
			{sections.map(section => (
				<Link
					className="link"
					activeClass="active"
					to={section.name}
					spy
					smooth
					duration={500}
					delay={700}
					isDynamic
					key={section.name}
					onClick={() => toggleSidebar(false)}
				>
					<Button
						width="75%"
						height="2.5em"
						corners="round"
						textColor="#fff"
						color="rgba(0, 0, 0, 0)"
						hoverColor="rgba(255, 255, 255, 0.15)"
						hoverScale={1.05}
					>
						{ section.name }
					</Button>

				</Link>
			))}
		</Sidebar>
	);
};

export default Header;
