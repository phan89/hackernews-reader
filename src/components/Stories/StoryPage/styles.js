import styled from 'styled-components';

export const StoryPageWrapper = styled.ul`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  margin-before: 1em;
  margin-after: 1em;
  margin-start: 0;
  margin-end: 0;
  margin: 0;
`;
