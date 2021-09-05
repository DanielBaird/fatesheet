import React from 'react'
import styled, {css} from 'styled-components'
import { CharacterSummary } from './CharacterSummary'

export const AllCharacterSummary = ({characters, columns, sidebar, zeroAssets}) => {

	return <Columns columns={columns}>
		{characters.map( (c, i) => <CharacterSummary character={c} sidebar={sidebar} zeroAssets={zeroAssets} /> )}
	</Columns>
}
// --------------------------------------------------------
const Columns = styled.div`
	${ props => props.columns && css`columns: ${props.columns} auto;` }
`