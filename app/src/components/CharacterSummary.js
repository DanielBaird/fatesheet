import React from 'react'
import { Box } from '../elements/Box'
import styled, { css } from 'styled-components'

export const CharacterSummary = ({character}) => {
	let skillList = character.skillList.reduce( (list, c)=>{
		c.skills.forEach( (s)=> {
			const adjust = c.adjustment || '+0'
			list.push(<span key={'span'+s} style={{whiteSpace: 'nowrap'}}>{s + ' ' + adjust}</span>)
			list.push(<SubtleText key={'slash'+s}> / </SubtleText>)
		})
		return list
	}, [])
	skillList.pop()
	console.log(character)
	return <CharSummaryBox heading={character.name} portrait={character.portrait}>
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
	</CharSummaryBox>
}
// --------------------------------------------------------
const CharSummaryBox = styled(Box)`
	${props => props.portrait && css`
		background-image: url("${props => props.portrait}");
		min-height: 260px;
		background-size: auto 240px;
		background-repeat: no-repeat;
		background-position: bottom right;
		& > p {
			padding-right: 100px;
			text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff;
		}
	`}
`
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
		content: ':';
	}
`
// --------------------------------------------------------
