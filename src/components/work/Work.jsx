import React from 'react';
import { Timeline } from 'antd';
import ReactMarkdown from 'react-markdown';
import { AiFillCaretDown } from 'react-icons/ai';
import ContentContainer from '../contentContainer/ContentContainer';
import ibm from '../../data/work/ibm.md';
import sierra from '../../data/work/sierra.md';
import djk from '../../data/work/djk.md';
import './Work.scss';

const Projects = () => (
	<ContentContainer className="work">
		<h2 className="section-heading">work experience</h2>
		<Timeline mode="left" className="timeline">
			<Timeline.Item label="Aug 2020 - Present">
				<ReactMarkdown source={djk} className="md" />
			</Timeline.Item>
			<Timeline.Item label="May 2020" color="grey">
				<h1>{'Graduated University 🎓 '}</h1>
			</Timeline.Item>
			<Timeline.Item label="May 2019 - Sep 2019">
				<ReactMarkdown source={ibm} className="md" />
			</Timeline.Item>
			<Timeline.Item label="Sep 2017 - May 2018">
				<ReactMarkdown source={sierra} className="md" />
			</Timeline.Item>
			<Timeline.Item label="Sep 2015" color="grey">
				<h1>{'Started University 👶 '}</h1>
			</Timeline.Item>
			<Timeline.Item
				dot={<AiFillCaretDown size="1.35em" />}
				color="grey"
			/>
		</Timeline>
	</ContentContainer>
);

export default Projects;
