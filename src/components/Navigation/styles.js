import styled from 'styled-components';
import { tablet, desk } from 'styles/mediaQueries';

// Header, Link, Logo, Nav, Action

const HEADER_HEIGHT = 60;
const LOGO_WIDTH = 36;
const LOGO_HEIGHT = 36;
const ACTION_BUTTON_FONT_SIZE = 28;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.background.secondary};
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  display: flex;
  padding: 12px;
  border-bottom: solid 1px ${({ theme }) => theme.border};
  padding-right: 0px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.text.primary};
  font-size: 22px;
  ${tablet} {
    font-size: 18px;
  }
  font-weight: 400;
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 10px;
`;

export const Link = styled.a`
  display: flex;
`;

export const MainLink = styled(Link)`
float: left; 
width: 400px;
}
`;

export const Nav = styled.div`
  display: flex;
  order: 2;
  width: 100%;
  max-width: 12em;
`;

export const Action = styled.div`
  display: flex;
  cursor: pointer;
  font-size: ${ACTION_BUTTON_FONT_SIZE}px;
  color: ${({ theme }) => theme.text.secondary};
  align-items: center;
  text-align: center;
  margin-top: 0.1em;

  > a {
    display: flex;
    color: ${({ theme }) => theme.text.secondary};
  }
`;

export const SettingsAction = styled(Action)`
  margin-left: auto;
  margin-right: 0.5em;
`;

export const Logo = styled.svg`
  width: ${LOGO_WIDTH}px;
  height: ${LOGO_HEIGHT}px;
  fill: ${({ theme }) => theme.logo.color};
`;

export const DropdownMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  width: 100%;
`;
