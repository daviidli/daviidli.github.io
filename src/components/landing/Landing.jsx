/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
	AiFillCaretDown,
	AiOutlineGithub,
	AiOutlineMail,
	AiOutlineLinkedin,
	AiOutlineFile
} from 'react-icons/ai';
import { scroller } from 'react-scroll';
import Button from '@bit/daviidli.corn-ui.button';
import Tooltip from '@bit/daviidli.corn-ui.tooltip';
import ContentContainer from '../contentContainer/ContentContainer';
import './Landing.scss';

const scrollToAbout = () => scroller.scrollTo('about', {
	duration: 500,
	delay: 0,
	smooth: true,
	offset: 10
});

const links = [
	{
		icon: <AiOutlineGithub size="1.75em" />,
		link: 'https://github.com/daviidli',
		tooltip: 'Github'
	},
	{
		icon: <AiOutlineMail size="1.75em" />,
		link: 'mailto:david@dvdli.dev',
		tooltip: 'Email'
	},
	{
		icon: <AiOutlineLinkedin size="1.75em" />,
		link: 'https://www.linkedin.com/in/daviidli/',
		tooltip: 'LinkedIn'
	},
	{
		icon: <AiOutlineFile size="1.75em" />,
		link: 'https://dvdli.dev/resume.pdf',
		tooltip: 'Resume'
	}
];

const Landing = () => (
	<>
		<ContentContainer className="landing" align="middle">
			<div className="title">hello,</div>
			<div className="title">
				i&apos;m
				<span className="name"> david</span>
				.
			</div>
			<div className="links">
				{links.map(link => (
					<Tooltip
						key={link.tooltip}
						content={link.tooltip}
						position="bottomMiddle"
						color="rgba(0, 0, 0, 0.8)"
					>
						<Button
							corners="round"
							color="rgba(0,0,0,0)"
							textColor="#096dd9"
							hoverColor="rgba(0,0,0,0.15)"
							onClick={() => window.open(link.link, '_blank')}
						>
							{link.icon}
						</Button>
					</Tooltip>
				))}
			</div>
		</ContentContainer>
		<div className="arrow">
			<Button
				className="arrow-container"
				onClick={scrollToAbout}
				corners="round"
				size="sm"
				color="rgba(0,0,0,0)"
				textColor="#555"
				hoverColor="rgba(0,0,0,0.15)"
			>
				<div>more</div>
				<AiFillCaretDown />
			</Button>
		</div>
	</>
);

export default Landing;
