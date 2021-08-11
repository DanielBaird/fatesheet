
import React from 'react'
import styled, {css} from 'styled-components'
import {Col} from '../elements/Col'
import {Row} from '../elements/Row'
import {CharSheet} from './CharSheet'
import {Box} from './Box'

export const FullCharsheet = ({character}) => {

	return <CharSheet>
		<Row>
			<Box>name</Box>
		</Row>
		<Row>
			<Col>
				<Box heading="Skills">skills</Box>
				<Box heading="Stress">stress</Box>
				<Box heading="Consequences">conc</Box>
			</Col>
			<Col>
				<Box heading="Aspects">Aspects</Box>
				<Box heading="Stunts etc">Stunts etc</Box>
			</Col>
		</Row>
	</CharSheet>
}
