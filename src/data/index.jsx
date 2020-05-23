import React from 'react';
import Landing from '../components/landing/Landing';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Work from '../components/work/Work';
import Skills from '../components/skills/Skills';
// import Interests from '../components/interests/Interests';

const sections = [
	{
		name: 'david',
		element: <Landing />
	},
	{
		name: 'about',
		element: <About />
	},
	{
		name: 'projects',
		element: <Projects />
	},
	{
		name: 'key competencies',
		element: <Skills />
	},
	{
		name: 'work experience',
		element: <Work />
	}
	// {
	// 	name: 'interests',
	// 	element: null,
	// 	style: {}
	// }
];

export default sections;
