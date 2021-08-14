
import React from 'react'
import styled from 'styled-components'
import {Col} from '../elements/Col'

// --------------------------------------------------------
export const SkillsTable = ({skills}) => {
	return <table>
		{ skills.map( (s,i) => <SkillRow key={i} skill={s} /> ) }
	</table>
}
// --------------------------------------------------------
const SkillRow = ({skill}) => {
	return <tr>
		<SkillLevel>
			{skill.level}
			{skill.adjustment && " (" + skill.adjustment + ")"}
			:
		</SkillLevel>
		<Skills>
			{ skill.skills && skill.skills.join(', ') }
		</Skills>
	</tr>
}
// --------------------------------------------------------
const SkillLevel = styled.th`
	border-top: 1px solid #ccc;
	text-align: right;
	white-space: nowrap;
	vertical-align: top;
	padding: calc(0.25 * ${props => props.theme.gap });
	padding-right: ${props => props.theme.gap };
`
// --------------------------------------------------------
const Skills = styled.td`
	border-top: 1px solid #ccc;
	padding: calc(0.25 * ${props => props.theme.gap });
`
// --------------------------------------------------------
