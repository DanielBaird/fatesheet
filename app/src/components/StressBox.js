
import styled, {css} from 'styled-components'

// --------------------------------------------------------
export const StressBox = styled.div`
	font-weight: bold;
	text-transform: uppercase;
	${props => props.bonus ?
		css`color: ${props => props.theme.stressBonusColor };`
	:
		css`color: ${props => props.theme.stressColor };`
	}
	margin-bottom: -0.1em;
	display: block;
	width: 1.66em;
	height: 1.66em;
	text-align: center;
	border: ${props => props.theme.stressBorder} solid;
	line-height: 1.3em;
	margin:
		0
		calc(2 * ${props => props.theme.stressBorder})
		-0.1em
		0
	;
`
