import React from 'react'
import { Container } from 'reactstrap'
import { Row, Col } from 'antd'

import {
  VideContainer,
  VideBackground,
  CourseCardWrapper,
  CourseCard,
  PurchasePrice,
  EnrollButton,
  IconWrapper,
  DetailRow,
  DetailCol,
  DetailText,
} from './styled'

const CheckIcon = () => {
  return (
    <IconWrapper color={'#00532A'}>
      <svg
        class="svg-inline--fa fa-check fa-w-16"
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="check"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
        ></path>
      </svg>
    </IconWrapper>
  )
}

const TimesIcon = () => {
  return (
    <IconWrapper color={'#8E8E8E'}>
      <svg
        class="svg-inline--fa fa-times fa-w-10"
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="times"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
        ></path>
      </svg>
    </IconWrapper>
  )
}

const DetailList = ({ list }) => {
  return (
    <div>
      {list.map((item, idx) => {
        return (
          <DetailRow key={idx}>
            <DetailCol>
              {item.isCheck ? <CheckIcon /> : <TimesIcon />}
            </DetailCol>
            <DetailCol>
              <DetailText>{item.text}</DetailText>
            </DetailCol>
          </DetailRow>
        )
      })}
    </div>
  )
}

export const ContentCourse = (props) => {
  return (
    <Container>
      <Row gutter={15}>
        <Col xl={12} lg={24}>
          <VideContainer>
            <VideBackground>
              <img
                src={
                  'https://skilllane.s3.amazonaws.com/courses/previews/000/001/647/large/3_pitching_640.jpg?1582873341'
                }
              />
            </VideBackground>
          </VideContainer>
        </Col>
        <Col xl={12} lg={24}>
          <CourseCardWrapper>
            <Row gutter={15} style={{ height: '100%' }}>
              <Col xl={12} lg={24}>
                <CourseCard>
                  <Row justify={'center'} align={'middle'} gutter={[0, 8]}>
                    <Col>
                      <PurchasePrice>1,500 บาท</PurchasePrice>
                    </Col>
                  </Row>
                  <Row justify={'center'} align={'middle'} gutter={[0, 8]}>
                    <Col span={24}>
                      <EnrollButton>ชำระเงินเรียนไม่เก็บหน่วยกิต</EnrollButton>
                    </Col>
                  </Row>
                  <Row justify={'center'} align={'middle'} gutter={[0, 8]}>
                    <Col>
                      <DetailList
                        list={[
                          {
                            isCheck: true,
                            text: 'สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ',
                          },
                          {
                            isCheck: true,
                            text:
                              'เนื้อหาทั้งหมด 42 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 29 นาที',
                          },
                          {
                            isCheck: false,
                            text: 'แบบทดสอบทั้งหมด 6 แบบทดสอบ',
                          },
                          { isCheck: false, text: 'ข้อสอบทั้งหมด 1 ข้อสอบ' },
                          {
                            isCheck: false,
                            text:
                              'เก็บหน่วยกิตเรียนปริญญาโทเก็บหน่วยกิตเรียนปริญญาโทเก็บหน่วยกิตเรียนปริญญาโทเก็บหน่วยกิตเรียนปริญญาโทเก็บหน่วยกิตเรียนปริญญาโทเก็บหน่วยกิตเรียนปริญญาโทเก็บหน่วยกิตเรียนปริญญาโทเก็บหน่วยกิตเรียนปริญญาโทเก็บหน่วยกิตเรียนปริญญาโทเก็บหน่วยกิตเรียนปริญญาโท',
                          },
                          {
                            isCheck: false,
                            text: 'ประกาศนียบัตร',
                          },
                        ]}
                      />
                    </Col>
                  </Row>
                </CourseCard>
              </Col>
              <Col xl={12} lg={24}>
                <CourseCard active={true}>
                  <Row justify={'center'} align={'middle'} gutter={[0, 8]}>
                    <Col>
                      <PurchasePrice>4,500 บาท</PurchasePrice>
                    </Col>
                  </Row>
                  <Row justify={'center'} align={'middle'} gutter={[0, 8]}>
                    <Col span={24}>
                      <EnrollButton active={true}>ชำระเงินเรียนเก็บหน่วยกิต</EnrollButton>
                    </Col>
                  </Row>
                  <Row justify={'center'} align={'middle'} gutter={[0, 8]}>
                    <Col>
                      <DetailList
                        list={[
                          {
                            isCheck: true,
                            text: 'สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ',
                          },
                          {
                            isCheck: true,
                            text:
                              'เนื้อหาทั้งหมด 42 วิดีโอ ความยาวรวมกัน 7 ชั่วโมง 29 นาที',
                          },
                          {
                            isCheck: true,
                            text: 'แบบทดสอบทั้งหมด 6 แบบทดสอบ',
                          },
                          { isCheck: true, text: 'ข้อสอบทั้งหมด 1 ข้อสอบ' },
                          {
                            isCheck: true,
                            text: 'ข้อสอบทั้งหมด 1 ข้อสอบ',
                          },
                          {
                            isCheck: true,
                            text: 'เก็บหน่วยกิตเรียนปริญญาโท',
                          },
                          {
                            isCheck: true,
                            text: 'ประกาศนียบัตร',
                          },
                        ]}
                      />
                    </Col>
                  </Row>
                </CourseCard>
              </Col>
            </Row>
          </CourseCardWrapper>
        </Col>
      </Row>
    </Container>
  )
}
