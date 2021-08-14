
import React from 'react'
import {Col} from '../elements/Col'
import {Row} from '../elements/Row'
import {Box} from '../elements/Box'
import {CharSheet} from './CharSheet'
import {NamedField} from './NamedField'
import {SkillsTable} from './SkillsTable'

export const FullCharsheet = ({character}) => {

	const aspects = character.aspectList.map( (a) =>
		<NamedField key={a.aspect} name={a.aspect}>{a.value}</NamedField>
	)

	return <CharSheet>
		<Row>
			<Box>
				<Row>
					<NamedField name="description">{character.description}</NamedField>
					<NamedField narrow name="pronouns">{character.pronouns}</NamedField>
				</Row>
			</Box>
		</Row>
		<Row>
			<Col width="2">
				<Box heading="Skills">
					<SkillsTable skills={character.skillList} />
				</Box>
				<Box heading="Stress and Consequences">conc</Box>
			</Col>
			<Col width="3">
				<Box heading="Aspects">
					{aspects}
				</Box>
				<Box heading="Stunts etc">Stunts etc</Box>
			</Col>
		</Row>
	</CharSheet>
}
