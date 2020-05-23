import React, { useState } from 'react'
import { Container } from 'reactstrap'
import { Row, Col, Tabs } from 'antd'
import { useMediaQuery } from 'react-responsive'

import {
  TabsWrapper,
  IconWrapper,
  TitleWrapper,
  InstructorImage,
  InstructorName,
  InstructorSubText,
  InstructorDetailUl,
  InstructorDetailLi,
  CourseRelateDetailWrapper,
  CourseInstructorCard,
  CourseInstructorCardTitle,
  CourseRelateWrapper,
  CourseRelateTitle,
  CourseRelateInstructor,
} from './styled'
import { StarSVG, CommentSVG, PlaySVG } from '../SVG'

const { TabPane } = Tabs

const StarIcon = () => {
  return (
    <IconWrapper color={'#00532A'}>
      <StarSVG />
    </IconWrapper>
  )
}

const CommentIcon = () => {
  return (
    <IconWrapper color={'#00532A'}>
      <CommentSVG />
    </IconWrapper>
  )
}

const PlayIcon = () => {
  return (
    <IconWrapper color={'#00532A'}>
      <PlaySVG />
    </IconWrapper>
  )
}

const Instructor = ({ instructor }) => {
  const isExtraLargeDesktop = useMediaQuery({
    query: '(min-width: 1200px)',
  })
  const subs = [
    {
      icon: StarIcon,
      text: `${instructor.rating} คะแนนเฉลี่ย`,
    },
    {
      icon: CommentIcon,
      text: `${instructor.reviewed} รีวิว`,
    },
    {
      icon: PlayIcon,
      text: `${instructor.totalCourse} คอร์ส`,
    },
  ]
  const Subs = subs.map((sub) => {
    const Icon = sub.icon
    return (
      <Row gutter={[8, 4]}>
        <Col>
          <Icon />
        </Col>
        <Col>
          <InstructorSubText>{sub.text}</InstructorSubText>
        </Col>
      </Row>
    )
  })
  return (
    <TitleWrapper>
      <Row gutter={[8, 0]}>
        <Col lg={isExtraLargeDesktop ? 10 : 3}>
          <InstructorImage>
            <img src={instructor.img} />
          </InstructorImage>
        </Col>
        <Col lg={isExtraLargeDesktop ? 14 : 21}>
          <Row>
            <Col>
              <InstructorName>{instructor.name}</InstructorName>
            </Col>
          </Row>
          <Row>
            <Col>{Subs}</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <InstructorDetailUl>
            {instructor.details.map((detail, idx) => {
              return <InstructorDetailLi>{detail}</InstructorDetailLi>
            })}
          </InstructorDetailUl>
        </Col>
      </Row>
    </TitleWrapper>
  )
}

const CourseRelate = ({ course }) => {
  return (
    <CourseRelateWrapper>
      <Row gutter={8}>
        <Col md={12}>
          <img src={course.img} style={{ width: '100%' }} />
        </Col>
        <Col md={12}>
          <CourseRelateDetailWrapper>
            <CourseRelateTitle>{course.title}</CourseRelateTitle>
            <CourseRelateInstructor>{course.instructor}</CourseRelateInstructor>
          </CourseRelateDetailWrapper>
        </Col>
      </Row>
    </CourseRelateWrapper>
  )
}

const TabsComponent = ({ detail, instructors }) => {
  const [tabSelected, setTabSelected] = useState(1)
  const isExtraLargeDesktop = useMediaQuery({
    query: '(min-width: 1200px)',
  })
  return (
    <TabsWrapper>
      <Tabs
        defaultActiveKey={tabSelected}
        onChange={setTabSelected}
        animated={false}
        size={'large'}
      >
        <TabPane tab={'รายละเอียด'} key={1}>
          <p>{detail}</p>
        </TabPane>
        {isExtraLargeDesktop
          ? [
              <TabPane tab={'วิธีการชำระเงิน'} key={2}>
                วิธีการชำระเงิน
              </TabPane>,
              <TabPane tab={'ห้องสนทนา'} key={3}>
                ห้องสนทนา
              </TabPane>,
              <TabPane tab={'รีวิว'} key={4}>
                รีวิว
              </TabPane>,
            ]
          : [
              <TabPane tab={'ผู้สอน'} key={5}>
                {instructors.map((instructor, idx) => {
                  return <Instructor instructor={instructor} key={idx} />
                })}
              </TabPane>,
              <TabPane tab={'รีวิว'} key={4}>
                รีวิว
              </TabPane>,
            ]}
      </Tabs>
    </TabsWrapper>
  )
}

export const ContentDetailCourse = (props) => {
  const relatedCourses = props.relatedCourses
  const detail = props.detail
  const instructors = props.instructors
  const isMaxLargeDesktop = useMediaQuery({
    query: '(max-width: 1140px)',
  })
  const isExtraLargeDesktop = useMediaQuery({
    query: '(min-width: 1200px)',
  })
  return (
    <Container fluid={isMaxLargeDesktop}>
      <Row gutter={15}>
        <Col xl={18} md={24} style={{ paddingBottom: '30px' }}>
          <TabsComponent detail={detail} instructors={instructors} />
        </Col>
        {isExtraLargeDesktop ? (
          <Col xl={6} md={24}>
            <Row>
              <Col>
                <CourseInstructorCard>
                  <CourseInstructorCardTitle>ผู้สอน</CourseInstructorCardTitle>
                </CourseInstructorCard>
                {instructors.map((instructor, idx) => {
                  return <Instructor instructor={instructor} key={idx} />
                })}
              </Col>
            </Row>
            <Row>
              <Col>
                <CourseInstructorCard>
                  <CourseInstructorCardTitle>
                    คอร์สที่เกี่ยวข้อง
                  </CourseInstructorCardTitle>
                </CourseInstructorCard>
                {relatedCourses.map((course, idx) => {
                  return <CourseRelate course={course} key={idx} />
                })}
              </Col>
            </Row>
          </Col>
        ) : null}
      </Row>
    </Container>
  )
}
