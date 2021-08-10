
import React from 'react'
import styled, {css} from 'styled-components'
import {Col} from '../elements/Col'
import {BoxHead} from './BoxHead'

export const Box = (props) => {
	return <Col>
		<BoxHead>{props.heading}</BoxHead>
		{props.children}
	</Col>
}
