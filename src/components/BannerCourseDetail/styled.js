import styled from 'styled-components'

export const Background = styled.div`
  background-size: cover;
  background-image: url('https://skilllane.s3-ap-southeast-1.amazonaws.com/banner_academic/tu_banner.png');
  width: 100%;
  padding-top: 35px;
  padding-bottom: 35px;
  height: 250px;
  @media (max-width: 1199px) {
    height: auto;
  }

  @media (max-width: 1140px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`

export const SubHeaderIcon = styled.span`
  display: inline-flex;
  width: 55px;
  height: 12px;
  color: #d13434;
`

export const SubHeaderText = styled.span`
  color: #d13434;
`

export const SubHeaderWrapper = styled.div`
  margin-bottom: 10px;
`

export const HeaderText = styled.h1`
  color: #676767;
  margin-bottom: 10px;
`
