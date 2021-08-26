import React, { useState } from 'react'
import { FullCharsheet } from './FullCharsheet'
import { CharCard } from './CharCard'
import { Row } from '../elements/Row'
import { AllCharacterSummary } from './AllCharacterSummary'

const PLAYERS = -1
const NPCS = -2
const PLACES = -3
// --------------------------------------------------------
export const CharSelector = ({characters, npcs, places}) => {

	const [current, setCurrent] = useState(PLAYERS)

	const selectionList = characters.map( (c,i) =>
		<CharCard
			key={ i }
			icon="⬩"
			character={ c }
			selected={ i===current }
			onSelect={ ()=> setCurrent(i) }
		/>
	)

	return <>
		<Row center noPrint doubleBottomMargin>
			{selectionList}
			<CharCard
				icon="❖"
				character={{player: "summary", name:"Players"}}
				selected={ current===PLAYERS }
				onSelect={ ()=> setCurrent(PLAYERS) }
			/>
			<CharCard
				icon="❖"
				character={{player: "summary", name:"NPCs"}}
				selected={ current===NPCS }
				onSelect={ ()=> setCurrent(NPCS) }
			/>
			<CharCard
				icon="❖"
				character={{player: "summary", name:"Places"}}
				selected={ current===PLACES }
				onSelect={ ()=> setCurrent(PLACES) }
			/>
		</Row>
		{ current === NPCS && <AllCharacterSummary characters={npcs} /> }
		{ current === PLAYERS && <AllCharacterSummary characters={characters} /> }
		{ current === PLACES && <AllCharacterSummary characters={places} /> }
		{ current >= 0 && <FullCharsheet character={characters[current]} /> }
	</>
}
// --------------------------------------------------------
