
import React from 'react'
import styled from 'styled-components'
import {Col} from '../elements/Col'
import {Row} from '../elements/Row'
import {NamedField} from './NamedField'
import {StressBox} from './StressBox'

// --------------------------------------------------------
export const ConsequencesTable = ({consequences}) => {

	return <Col>
		{ consequences.map( (c,i) => <Consequence key={i} con={c} /> ) }
	</Col>
}
// --------------------------------------------------------
const Consequence = ({con}) => {
	return <ConsequenceRow>
		<StressBox>{con.value}</StressBox>
		<NamedField name={con.severity} />
	</ConsequenceRow>
}
// --------------------------------------------------------
const ConsequenceRow = styled(Row)`
	padding: ${props => props.theme.gap } 0;
	border-top: 1px solid ${props => props.theme.mutedTextColor };
`
