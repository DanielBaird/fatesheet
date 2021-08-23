
import React from 'react'
import { Row } from '../elements/Row'
import { Col } from '../elements/Col'
import styled from 'styled-components'
import { FieldHead } from './NamedField'

// --------------------------------------------------------
export const FatePointTrack = ({points}) => {
	return <FpTrack doubleRightMargin right>
		<Col narrow right>
			<Refresh right>refresh: {points.refresh}</Refresh>
			<Row>
				{ [...Array(points.spaces).keys()].map((v,i) => <FpBox key={i} />) }
			</Row>
		</Col>
	</FpTrack>
}
// --------------------------------------------------------
const FpTrack = styled(Row)`
	position: relative;
	bottom: calc(-0.5 * (1.66em + ${props => props.theme.edgeWidth }));
`
// --------------------------------------------------------
const Refresh = styled(FieldHead)`
	margin-bottom: 0.33em;
	margin-right: calc(0.33 * 1.66em);
`
// --------------------------------------------------------
const FpBox = styled.div`
	background-color: #fff;
	z-index: 2;
	display: inline-box;
	height: 1.66em;
	width: 1.66em;
	border-radius: 50%;
	margin-left: calc(0.5 * ${props => props.theme.gap });
	margin-left: 1px;
	border: ${props => props.theme.stressBorder} solid ${props => props.theme.edgeColor};
	border: ${props => props.theme.edgeWidth} solid ${props => props.theme.edgeColor};
`