import React, { useState } from 'react'
import { FullCharsheet } from './FullCharsheet'
import { CharCard } from './CharCard'
import { Row } from '../elements/Row'

export const CharSelector = ({characters}) => {

	const [current, setCurrent] = useState(0)

	const selectionList = characters.map( (c,i) =>
		<CharCard
			character={ c }
			selected={ i===current }
			onSelect={ ()=> setCurrent(i) }
		/>
	)

	return <>
		<Row center>{selectionList}</Row>
		<FullCharsheet character={characters[current]} />
	</>
}
