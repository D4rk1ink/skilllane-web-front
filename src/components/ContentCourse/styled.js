import styled from 'styled-components'

export const VideContainer = styled.div`
  position: relative;
  width: 100%;
`

export const VideBackground = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
  }
`

export const CourseCardWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const CourseCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;
  border: 1px solid #aaa;
  ${(props) =>
    props.active === true
      ? `
      border: 1px solid #024825;
      border-top-width: 5px;
      padding-top: 15px;
    `
      : `
      padding-top: 20px;
    `}
`

export const PurchasePrice = styled.span`
  line-height: 1;
  font-weight: bold;
  font-size: 2em;
`

export const EnrollButton = styled.button`
  width: 100%;
  height: 50px;
  color: #024825;
  border: 1px solid #024825;
  background: #fff;
  font-size: 1.33em;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  padding: 12px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  ${(props) =>
    props.active === true
      ? `
      color: #fff;
      background: #024825;
    `
      : ``}
  &:hover {
    color: #fff;
    background: #024825;
  }
`

export const IconWrapper = styled.div`
  font-size: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  ${(props) => (props.color ? `color: ${props.color}` : ``)}
`

export const DetailRow = styled.div`
  display: flex;
`

export const DetailCol = styled.div``

export const DetailText = styled.p`
  font-size: 0.9em;
  font-weight: normal;
  line-height: 1;
  padding-left: 15px;
  margin-bottom: 4px;
`
