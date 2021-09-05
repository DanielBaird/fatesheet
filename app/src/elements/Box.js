
import React from 'react'
import styled from 'styled-components'
import {Col} from './Col'

// --------------------------------------------------------
export const Box = (props) => {

	let headingBits = props.heading
		?.split(' and ')
		.flatMap( (hb, i) => [hb, <Small key={i}> and </Small>])
		.slice(0, -1)

	if (props.bigTitle) {
		headingBits = <BigHead>{props.bigTitle}</BigHead>
	}

	return <Col pad border margin doubleRightMargin className={props.className}>
		<BoxHead>{headingBits}</BoxHead>
		{ props.children }
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

	// padding: 0 ${props => props.theme.gap};
	// min-height: ${props => props.theme.headHeight};
	/* tweak the 1.0 to center all-caps text in the header bar */
	// line-height: calc(1.0 * ${props => props.theme.headHeight});

	padding:
		calc((${props => props.theme.headHeight} - 1em) / 2)
		${props => props.theme.gap};
	min-height: ${props => props.theme.headHeight};
	/* tweak the 1.0 to center all-caps text in the header bar */
	line-height: 1.1;


	border-bottom-right-radius: calc(1 * ${props => props.theme.gap});

	margin:
		calc(-1 * ${props => props.theme.edgeWidth})
		calc(-1 * ${props => props.theme.edgeWidth} + -2 * ${props => props.theme.gap})
		0
		calc(-1 * ${props => props.theme.gap} + -1 * ${props => props.theme.edgeWidth})
	;
`
// --------------------------------------------------------
const BigHead = styled.div`
	position: absolute;
	text-transform: none;
	font-size: calc(1.3 * ${props => props.theme.headHeight});
	top: -0.5em;
	letter-spacing: -0.05em;
	font-weight: 800;
	color: #fff;
	left: ${props => props.theme.gap};
	height: calc(1.66 * ${props => props.theme.headHeight});
	line-height: 1;
	color: white;
	text-shadow:
		 2px  0   0.5px ${props => props.theme.edgeColor},
		-2px  0   0.5px ${props => props.theme.edgeColor},
		 0    2px 0.5px ${props => props.theme.edgeColor},
		 0   -2px 0.5px ${props => props.theme.edgeColor},
		 2px  2px 0.5px ${props => props.theme.edgeColor},
		-2px  2px 0.5px ${props => props.theme.edgeColor},
		 2px -2px 0.5px ${props => props.theme.edgeColor},
		-2px -2px 0.5px ${props => props.theme.edgeColor}
	;
`
