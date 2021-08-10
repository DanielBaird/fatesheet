
import React from 'react'
import styled, {css} from 'styled-components'

export const BoxHead = styled.div`
	position: relative;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 0.066em;
	color: #fff;
	background-color: #000;
	padding: 0 ${props => props.theme.gap};
	height: ${props => props.theme.headHeight};
	line-height: ${props => props.theme.headHeight};

	margin: calc(-1 * ${props => props.theme.gap});
	margin-bottom: ${props => props.theme.gap};
	border-top-left-radius: calc(0.1 * ${props => props.theme.headHeight});

	&:after {
		content: '';
		background-color: #000;
		height: ${props => props.theme.headHeight};
		width: calc(0.5 * ${props => props.theme.headHeight});
		border-bottom-right-radius: calc(0.5 * ${props => props.theme.headHeight});
		position: absolute;
		right: calc(-0.5 * ${props => props.theme.headHeight});
	}
`
