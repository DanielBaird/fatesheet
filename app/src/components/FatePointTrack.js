
import React from 'react'
import {Row} from '../elements/Row'
import styled from 'styled-components'

// --------------------------------------------------------
export const FatePointTrack = ({points}) => {
	return <Row doubleRightMargin right>
		{ [...Array(points.spaces).keys()].map((v,i) => <FpBox key={i} />) }
	</Row>
}
// --------------------------------------------------------
const FpBox = styled.div`
	position: relative;
	bottom: calc(-1 * ${props => props.theme.gap });
	bottom: calc(-0.5 * (1.66em + ${props => props.theme.stressBorder }));
	background-color: #fff;
	z-index: 2;
	display: inline-box;
	height: 1.66em;
	width: 1.66em;
	border-radius: 50%;
	margin-left: calc(0.5 * ${props => props.theme.gap });
	margin-left: 1px;
	border: ${props => props.theme.stressBorder} solid ${props => props.theme.edgeColor};
`