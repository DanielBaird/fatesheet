
import React from 'react'
import styled, {css} from 'styled-components'
import {Col} from '../elements/Col'
import {FillLine} from '../elements/FillLine'

export const NamedField = (props) => {
	return <Col narrow={props.narrow} bottomPad rightMargin>
		<FieldHead>{props.name}</FieldHead>
		<FieldText>
			{props.children}
			{props.fill && [...Array(props.fill).keys()].map((v,i) => <FillLine />) }
		</FieldText>
	</Col>
}
// --------------------------------------------------------
export const FieldHead = styled.div`
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.mutedTextColor || 'inherit' };
	font-size: 0.75em;
	margin-bottom: -0.1em;
	${props => props.right && css`text-align: right` }
`
// --------------------------------------------------------
const FieldText = styled.div`
	margin: 0;
	white-space: wrap;
`
// --------------------------------------------------------
