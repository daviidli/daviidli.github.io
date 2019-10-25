// import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled, { css } from 'styled-components';

// const GridContext = React.createContext();

// const Grid = (props) => {
// 	const { children, col, blocks, justifyContent, alignContent, breakpoints, gutter, className, style } = props;
// 	const [state, setState] = useState({
// 		isRow: !col,
// 		breakpoints: breakpoints,
// 		childrenLength: blocks ? blocks : children.length,
// 		gutter: gutter
// 	});

// 	const gridGutter = (gutter / 2).toString();
// 	const GridContainer = styled.div`
// 		display: flex;
// 		flex-direction: ${col ? 'column' : 'row'};
// 		flex-wrap: wrap;
// 		justify-content: ${justifyContent};
// 		align-content: ${alignContent};
// 		margin: ${gutter ? (!col ? '0 ' + gridGutter + 'px' : gridGutter + 'px 0' ) : '0'};
// 	`;

// 	const additionalProps = {};
// 	additionalProps.className = className ? className : undefined;
// 	additionalProps.style = style ? style : undefined;

// 	return (
// 		<GridContext.Provider value={[state, setState]}>
// 			<GridContainer {...additionalProps}>
// 				{ children }
// 			</GridContainer>
// 		</GridContext.Provider>
// 	);
// }

// Grid.propTypes = {
// 	className: PropTypes.string,
// 	col: PropTypes.bool,
// 	blocks: PropTypes.number,
// 	justifyContent: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
// 	alignContent: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
// 	breakpoints: PropTypes.array,
// 	gutter: PropTypes.number,
// 	style: PropTypes.object
// };

// Grid.defaultProps = {
// 	blocks: 12,
// 	breakpoints: [0, 600, 768, 992, 1200],
// 	justifyContent: 'flex-start',
// 	alignContent: 'flex-start'
// };

// const GridItem = (props) => {
// 	const { children, className, style } = props;
// 	const [grid] = useContext(GridContext);

// 	const breakpoints = [];
// 	const breakpointsProps = ['xs', 'sm', 'md', 'lg', 'xl'];
// 	const tester = [false, false, false, false, false];

// 	let test = 'inherit';
// 	for (let i = 0; i < breakpointsProps.length; i++) {
// 		tester[i] = !!props[breakpointsProps[i]] || i === 0;
// 		const prev = tester.slice(0, i + 1).reduce((prev, curr) => prev || curr, false);
// 		if (!prev) {
// 			continue;
// 		}

// 		const span = props[breakpointsProps[i]] ? (props[breakpointsProps[i]] / 12 * 100).toString() + '%' : (test === 'inherit' ? (12 / grid.childrenLength / 12 * 100).toString() + '%' : test);
// 		test = span;
// 		breakpoints.push(css`
// 			@media screen and (min-width: ${grid.breakpoints[i].toString()}px) {
// 				width: ${grid.isRow ? span : 'inherit'};
// 				height: ${!grid.isRow ? span : 'inherit'};
// 			}
// 		`);
// 	}

// 	const Container = styled.div`
// 		${breakpoints}
// 	`;

// 	const gridGutter = (grid.gutter / 2).toString();
// 	const MarginContainer = styled.div`
// 		margin: ${grid.gutter ? (grid.isRow ? '0 ' + gridGutter + 'px' : gridGutter + 'px 0' ) : '0'};
// 	`;

// 	const additionalProps = {};

// 	additionalProps.className = className ? className : undefined;
// 	additionalProps.style = style ? style : undefined;

// 	return (
// 		<Container
// 			{ ...additionalProps }
// 		>
// 			<MarginContainer>
// 				{ children }
// 			</MarginContainer>
// 		</Container>
// 	);
// }

// GridItem.propTypes = {
// 	children: PropTypes.node,
// 	xs: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
// 	sm: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
// 	md: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
// 	lg: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
// 	xl: PropTypes.oneOf([true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
// 	className: PropTypes.string,
// 	style: PropTypes.object
// }

// export { Grid, GridItem };