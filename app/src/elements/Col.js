
import styled, {css} from 'styled-components'

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;

	${ props => {
		if (props.narrow) {
			return css`flex: 0 1 auto;`
		}
		if (props.width) {
			return css`flex: ${props.width} 1 0;`
		}
		return css`flex: 1 1 auto;`
	}}

	${ props => props.pad && css`
		padding: ${props.theme.gap};
	`}
	${ props => props.topPad && css`
		padding-top: ${props.theme.gap};
	`}
	${ props => props.bottomPad && css`
		padding-bottom: ${props.theme.gap};
	`}
	${ props => props.margin && css`
		margin-right: ${props.theme.gap};
		margin-bottom: ${props.theme.gap};
	`}
	${ props => props.rightMargin && css`
		margin-right: ${props.theme.gap};
	`}
	${ props => props.doubleRightMargin && css`
		margin-right: calc(2 * ${props.theme.gap});
	`}
	${props => props.border && css`
		border: ${props.theme.edgeWidth} solid ${props.theme.edgeColor};
	`}
`
