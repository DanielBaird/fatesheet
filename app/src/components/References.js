
import React from 'react'
import {Columns} from '../elements/Columns'
import {NamedField} from './NamedField'
import styled from 'styled-components'

export const References = ({references, include}) => {

	if (!include) {
		include = references.map(ref => ref.type)
	}

	return include.map(typeToInclude => {
		const ref = references.find(r => r.type === typeToInclude)
		return <RefNamedField name={ref.type}>
			<Columns columns="5">
				{ ref.entries.map( e => <RefPara>
					<b>{e.name}</b><br/>{e.content}
				</RefPara>)}
			</Columns>
		</RefNamedField>
	})
}
// --------------------------------------------------------
const RefPara = styled.p`
	margin-bottom: 1em;
	break-inside: avoid;
	font-size: 80%;
`
// --------------------------------------------------------
const RefNamedField = styled(NamedField)`
	margin-bottom: 0;
	padding-bottom: 0;
`
