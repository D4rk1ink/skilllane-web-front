import React from 'react'
import { Container } from 'reactstrap'
import { Row, Col } from 'antd'
import { useMediaQuery } from 'react-responsive'

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
import { CheckSVG, TimesSVG } from '../SVG'
import { standardCheckList, premiumCheckList } from './utils'
import { numberWithCommas } from '../../utils/number'

const CheckIcon = () => {
  return (
    <IconWrapper color={'#00532A'}>
      <CheckSVG />
    </IconWrapper>
  )
}

const TimesIcon = () => {
  return (
    <IconWrapper color={'#8E8E8E'}>
      <TimesSVG />
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
  const videoPreview = props.videoPreview
  const editions = props.editions
  const couseCards = [
    {
      type: 'standard',
      price: editions.standard.price,
      textButton: 'ชำระเงินเรียนไม่เก็บหน่วยกิต',
      checList: standardCheckList,
    },
    {
      type: 'premium',
      price: editions.premium.price,
      textButton: 'ชำระเงินเรียนเก็บหน่วยกิต',
      checList: premiumCheckList,
    },
  ]
  const isMaxLargeDesktop = useMediaQuery({
    query: '(max-width: 1140px)',
  })
  const isSmallDesktop = useMediaQuery({
    query: '(min-width: 576px)',
  })
  const rowReverse = isSmallDesktop ? { flexDirection: 'row-reverse' } : {}
  return (
    <Container fluid={isMaxLargeDesktop}>
      <Row gutter={15}>
        <Col xl={12} md={24} style={{ paddingBottom: '30px' }}>
          <VideContainer>
            <VideBackground>
              <img src={videoPreview} />
            </VideBackground>
          </VideContainer>
        </Col>
        <Col xl={12} md={24}>
          <CourseCardWrapper>
            <Row gutter={15} style={{ height: '100%' }}>
              {couseCards.map((couse, idx) => {
                const isPremium = couse.type === 'premium'
                return (
                  <Col
                    xl={12}
                    md={24}
                    xs={24}
                    style={{ paddingBottom: '30px' }}
                    key={idx}
                  >
                    <CourseCard active={isPremium}>
                      <Row
                        justify={'center'}
                        align={'middle'}
                        gutter={[15, 8]}
                        style={{ ...rowReverse }}
                      >
                        <Col xl={24} md={12} xs={24}>
                          <Row
                            justify={'center'}
                            align={'middle'}
                            gutter={[0, 8]}
                          >
                            <Col>
                              <PurchasePrice>
                                {numberWithCommas(couse.price)}
                              </PurchasePrice>
                            </Col>
                          </Row>
                          <Row
                            justify={'center'}
                            align={'middle'}
                            gutter={[0, 8]}
                          >
                            <Col span={24}>
                              <EnrollButton active={isPremium}>
                                {couse.textButton}
                              </EnrollButton>
                            </Col>
                          </Row>
                        </Col>
                        <Col xl={24} md={12} xs={24}>
                          <DetailList list={couse.checList} />
                        </Col>
                      </Row>
                    </CourseCard>
                  </Col>
                )
              })}
            </Row>
          </CourseCardWrapper>
        </Col>
      </Row>
    </Container>
  )
}
