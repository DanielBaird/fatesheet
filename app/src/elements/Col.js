
import React from 'react'
import styled, {css} from 'styled-components'

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: stretch;
	flex: 1 0 auto;

	${ props => {
		if (props.sidePad === true) { props.sidePad = 1 }
		return css`padding-left: calc(${props.sidePad} * ${props.theme.gap});`
	}}
	${ props => props.margin && css`
		margin-right: calc(${props.theme.edgeWidth} + ${props.theme.gap});
		margin-bottom: calc(${props.theme.edgeWidth} + ${props.theme.gap});
	`}
	${ props => props.doubleRightMargin && css`
		margin-right: calc(${props.theme.edgeWidth} + 2 * ${props.theme.gap});
	`}
	${props => props.border && css`
		border: ${props.theme.edgeWidth} solid ${props.theme.edgeColor};
	`}
`
