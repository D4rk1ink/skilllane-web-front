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

const { TabPane } = Tabs

const StarIcon = () => {
  return (
    <IconWrapper color={'#00532A'}>
      <svg
        class="svg-inline--fa fa-star fa-w-18"
        aria-hidden="true"
        focusable="false"
        data-prefix="fa"
        data-icon="star"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
        ></path>
      </svg>
    </IconWrapper>
  )
}

const CommentIcon = () => {
  return (
    <IconWrapper color={'#00532A'}>
      <svg
        class="svg-inline--fa fa-comment fa-w-16"
        aria-hidden="true"
        focusable="false"
        data-prefix="fa"
        data-icon="comment"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
        ></path>
      </svg>
    </IconWrapper>
  )
}

const PlayIcon = () => {
  return (
    <IconWrapper color={'#00532A'}>
      <svg
        class="svg-inline--fa fa-play-circle fa-w-16"
        aria-hidden="true"
        focusable="false"
        data-prefix="fa"
        data-icon="play-circle"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"
        ></path>
      </svg>{' '}
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
      text: `${instructor.rating} รีวิว`,
    },
    {
      icon: PlayIcon,
      text: `${instructor.rating} คอร์ส`,
    },
  ]
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
            <Col>
              {subs.map((sub) => {
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
              })}
            </Col>
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

export const ContentDetailCourse = (props) => {
  const courses = [
    {
      title: 'สำเร็จไวใน 7 ขั้นตอน',
      img:
        'https://skilllane.s3.amazonaws.com/courses/highlight_imgs/000/000/563/medium/web_%281%29.png?1487918239',
      instructor: 'สิริลักษณ์ ตันศิริ (โค้ชสิริลักษณ์)',
    },
  ]
  const courseDetail = `
    การนำเสนอและการต่อรองเป็นเรื่องที่พวกเราทุกคนทำกันทุกวันอย่างไม่รู้ตัว แต่น้อยคนนักที่สามารถใช้ทักษะนี้ได้อย่างช่ำชอง ซึ่งถือว่าเป็นเรื่องที่เสริมโอกาสมากสำหรับหลายคน ข่าวดีคือทักษะนี้สามารถฝึกฝนให้เก่งได้ ด้วยความรู้ความเข้าใจและทฤษฎีที่ถูกต้อง ในคอร์สนี้คุณจะได้เรียนรู้ทักษะการนำเสนอและการต่อรองอย่างเป็นระบบ คุณจะรู้ว่าจะต้องเตรียมตัวอย่างไร วางแผนกลยุทธ์อย่างไร และปฏิบัติตนอย่างไร เพื่อสร้างผลงานการนำเสนอและการต่อรองที่ดี\n
    
    คอร์สนี้มีทั้งภาคทฤษฎีและตัวอย่างการใช้งานจริง และมีวิทยากรที่เป็น Practioner ตัวจริงอย่าง คุณณัฐวุฒิ พึงเจริญพงศ์ (หมู) ผู้บุกเบิกวงการสตาร์ทอัพไทย ผู้ก่อตั้งบริษัท Ookbee ที่จะมาเล่าให้ฟังถึงวิธีการ Pitching ต่อนักลงทุนอีกด้วย\n

    หากคุณเป็นคนที่ใช้ทักษะนี้อย่างชำนาญ คุณจะมีความสามารถในการโน้วน้าวผู้อื่น และมีความสามารถในการปิดดีลที่ win-win กับทุกฝ่าย สร้างความประทับใจต่อทุกคนที่คุณต้องร่วมงานด้วย ทักษะนี้เป็นทักษะที่ทุกคนต้องมีหากอยากจะเจริญก้าวหน้าในหน้าที่การงาน\n
  `
  const instructors = [
    {
      name: 'อ.ดร.สุรพิชย์ พรหมสิทธิ์ (อ.หนึ่ง)',
      img:
        'https://skilllane.s3.amazonaws.com/users/images/001/090/500/ms/Screen_Shot_2019-05-13_at_17.31.44.png?1557744134',
      rating: 4.8,
      reviewed: 485,
      totalCourse: 5,
      details: [
        'ผู้ช่วยอธิการบดีฝ่ายวิชาการ มหาวิทยาลัยธรรมศาสตร์',
        'ที่ปรึกษาและวิทยากรด้านการวางแผนการพัฒนาองค์กร ให้แก่องค์กรชั้นนำ ทั้งภาครัฐและเอกชน',
        'ปริญญาตรี ศิลปศาสตร์บัณฑิต สาขาภาษาอังกฤษธุรกิจ (เกียรตินิยม) มหาวิทยาลัยอัสสัมชัญ',
        'ปริญญาโท MBA University of Western Sydney, Australia',
        'ปริญญาเอก Ph.D. University of Technology, Sydney, Australia',
      ],
    },
    {
      name: 'อ.ดร.สุรพิชย์ พรหมสิทธิ์ (อ.หนึ่ง)',
      img:
        'https://skilllane.s3.amazonaws.com/users/images/001/090/500/ms/Screen_Shot_2019-05-13_at_17.31.44.png?1557744134',
      rating: 4.8,
      reviewed: 485,
      totalCourse: 5,
      details: [
        'ผู้ช่วยอธิการบดีฝ่ายวิชาการ มหาวิทยาลัยธรรมศาสตร์',
        'ที่ปรึกษาและวิทยากรด้านการวางแผนการพัฒนาองค์กร ให้แก่องค์กรชั้นนำ ทั้งภาครัฐและเอกชน',
        'ปริญญาตรี ศิลปศาสตร์บัณฑิต สาขาภาษาอังกฤษธุรกิจ (เกียรตินิยม) มหาวิทยาลัยอัสสัมชัญ',
        'ปริญญาโท MBA University of Western Sydney, Australia',
        'ปริญญาเอก Ph.D. University of Technology, Sydney, Australia',
      ],
    },
  ]
  const [tabSelected, setTabSelected] = useState(1)
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
          <TabsWrapper>
            <Tabs
              defaultActiveKey={tabSelected}
              onChange={setTabSelected}
              animated={false}
              size={'large'}
            >
              <TabPane tab={'รายละเอียด'} key={1}>
                <p>{courseDetail}</p>
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
                {courses.map((course, idx) => {
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
