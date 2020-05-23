import React from 'react';
import ReactMarkdown from 'react-markdown';
import ContentContainer from '../contentContainer/ContentContainer';
import about from '../../data/about.md';
import './About.scss';

const About = () => (
	<ContentContainer className="about" align="middle">
		{/* <h2 className="section-heading">about</h2> */}
		<ReactMarkdown className="description" source={about} />
	</ContentContainer>
);

export default About;
