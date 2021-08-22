
import React from 'react'
import {Row} from '../elements/Row'
import {NamedField} from './NamedField'
import {StressBox} from './StressBox'

// --------------------------------------------------------
export const StressTrack = ({stress}) => {
	return <NamedField name={stress.stressType}>
		<Row halfTopPad>
			{ stress.values.map((v,i) => <StressBox key={i}>{v}</StressBox>) }
			{ stress.bonusValues && stress.bonusValues.map((v,i) => <StressBox bonus key={i}>{v}</StressBox>) }
		</Row>
	</NamedField>
}
