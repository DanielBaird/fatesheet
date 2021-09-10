import React from 'react'
import { CharacterSummary } from './CharacterSummary'
import {Columns} from '../elements/Columns'

export const AllCharacterSummary = ({characters, columns, sidebar, zeroAssets}) => {

	return <Columns columns={columns}>
		{characters.map( (c, i) => <CharacterSummary character={c} sidebar={sidebar} zeroAssets={zeroAssets} /> )}
	</Columns>
}
