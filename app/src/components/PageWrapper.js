import React from 'react'
import styled from 'styled-components'

export const PageWrapper = (props) => {
	return <Page>{props.children}</Page>
}
// --------------------------------------------------------
const Page = styled.div`
	max-width: 60rem;
	margin: 1rem auto;
`
