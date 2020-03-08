import styled from 'styled-components'

// Header, Link, Logo, Nav, Action 

const HEADER_HEIGHT = 60;
const LOGO_WIDTH = 36;
const LOGO_HEIGHT = 36;
const ACTION_BUTTON_FONT_SIZE = 14;

export const Header = styled.header`
    background-color: ${({ theme }) => theme.background.secondary};
    height: ${HEADER_HEIGHT}px;
    width: 100%;
    display: flex;
    padding: 12px;
    border-bottom: solid 1px ${({ theme }) => theme.border};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-size: 24px;
  font-weight: 300;
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 5px;
`;

export const Link = styled.a`
    display: flex;
`;

export const Nav = styled.div`
    display: flex;
    margin-left: auto;
    order: 2;

`;

export const Action = styled.div`
    display: flex;
    cursor: pointer;
    font-size: ${ACTION_BUTTON_FONT_SIZE}px;
    color: ${({ theme }) => theme.text.secondary};
    align-items: center;
    text-align: center;
    padding-right: 10px;
`;


export const Logo = styled.svg`
    width: ${LOGO_WIDTH}px;
    height: ${LOGO_HEIGHT}px;
    fill: ${({ theme }) => theme.logo.color};
`;