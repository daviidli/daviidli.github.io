/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { List, Typography } from 'antd';
import { AiOutlineGithub, AiOutlineInfoCircle } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import Button from '@bit/daviidli.corn-ui.button';
import Card, { CardActions } from '@bit/daviidli.corn-ui.card';
import ToolTip from '@bit/daviidli.corn-ui.tooltip';
import './ProjectItem.scss';

const ConfiguredButton = (tooltip, icon, onClick) => (
	<ToolTip key={tooltip} content={tooltip} fullWidth width="75px" className="tooltip">
		<Button
			onClick={onClick}
			width="100%"
			height="100%"
			size="lg"
			textColor="#096dd9"
			color="rgba(255, 255, 255, 0)"
			hoverColor="rgba(0, 0, 0, 0.15)"
			corners="normal"
		>
			{ icon }
		</Button>
	</ToolTip>
);

const ProjectItem = ({
	title,
	description,
	content,
	github,
	link,
	setDrawer
}) => {
	const openUrl = url => () => window.open(url, '_blank');
	const actions = [];

	if (content && content.length) {
		actions.push(ConfiguredButton('About', <AiOutlineInfoCircle />, () => setDrawer(content)));
	}

	if (github && github.length) {
		actions.push(ConfiguredButton('Github', <AiOutlineGithub />, openUrl(github)));
	}

	if (link && link.length) {
		actions.push(ConfiguredButton('Try it out!', <FiExternalLink />, openUrl(link)));
	}

	return (
		<List.Item className="item">
			<Card
				outline
				raised={false}
				bgColor="#fff"
			>
				<h1 className="title">{title}</h1>
				<Typography.Paragraph className="description">
					{description}
				</Typography.Paragraph>
				<CardActions justify="space-evenly">
					{ actions }
				</CardActions>
			</Card>
		</List.Item>
	);
};

ProjectItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	setDrawer: PropTypes.func.isRequired,
	link: PropTypes.string,
	content: PropTypes.string,
	github: PropTypes.string
};

ProjectItem.defaultProps = {
	link: '',
	content: '',
	github: ''
};

export default ProjectItem;
