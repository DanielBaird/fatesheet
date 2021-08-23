
import React from 'react'
import styled, { css } from 'styled-components'
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
	return <ConsequenceRow bonus={!!con.bonusValue}>
		<StressBox bonus={!!con.bonusValue}>
			{con.value || con.bonusValue}
		</StressBox>
		<NamedField name={con.severity} />
	</ConsequenceRow>
}
// --------------------------------------------------------
const ConsequenceRow = styled(Row)`
	padding: ${props => props.theme.gap } 0;
	${ props => props.bonus ?
		css`border-top: 1px solid ${props => props.theme.stressBonusColor };`
	:
		css`border-top: 1px solid ${props => props.theme.mutedTextColor };`
	}
`
