import React from 'react';
import { Element } from 'react-scroll';
import Sidebar from '../../components/sidebar/Sidebar';
import sections from '../../data/index';
import './Home.scss';

const Home = () => (
	<>
		<Sidebar />
		{ sections.map(section => (
			<Element key={section.name} name={section.name}>
				{ section.element }
			</Element>
		)) }
		<div className="footer-space" />
	</>
);

export default Home;
