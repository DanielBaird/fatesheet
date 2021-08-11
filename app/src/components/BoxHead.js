
import React from 'react'
import styled, {css} from 'styled-components'

export const BoxHead = styled.div`
	position: relative;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 0.066em;
	color: #fff;
	background-color: ${props => props.theme.edgeColor};
	padding: 0 ${props => props.theme.gap};
	height: ${props => props.theme.headHeight};
	line-height: ${props => props.theme.headHeight};

	margin:
		calc(-1 * ${props => props.theme.edgeWidth})
		calc(-1 * ${props => props.theme.edgeWidth})
		0
		calc(-1 * ${props => props.theme.gap} + -1 * ${props => props.theme.edgeWidth})
	;

	&:after {
		content: '';
		background-color: ${props => props.theme.edgeColor};
		height: ${props => props.theme.headHeight};
		width: ${props => props.theme.headHeight};
		border-bottom-right-radius: calc(0.5 * ${props => props.theme.headHeight});
		position: absolute;
		right: calc(-0.5 * (${props => props.theme.headHeight} + ${props => props.theme.edgeWidth}));
		right: calc(-0.5 * ${props => props.theme.headHeight});
	}
`
