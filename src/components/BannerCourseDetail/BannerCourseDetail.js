import React from 'react'
import { Container } from 'reactstrap'
import { Row, Col } from 'antd'

import {
  Background,
  SubHeaderIcon,
  SubHeaderText,
  SubHeaderWrapper,
  HeaderText,
  ButtonDegree,
  Star,
  ReviewText,
  ShareButton,
  ShareSpanIcon,
  ShareSpanText,
} from './styled'

const SocialShareButton = () => {
  return (
    <ShareButton>
      <ShareSpanIcon>
        <svg
          class="svg-inline--fa fa-share-alt fa-w-14"
          aria-hidden="true"
          focusable="false"
          data-prefix="far"
          data-icon="share-alt"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M352 320c-25.6 0-48.9 10-66.1 26.4l-98.3-61.5c5.9-18.8 5.9-39.1 0-57.8l98.3-61.5C303.1 182 326.4 192 352 192c53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 9.8 1.5 19.6 4.4 28.9l-98.3 61.5C144.9 170 121.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.6 0 48.9-10 66.1-26.4l98.3 61.5c-2.9 9.4-4.4 19.1-4.4 28.9 0 53 43 96 96 96s96-43 96-96-43-96-96-96zm0-272c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM96 304c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm256 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
          ></path>
        </svg>
      </ShareSpanIcon>
      <ShareSpanText>แชร์คอร์สนี้</ShareSpanText>
    </ShareButton>
  )
}

const Stars = () => {
  return (
    <Row>
      {Array(5)
        .fill(null)
        .map((v, idx) => (
          <Col key={idx}>
            <Star>
              <img
                src={
                  'https://www.skilllane.com/assets/raty/star-filled-625a2874bb73bbd9bc05639104f21c4e5563a3a5f3b933180ff4be08adeb9aad.svg'
                }
              />
            </Star>
          </Col>
        ))}
    </Row>
  )
}

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
        <Row>
          <Col>
            <ButtonDegree
              href={
                'https://www.skilllane.com/academic/tuxsa/businessinnovation'
              }
            >
              ปริญญาโทบริหารธุรกิจ สาขา Business Innovation
            </ButtonDegree>
          </Col>
        </Row>
        <Row align={'middle'}>
          <Col>
            <Stars />
          </Col>
          <Col>
            <ReviewText>4.9 (250 รีวิว)</ReviewText>
          </Col>
          <Col>
            <SocialShareButton />
          </Col>
        </Row>
      </Container>
    </Background>
  )
}
