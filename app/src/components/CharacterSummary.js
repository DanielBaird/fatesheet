import React from 'react'
import { Box } from '../elements/Box'
import styled, { css } from 'styled-components'
import { Row } from '../elements/Row'
import { Col } from '../elements/Col'

export const CharacterSummary = ({character, sidebar, zeroAssets}) => {

	let skillList;

	if (sidebar) {
		skillList = character.skillList.reduce( (list, c)=>{
			c.skills.forEach( (s)=> {
				const adjust = c.adjustment || '+0'
				if (zeroAssets || adjust !== '+0') {
					list.push(<span key={'span'+s} style={{whiteSpace: 'nowrap'}}>{s + ' ' + adjust}</span>)
				}
			})
			return list
		}, [])

	} else {
		skillList = character.skillList.reduce( (list, c)=>{
			c.skills.forEach( (s)=> {
				const adjust = c.adjustment || '+0'
				if (zeroAssets || adjust !== '+0') {
					list.push(<span key={'span'+s} style={{whiteSpace: 'nowrap'}}>{s + ' ' + adjust}</span>)
					list.push(<SubtleText key={'slash'+s}> / </SubtleText>)
				}
			})
			return list
		}, [])
		skillList.pop()
	}

	return <CharSummaryBox heading={character.name} portrait={character.portrait}>
		<Desc>{character.description}</Desc>
		<Row>
			{ sidebar &&
				<Sidebar>{skillList}</Sidebar>
			}
			<div>
				{ !sidebar &&
					<Aspect>
						<AspectName>Assets</AspectName>
						{skillList}
					</Aspect>
				}
				{ character.aspectList.map( (a, i) =>
					<Aspect key={i}>
						<AspectName>{a.aspect}</AspectName>
						{a.value}
					</Aspect>
				)}
			</div>
		</Row>
	</CharSummaryBox>
}
// --------------------------------------------------------
const CharSummaryBox = styled(Box)`
	break-inside: avoid;
	${props => props.portrait && css`
		background-image: url("${process.env.PUBLIC_URL}/${props => props.portrait}");
		// min-height: 220px;
		background-size: auto 85%;
		background-repeat: no-repeat;
		background-position: bottom right;
		& p {
			padding-right: 100px;
			text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 4px #fff, 0 0 8px #fff;
		}
	`}
`
// --------------------------------------------------------
const Aspect = styled.p`
	padding-bottom: 0.25em;
	padding-left: 1em;
	text-indent: -1em;
`
// --------------------------------------------------------
const Desc = styled.p`padding-bottom: 0.5em;`
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
const Sidebar = styled(Col).attrs({narrow: true})`
	margin-right: ${props => props.theme.gap };
	margin-right: 1em;
	text-align: right;
`
// --------------------------------------------------------
