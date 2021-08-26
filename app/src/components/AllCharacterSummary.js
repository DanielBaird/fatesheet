import React from 'react'
import { CharacterSummary } from './CharacterSummary'

export const AllCharacterSummary = ({characters}) => {

	return characters.map( (c, i) => <CharacterSummary character={c} /> )
}
