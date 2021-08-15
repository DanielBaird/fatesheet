
import React from 'react'
import {Col} from '../elements/Col'
import {Row} from '../elements/Row'
import {Box} from '../elements/Box'
import {CharSheet} from './CharSheet'
import {NamedField} from './NamedField'
import {SkillsTable} from './SkillsTable'
import { StressTrack } from './StressTrack'
import { ConsequencesTable } from './ConsequencesTable'

export const FullCharsheet = ({character}) => {

	const aspects = character.aspectList.map( (a) =>
		<NamedField key={a.aspect} name={a.aspect}>{a.value}</NamedField>
	)

	const stunts = character.stuntList.map( (s, i) =>
		<NamedField key={i} name={s.name}>{s.description}</NamedField>
	)

	return <CharSheet>
		<Row>
			<Box bigTitle={character.name}>
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
				<Box heading="Stress and Consequences">
					<Row bottomPad>
						{character.stressList.map( (s,i) => <StressTrack key={i} stress={s} />)}
					</Row>
					<ConsequencesTable consequences={character.consequencesList} />
				</Box>
			</Col>
			<Col width="3">
				<Box heading="Aspects">
					{aspects}
				</Box>
				<Box heading="Stunts etc">
					{stunts}
				</Box>
			</Col>
		</Row>
	</CharSheet>
}
