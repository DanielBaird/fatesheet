
import React from 'react'
import styled from 'styled-components'
import {Col} from './Col'

// --------------------------------------------------------
export const Box = (props) => {

	const headingBits = props.heading
		?.split(' and ')
		.flatMap( (hb, i) => [hb, <Small key={i}> and </Small>])
		.slice(0, -1)

	return <Col pad border margin doubleRightMargin>
		<BoxHead>{headingBits}</BoxHead>
		{props.children}
	</Col>
}
// --------------------------------------------------------
const Small = styled.span`
	font-size: 0.7em;
	top: -0.14em;
	letter-spacing: initial;
`
// --------------------------------------------------------
const BoxHead = styled.div`
	position: relative;
	top: calc(-1 * ${props => props.theme.gap});
	font-weight: 800;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: #fff;
	background-color: ${props => props.theme.edgeColor};
	padding: 0 ${props => props.theme.gap};
	height: ${props => props.theme.headHeight};
	/* tweak the 1.0 to center all-caps text in the header bar */
	line-height: calc(1.0 * ${props => props.theme.headHeight});
	border-bottom-right-radius: calc(1 * ${props => props.theme.gap});

	margin:
		calc(-1 * ${props => props.theme.edgeWidth})
		calc(-1 * ${props => props.theme.edgeWidth} + -2 * ${props => props.theme.gap})
		0
		calc(-1 * ${props => props.theme.gap} + -1 * ${props => props.theme.edgeWidth})
	;

`
