import React from 'react'
import { Container } from 'reactstrap'
import { Row, Col } from 'antd'

import {
  Background,
  SubHeaderIcon,
  SubHeaderText,
  SubHeaderWrapper,
  HeaderText,
} from './styled'

const SubHeader = () => {
  return (
    <SubHeaderWrapper>
      <SubHeaderIcon>
        <img
          src={
            'https://skilllane.s3-ap-southeast-1.amazonaws.com/tu/icon-tuxsa.png'
          }
        />
      </SubHeaderIcon>
      <SubHeaderText>หลักสูตรปริญญาโทออนไลน์</SubHeaderText>
    </SubHeaderWrapper>
  )
}

export const BannerCourseDetail = (props) => {
  return (
    <Background>
      <Container>
        <Row>
          <Col>
            <SubHeader />
          </Col>
        </Row>
        <Row>
          <Col>
            <HeaderText>
              Pitching and Negotiation การนำเสนอและการต่อรอง
            </HeaderText>
          </Col>
        </Row>
      </Container>
    </Background>
  )
}
