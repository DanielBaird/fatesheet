import React from 'react'
import { Box } from '../elements/Box'
import styled from 'styled-components'

export const AllCharacterSummary = ({characters}) => {

	return characters.map( (c, i) =>
		<Box key={i} heading={c.name}>
			<Desc>{c.description}</Desc>
			{ c.aspectList.map( (a, i) =>
				<Aspect key={i}>
					<AspectName>{a.aspect}</AspectName>
					{a.value}
				</Aspect>
			)}
		</Box>
	)
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
const AspectName = styled.span`
	font-size: 90%;
	font-style: italic;
	margin-right: 0.33em;
	&:after {
		content: ':'

	}
`
// --------------------------------------------------------
