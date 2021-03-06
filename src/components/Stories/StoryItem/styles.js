import styled, { css } from 'styled-components';
import { AnimitedBlink } from 'components/Loader/styles';
import { tablet } from 'styles/mediaQueries';

export const BoxScore = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.hot.primary};
`;

export const HotBox = styled.div`
  min-width: 80px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.hot.primary};
  flex-direction: column;
  background-color: ${({ theme }) => theme.background.secondary};
  padding: 14px;

  ${tablet} {
    min-width: 60px;
    padding: 12px;
  }
`;

export const ChatBox = styled.div`
  background-color: ${({ theme }) => theme.chatbox.background};

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
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 0 14px 14px;
  justify-content: center;
  flex: 1;

  ${tablet} {
    padding: 1;
  }
`;

export const StoryListItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  border-top: 1px solid ${({ theme }) => theme.border};

  flex-flow: row wrap;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;

  ${({ bogusLoader }) =>
    bogusLoader &&
    css`
      ${AnimitedBlink}
    `}

  &:hover {
    filter: brightness(${({ theme }) => theme.hover.brightness});
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text.primary};
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
  margin-right: 5px;
`;

export const Host = styled.span`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 12px;
`;

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.hover.linkColor};
    h1,
    h2,
    h3,
    span {
      color: ${({ theme }) => theme.hover.linkColor};
    }
  }
`;

export const Description = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.text.secondary};
`;

export const SimpleLink = styled.a`
  color: ${({ theme }) => theme.text.secondary};
  &:visited {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

export const CommentLink = styled.div`
  color: ${({ theme }) => theme.text.secondary};
`;

export const StoryActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  color: ${({ theme }) => theme.text.secondary};
  padding-right: 1em;
  position: relative;
`;

export const StoryActionButton = styled.div`
  position: absolute;
  top: -1.25em;
  cursor: pointer;
  z-index: 99;
  padding: 7px;
`;

export const StoryActionsPanel = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  top: -5em;
  padding: 10px;
  background-color: ${({ theme }) => theme.background.primary};
  filter: brightness(50%);
  border-radius: 10%;
  border: 1px solid ${({ theme }) => theme.border};
`;

export const StoryActionItem = styled.div`
  margin-left: auto;
  display: flex;
  padding: 5px;
  cursor: pointer;
  z-index: 100;
  a {
    font-size: 14px;
  }
  &:hover {
    filter: brightness(200%);
  }
`;

export const StoryActionItemLabel = styled.label`
  color: ${({ theme }) => theme.text.secondary};
  font-size: 14px;
  cursor: pointer;
  margin-right: 5px;
`;
