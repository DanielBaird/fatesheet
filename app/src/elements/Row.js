
import styled, {css} from 'styled-components'

export const Row = styled.div`
	display: flex;
	flex-direction: row;

	${ props => {
		if (props.narrow) { return css`flex: 0 0 auto;` }
		if (props.width)  { return css`flex: ${props.width} 0 0;` }
		                    return css`flex: 1 0 auto;`
	}}

	${ props => props.wrap && css`
		flex-wrap: wrap;
	`}

	${ props => props.center ?
		css`justify-content: center;`
	:
		( props.right ?
			css`justify-content: flex-end;`
		:
			css`justify-content: flex-start;`
		)
	}
	${ props => props.pad && css`
		padding: ${props.theme.gap};
	`}
	${ props => props.halfTopPad && css`
		padding-top: calc(0.5 * ${props.theme.gap});
	`}
	${ props => props.bottomPad && css`
		padding-bottom: ${props.theme.gap};
	`}
	${ props => props.margin && css`
		margin-right: ${props.theme.gap};
		margin-bottom: ${props.theme.gap};
	`}
	${ props => props.doubleBottomMargin && css`
		margin-bottom: calc(2 * ${props.theme.gap});
	`}
	${ props => props.marginRight && css`
		margin-right: ${props.theme.gap};
	`}
	${ props => props.doubleRightMargin && css`
		margin-right: calc(2 * ${props.theme.gap});
	`}
	${props => props.border && css`
		border: ${props.theme.edgeWidth} solid ${props.theme.edgeColor};
	`}

	${props => props.noPrint && css`
		@media print { display: none; }
	`}
`
