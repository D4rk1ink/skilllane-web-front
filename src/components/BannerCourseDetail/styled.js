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

export const ButtonDegree = styled.a`
  display: block;
  font-size: 14px;
  max-width: 100%;
  color: #555;
  border: 1px solid #555;
  background: #fff;
  border-radius: 20px;
  padding: 3px 10px;
  transition: 0.2s;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 5px;
  margin-bottom: 10px;
  &:hover {
    color: #fff;
    background: #00532a;
    border: 1px solid #024825;
  }
`

export const Star = styled.div`
  line-height: 1;
  width: 22px;
  height: 22px;
  background-image: url(/assets/raty/star-stroke-5aa3077ffda78ce9885e9a11639d53f22c0fe35392066a7fdcb2a53bc404eb8f.svg);
  background-repeat: no-repeat;
  margin-right: 2px;
`

export const ReviewText = styled.h3`
  font-size: 1.33em;
  font-weight: normal;
  color: #676767;
  margin: 0 8px;
`

export const ShareButton = styled.div`
  border-style: solid;
  border-radius: 2px;
  border-width: 1px;
  padding: 2px 8px;
  border-color: #00532a;
  color: #00532a;
  cursor: point;
`

export const ShareSpanIcon = styled.span`
  font-size: 14px;
  margin-right: 5px;
`

export const ShareSpanText = styled.span`
  font-size: 1em;
`
