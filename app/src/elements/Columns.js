
import styled, {css} from 'styled-components'

export const Columns = styled.div`
	${ props => props.columns && css`
		columns: ${props.columns} auto;
		${props => props.smallGap ?
			css`column-gap: 0.5em;`
		:
			css`column-gap: ${props.theme.gap};`
		}
	` }
`