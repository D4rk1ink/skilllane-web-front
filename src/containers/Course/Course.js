import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import { BannerCourseDetail } from '../../components/BannerCourseDetail'

export class Course extends Component {
  render() {
    return (
      <Container fluid={true} style={{ padding: '0px 0px' }}>
        <Row>
          <Col>
            <BannerCourseDetail />
          </Col>
        </Row>
      </Container>
    )
  }
}
