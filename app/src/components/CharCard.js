import React from 'react'
import styled from 'styled-components'
import { NamedField } from './NamedField'

export const CharCard = ({character, icon, selected, onSelect}) => {
	// the ' ' in the name props below is a hairspace
	return <Card onClick={onSelect} selected={selected}>
		<NamedField name={icon + character.player}>
			{character.name}
		</NamedField>
	</Card>
}
// --------------------------------------------------------
const Card = styled.div`
	font-size: 90%;
	flex: 1 1 auto;
	margin: 1em 0.15em 0;
	border: 3px solid ${props => props.selected ? props.theme.selectionHighlight : '#ffffffff' };
	padding: 0.66em 0 0 0.5em;
	cursor: pointer;

	&:hover {
		border-color: ${props => props.theme.selectionHover };
	}
`