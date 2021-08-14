
import React from 'react'
import styled from 'styled-components'
import {Col} from '../elements/Col'

export const NamedField = (props) => {
	return <Col narrow={props.narrow} bottomPad>
		<FieldHead>{props.name}</FieldHead>
		{props.children}
	</Col>
}
// --------------------------------------------------------
const FieldHead = styled.div`
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.smallHeadColor || 'inherit' };
	opacity: ${props => props.theme.smallHeadFade || '1.0' };
	font-size: 0.75em;
	margin-bottom: -0.1em;
`
