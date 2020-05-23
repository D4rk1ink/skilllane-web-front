import styled from 'styled-components'

export const TabsWrapper = styled.div`
  .ant-tabs-ink-bar {
    background-color: #00532a;
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
    color: #00532a;
  }
  .ant-tabs-tab,
  .ant-tabs-tab:hover {
    color: #8e8e8e;
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

export const TitleWrapper = styled.div`
  &:not(:last-child) {
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
  color: #00532a;
  font-weight: bold;
  font-size: 1em;
  word-break: break-word;
  cursor: pointer;
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
  color: #00532a;
  font-size: 1.33em;
`

export const CourseRelateDetailWrapper = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
`

export const CourseRelateWrapper = styled.div`
  padding: 5px;
  border-radius: 4px;
  background: #f2f8fa;
  cursor: pointer;
  &:hover {
    background: #e5e5e5;
  }
`

export const CourseRelateTitle = styled.span`
  font-weight: 300;
  color: #00532a;
  font-size: 1em;
`

export const CourseRelateInstructor = styled.span`
  color: #555555;
  font-size: 0.9em;
`
