
import React from 'react'
import styled from 'styled-components'

// --------------------------------------------------------
export const SkillsTable = ({skills}) => {

	return <SkillTable><tbody>
		{ skills.map( (s,i) => <SkillRow key={i} skill={s} /> ) }
	</tbody></SkillTable>
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
const SkillTable = styled.table`
	border-collapse: collapse;
`
// --------------------------------------------------------
const SkillLevel = styled.th`
	border-top: 1px solid ${props => props.theme.mutedTextColor };
	padding: calc(0.5 * ${props => props.theme.gap });
	margin: 0;
	text-align: right;
	white-space: nowrap;
	vertical-align: top;
	padding-right: ${props => props.theme.gap };
`
// --------------------------------------------------------
const Skills = styled.td`
	border-top: 1px solid ${props => props.theme.mutedTextColor };
	padding: calc(0.25 * ${props => props.theme.gap });
	margin: 0;
`
// --------------------------------------------------------
