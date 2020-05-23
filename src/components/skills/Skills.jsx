import React from 'react';
import ReactMarkdown from 'react-markdown';
import skills from '../../data/skills.md';
import ContentContainer from '../contentContainer/ContentContainer';
import './Skills.scss';

const Skills = () => (
	<ContentContainer className="skills">
		<h2 className="section-heading">key competencies</h2>
		<ReactMarkdown source={skills} />
	</ContentContainer>
);

export default Skills;
