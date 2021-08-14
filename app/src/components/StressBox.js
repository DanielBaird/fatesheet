
import styled from 'styled-components'

// --------------------------------------------------------
export const StressBox = styled.div`
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.stressColor };
	margin-bottom: -0.1em;
	display: block;
	width: 1.66em;
	height: 1.66em;
	text-align: center;
	border: ${props => props.theme.stressBorder} solid ${props => props.theme.stressColor};
	line-height: 1.3em;
	margin:
		0
		calc(0.5 * ${props => props.theme.gap})
		-0.1em
		0
	;
`
