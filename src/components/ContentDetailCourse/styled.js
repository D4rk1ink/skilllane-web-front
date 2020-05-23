import styled from 'styled-components'

export const TabsWrapper = styled.div`
  .ant-tabs-ink-bar {
    background-color: #00532A;
    height: 5px;
  }
  .ant-tabs-nav .ant-tabs-tab {
    padding-right: 15px;
    padding-left: 15px;
    margin: 0;
    font-size: 1.33em;
    font-weight: normal;
    line-height: 1;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: #00532A;
  }
  .ant-tabs-tab,
  .ant-tabs-tab:hover {
    color: #8E8E8E;
  }
  .ant-tabs-tab:hover {
    background-color: #fafafa;
  }
  .ant-tabs {
    font-size: 1em;
  }
`

export const IconWrapper = styled.div`
  width: 1em;
`

export const InstructorWrapper = styled.div`
  &:not(last-child) {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #f0f0f0;
  }
`

export const InstructorImage = styled.div`
  border-radius: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
`

export const InstructorName = styled.div`
  color: #00532A;
  font-weight: bold;
  font-size: 1em;
  word-break: break-word;
`

export const InstructorDetailUl = styled.li`
  padding-top: 12px;
  padding-left: 24px;
`

export const InstructorDetailLi = styled.li`
  list-style-type: disc;
`

export const InstructorSubText = styled.div`
  font-size: 14px;
`

export const CourseInstructorCard = styled.div`
  padding: 16px 0;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: normal;
  line-height: 1;
  border-bottom: 1px solid #f0f0f0;
`

export const CourseInstructorCardTitle = styled.span`
  color: #00532A;
  font-size: 1.33em;
`