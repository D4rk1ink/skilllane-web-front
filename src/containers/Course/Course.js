import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Row, Col } from 'antd'

import { BannerCourseDetail } from '../../components/BannerCourseDetail'
import { ContentCourse } from '../../components/ContentCourse'
import { ContentDetailCourse } from '../../components/ContentDetailCourse'

const course = {
  rating: 4.5,
  reviewed: 485,
  degree: 'ปริญญาโทบริหารธุรกิจ สาขา Business Innovation',
  degreeHref: 'https://www.skilllane.com/academic/tuxsa/businessinnovation',
  title: 'Pitching and Negotiation การนำเสนอและการต่อรอง',
  syllabus: 'หลักสูตรปริญญาโทออนไลน์',
  syllabusImage:
    'https://skilllane.s3-ap-southeast-1.amazonaws.com/tu/icon-tuxsa.png',
  relatedCourses: [
    {
      title: 'สำเร็จไวใน 7 ขั้นตอน',
      img:
        'https://skilllane.s3.amazonaws.com/courses/highlight_imgs/000/000/563/medium/web_%281%29.png?1487918239',
      instructor: 'สิริลักษณ์ ตันศิริ (โค้ชสิริลักษณ์)',
    },
    {
      title: 'พูดอย่างไรให้ ปัง ดัง โดนใจ',
      img:
        'https://skilllane.s3.amazonaws.com/courses/highlight_imgs/000/000/576/medium/Web_%281%29.png?1488441431',
      instructor: 'รสสุคนธ์ กองเกตุ (ครูเงาะ)',
    },
  ],
  detail: `
    การนำเสนอและการต่อรองเป็นเรื่องที่พวกเราทุกคนทำกันทุกวันอย่างไม่รู้ตัว แต่น้อยคนนักที่สามารถใช้ทักษะนี้ได้อย่างช่ำชอง ซึ่งถือว่าเป็นเรื่องที่เสริมโอกาสมากสำหรับหลายคน ข่าวดีคือทักษะนี้สามารถฝึกฝนให้เก่งได้ ด้วยความรู้ความเข้าใจและทฤษฎีที่ถูกต้อง ในคอร์สนี้คุณจะได้เรียนรู้ทักษะการนำเสนอและการต่อรองอย่างเป็นระบบ คุณจะรู้ว่าจะต้องเตรียมตัวอย่างไร วางแผนกลยุทธ์อย่างไร และปฏิบัติตนอย่างไร เพื่อสร้างผลงานการนำเสนอและการต่อรองที่ดี\n
    
    คอร์สนี้มีทั้งภาคทฤษฎีและตัวอย่างการใช้งานจริง และมีวิทยากรที่เป็น Practioner ตัวจริงอย่าง คุณณัฐวุฒิ พึงเจริญพงศ์ (หมู) ผู้บุกเบิกวงการสตาร์ทอัพไทย ผู้ก่อตั้งบริษัท Ookbee ที่จะมาเล่าให้ฟังถึงวิธีการ Pitching ต่อนักลงทุนอีกด้วย\n

    หากคุณเป็นคนที่ใช้ทักษะนี้อย่างชำนาญ คุณจะมีความสามารถในการโน้วน้าวผู้อื่น และมีความสามารถในการปิดดีลที่ win-win กับทุกฝ่าย สร้างความประทับใจต่อทุกคนที่คุณต้องร่วมงานด้วย ทักษะนี้เป็นทักษะที่ทุกคนต้องมีหากอยากจะเจริญก้าวหน้าในหน้าที่การงาน\n
  `,
  instructors: [
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
      name: 'ณัฐวุฒิ พึงเจริญพงศ์ (หมู)',
      img:
        'https://skilllane.s3.amazonaws.com/users/images/000/264/145/ms/Screen_Shot_2019-08-24_at_08.56.34.png?1566611986',
      rating: 4.7,
      reviewed: 409,
      totalCourse: 3,
      details: [
        'ผู้บุกเบิกวงการสตาร์ทอัพไทย',
        'ประธานเจ้าหน้าที่บริหารและผู้ก่อตั้ง Ookbee บริษัทสตาร์ทอัพชั้นนำของไทย ',
        'ผู้บริหารกองทุน 500 TukTuks ลงทุนมาแล้วกว่า 50 สตาร์ทอัพในเอเชียตะวันออกเฉียงใต้',
        'ประธานเจ้าหน้าที่บริหารร่วม Six Network',
      ],
    },
  ],
  videoPreview:
    'https://skilllane.s3.amazonaws.com/courses/previews/000/001/647/large/3_pitching_640.jpg?1582873341',
  editions: {
    standard: {
      price: 1500,
    },
    premium: {
      price: 4500,
    },
  },
}

export class Course extends Component {
  render() {
    return (
      <Container fluid={true} style={{ padding: '0px 0px' }}>
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <BannerCourseDetail
              title={course.title}
              degree={course.degree}
              degreeHref={course.degreeHref}
              syllabus={course.syllabus}
              syllabusImage={course.syllabusImage}
              rating={course.rating}
              reviewed={course.reviewed}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ContentCourse
              videoPreview={course.videoPreview}
              editions={course.editions}
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ContentDetailCourse
              detail={course.detail}
              relatedCourses={course.relatedCourses}
              instructors={course.instructors}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}
