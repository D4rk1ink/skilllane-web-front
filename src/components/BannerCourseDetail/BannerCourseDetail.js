import React from 'react'
import { Container } from 'reactstrap'
import { Row, Col } from 'antd'
import { useMediaQuery } from 'react-responsive'

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
import { SocialShareSVG } from '../SVG'

const SocialShareButton = () => {
  return (
    <ShareButton>
      <ShareSpanIcon>
        <SocialShareSVG />
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

const SubHeader = ({ syllabus, syllabusImage }) => {
  return (
    <SubHeaderWrapper>
      <SubHeaderIcon>
        <img src={syllabusImage} />
      </SubHeaderIcon>
      <SubHeaderText>{syllabus}</SubHeaderText>
    </SubHeaderWrapper>
  )
}

export const BannerCourseDetail = (props) => {
  const rating = props.rating
  const reviewed = props.reviewed
  const degree = props.degree
  const degreeHref = props.degreeHref
  const title = props.title
  const syllabus = props.syllabus
  const syllabusImage = props.syllabusImage
  const isMaxLargeDesktop = useMediaQuery({
    query: '(max-width: 1140px)',
  })
  return (
    <Background>
      <Container fluid={isMaxLargeDesktop}>
        <Row>
          <Col>
            <SubHeader syllabus={syllabus} syllabusImage={syllabusImage} />
          </Col>
        </Row>
        <Row>
          <Col>
            <HeaderText>{title}</HeaderText>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonDegree href={degreeHref}>{degree}</ButtonDegree>
          </Col>
        </Row>
        <Row align={'middle'}>
          <Col>
            <Stars />
          </Col>
          <Col>
            <ReviewText>
              {rating} ({reviewed} รีวิว)
            </ReviewText>
          </Col>
          <Col>
            <SocialShareButton />
          </Col>
        </Row>
      </Container>
    </Background>
  )
}
