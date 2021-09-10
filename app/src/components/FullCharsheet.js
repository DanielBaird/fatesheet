
import React from 'react'
import {Col} from '../elements/Col'
import {Row} from '../elements/Row'
import {Box} from '../elements/Box'
import {NamedField} from './NamedField'
import {SkillsTable} from './SkillsTable'
import { StressTrack } from './StressTrack'
import { ConsequencesTable } from './ConsequencesTable'
import { FatePointTrack } from './FatePointTrack'
import { References } from './References'
import styled, { css } from 'styled-components'

export const FullCharsheet = ({character, references}) => {

	const aspects = character.aspectList.map( (a) => {
		let fill = a.fill
		if (!a.value && !a.fill) { fill = 1 }
		return <NamedField key={a.aspect} name={a.aspect} fill={fill}>{a.value}</NamedField>
	})

	const stunts = character.stuntList.map( (s, i) =>
		<NamedField key={i} name={s.name}>{s.description}</NamedField>
	)

	return <CharBox portrait={character.portrait}>
		{ character.fatePoints && <FatePointTrack points={character.fatePoints} /> }
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
				<Box heading="Assets">
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
		<Row>
			{/* <Box heading="Reference"> */}
				<References
					include={['magic']}
					references={references}
				/>
			{/* </Box> */}
		</Row>
	</CharBox>
}
// --------------------------------------------------------
const CharBox = styled(Col)`
	${props => props.portrait && css`
		&:after {
			position: absolute;
			top: 5%; bottom: 0;
			left: 0; right: 0;
			content: '';
			opacity: 0.3;
			background-image: url("${process.env.PUBLIC_URL}/${props => props.portrait}");
			background-size: contain;
			background-position: bottom right;
			background-repeat: no-repeat;
		}
	`}
`
