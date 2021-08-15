
import React from 'react'
import styled from 'styled-components'
import {Col} from '../elements/Col'

export const NamedField = (props) => {
	return <Col narrow={props.narrow} bottomPad rightMargin>
		<FieldHead>{props.name}</FieldHead>
		<FieldText>
			{props.children}
		</FieldText>
	</Col>
}
// --------------------------------------------------------
const FieldHead = styled.div`
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.mutedTextColor || 'inherit' };
	font-size: 0.75em;
	margin-bottom: -0.1em;
`
// --------------------------------------------------------
const FieldText = styled.div`
	margin: 0;
	white-space: wrap;
`
// --------------------------------------------------------
