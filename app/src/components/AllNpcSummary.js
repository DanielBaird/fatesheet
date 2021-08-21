import React from 'react'
import { Box } from '../elements/Box'
import styled from 'styled-components'
import { CharacterSummary } from './CharacterSummary'

export const AllCharacterSummary = ({characters}) => {

	return characters.map( (c, i) => <CharacterSummary character={c} /> )
}
