import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { Row, Col } from 'antd'

import { BannerCourseDetail } from '../../components/BannerCourseDetail'
import { ContentCourse } from '../../components/ContentCourse'
import { ContentDetailCourse } from '../../components/ContentDetailCourse'

export class Course extends Component {
  render() {
    return (
      <Container fluid={true} style={{ padding: '0px 0px' }}>
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <BannerCourseDetail />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ContentCourse />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <ContentDetailCourse />
          </Col>
        </Row>
      </Container>
    )
  }
}
