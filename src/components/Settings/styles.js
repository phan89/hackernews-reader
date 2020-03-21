import styled from 'styled-components';

const ACTION_BUTTON_FONT_SIZE = 14;
const ACTION_LABEL_FONT_SIZE = 14;

export const DropdownMenuOuterWrapper = styled.div`
  display: ${({ mainMenuVisible }) => (mainMenuVisible ? 'flex' : 'none')};
  flex-direction: column;
  background: transparent;
  padding-top: 20px;
  z-index: 1000;
  padding-right: 0.05em;
`;

export const DropdownMenuInnerWrapper = styled.div`
  padding-right: 0.5em;
  flex-direction: column;
  box-shadow: -1px 3px 10px 1px ${({ theme }) => theme.box_shadow};
  background-color: ${({ theme }) => theme.background.primary};
`;

export const DropdownMenu = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const DropdownMenuItem = styled.li`
  margin-left: auto;
  padding: 0 0 12px 16px;
`;

export const Action = styled.div`
  display: flex;
  cursor: pointer;
  font-size: ${ACTION_BUTTON_FONT_SIZE}px;
  color: ${({ theme }) => theme.text.secondary};
  align-items: center;
  text-align: center;
  padding-right: 6px;

  > a {
    display: flex;
    color: ${({ theme }) => theme.text.secondary};
  }
`;
export const UserDisplayNameContainer = styled.div`
  display: flex;
  padding: 0 8px;
`;

export const UserDisplayName = styled.span`
  font-size: ${ACTION_LABEL_FONT_SIZE}px;
`;

export const ActionLabel = styled.span`
  font-size: ${ACTION_LABEL_FONT_SIZE}px;
  margin-right: 4px;
`;
