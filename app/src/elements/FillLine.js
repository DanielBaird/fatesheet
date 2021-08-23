
import React from 'react'
import styled from 'styled-components'
import {Col} from './Col'

// --------------------------------------------------------
export const FillLine = styled.div`
	border-bottom: 1px dotted ${ props => props.theme.mutedTextColor };
	height: 2em;
`
