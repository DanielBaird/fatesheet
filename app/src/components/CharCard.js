import React from 'react'
import styled, {css} from 'styled-components'
import { NamedField } from './NamedField'

export const CharCard = ({character, selected, onSelect}) => {

	return <Card onClick={onSelect} selected={selected}>
		<NamedField name={character.player}>
			{character.name}
		</NamedField>
	</Card>

}
// --------------------------------------------------------
const Card = styled.div`
	margin: 1em 0.5em;
	border: 3px solid ${props => props.selected ? '#369' : '#fff' };
	padding: 1em 2em 0.33em;

	&:hover {
		border-color: red;
	}
`