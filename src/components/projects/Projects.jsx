import React, { useState } from 'react';
import { List, Drawer } from 'antd';
import ReactMarkdown from 'react-markdown';
import ContentContainer from '../contentContainer/ContentContainer';
import ProjectItem from './ProjectItem';
import projectData from '../../data/projects';
import './Projects.scss';

const Projects = () => {
	const [drawer, setDrawer] = useState('');

	const drawerVisible = drawer.length !== 0;
	return (
		<>
			<ContentContainer className="projects">
				<h2 className="section-heading">projects</h2>
				<List
					grid={{
						gutter: 16,
						xs: 1,
						sm: 1,
						md: 2,
						lg: 2,
						xl: 2,
						xxl: 2
					}}
					dataSource={projectData}
					renderItem={item => ProjectItem({ ...item, setDrawer })}
				/>
			</ContentContainer>
			<Drawer
				className="drawer"
				placement="bottom"
				closable
				height="85%"
				onClose={() => setDrawer('')}
				visible={drawerVisible}
			>
				<ContentContainer className="drawer-container">
					<ReactMarkdown source={drawer} className="md" />
				</ContentContainer>
			</Drawer>
		</>
	);
};

export default Projects;
