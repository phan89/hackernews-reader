import styled, {css} from "styled-components"
import {AnimitedBlink} from "components/Loader/styles"
import {mobile, tablet} from "styles/mediaQueries"

export const BoxScore = styled.div`
  font-size: 12px;
  color: ${({theme}) => theme.hot.primary};
`

export const HotBox = styled.div`
  min-width: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.hot.primary};
  flex-direction: column;
  background-color: ${({theme}) => theme.background.secondary};
  padding: 14px;

  ${tablet} {
    min-width: 60px;
    padding: 12px;
  }
`

export const ChatBox = styled.div`
  background-color: ${({theme}) => theme.chatbox.background};

  color: #ff6600;
  margin-top: 5px;

  display: inline-block;
  border-radius: 10%;
  padding: 1px 6px;
  text-align: center;
  font-style: normal;
  font-size: 12px;
  line-height: 1.45;

  ${tablet} {
    line-height: 1;
  }

  &:after {
    margin-top: -0.13rem;
    margin-left: 0.07rem;
    border-width: 0.6rem 0.66rem 0 0;
  }
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 0 14px 14px;
  justify-content: center;
  flex: 1;

  ${tablet} {
    padding: 12px 0 12px 6px;
  }
`

export const StoryListItem = styled.li`
  border-bottom: 1px solid ${({theme}) => theme.border};
  border-top: 1px solid ${({theme}) => theme.border};

  flex-flow: row wrap;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${({bogusLoader}) =>
    bogusLoader &&
    css`
      ${AnimitedBlink}
    `}

  &:hover {
    filter: brightness(${({theme}) => theme.hover.brightness});
  }
`

export const Title = styled.h3`
  color: ${({theme}) => theme.text.primary};
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
  margin-right: 5px;
`

export const Host = styled.span`
  color: ${({theme}) => theme.text.secondary};
  font-size: 12px;
`

export const ExternalLink = styled.a`
  color: ${({theme}) => theme.text.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: ${({theme}) => theme.hover.linkColor};
    h1,
    h2,
    h3,
    span {
      color: ${({theme}) => theme.hover.linkColor};
    }
  }
`

export const Description = styled.div`
  font-size: 12px;
  color: ${({theme}) => theme.text.secondary};
`

export const SimpleLink = styled.a`
  color: ${({theme}) => theme.text.secondary};
  &:visited {
    color: ${({theme}) => theme.text.secondary};
  }
`

export const CommentLink = styled.div`
  color: ${({theme}) => theme.text.secondary};
`
