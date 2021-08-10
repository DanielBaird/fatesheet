
import React from 'react'
import styled, {css} from 'styled-components'

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: stretch;

	${props => props.leftPad &&
		css`padding-left: ${props.theme.gap}`
	}
	${props => props.bottomPad &&
		css`padding-bottom: ${props.theme.gap}`
	}
`
