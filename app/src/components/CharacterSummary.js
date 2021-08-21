import React from 'react'
import { Box } from '../elements/Box'
import styled from 'styled-components'

export const CharacterSummary = ({character}) => {
	let skillList = character.skillList.reduce( (list, c)=>{
		c.skills.forEach( (s)=> {
			const adjust = c.adjustment || '+0'
			list.push(<span>{'' + s + ' ' + adjust}</span>)
			list.push(<SubtleText> / </SubtleText>)
		})
		return list
	}, [])
	skillList.pop()
	return <Box heading={character.name}>
		<Desc>{character.description}</Desc>
		<Aspect>
			<AspectName>Assets</AspectName>
			{skillList}
		</Aspect>
		{ character.aspectList.map( (a, i) =>
			<Aspect key={i}>
				<AspectName>{a.aspect}</AspectName>
				{a.value}
			</Aspect>
		)}
	</Box>
}
// --------------------------------------------------------
const Desc = styled.p`
	padding-bottom: 0.5em;
`
// --------------------------------------------------------
const Aspect = styled.p`
	padding-bottom: 0.25em;
	padding-left: 1em;
	text-indent: -1em;
`
// --------------------------------------------------------
const SubtleText = styled.span`opacity: 0.33;`
// --------------------------------------------------------
const AspectName = styled.span`
	font-size: 90%;
	font-style: italic;
	margin-right: 0.33em;
	&:after {
		content: ':'

	}
`
// --------------------------------------------------------
