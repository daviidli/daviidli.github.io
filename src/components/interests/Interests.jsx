import React from 'react';
import ReactMarkdown from 'react-markdown';
import interests from '../../data/interests.md';
import ContentContainer from '../contentContainer/ContentContainer';
import './Interests.scss';

const Interests = () => (
	<ContentContainer className="interests">
		<h2 className="section-heading">interests</h2>
		<ReactMarkdown source={interests} />
	</ContentContainer>
);

export default Interests;
