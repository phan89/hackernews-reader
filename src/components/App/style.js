import styled from 'styled-components';
import { tablet } from 'styles/mediaQueries';

export const Wrapper = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  overflow: hidden;
  padding-bottom: 200px;
  ${tablet} {
    width: 96%;
  }
`;

export const LoaderSize = 80;
export const LoaderWrapper = styled.div`
  position: absolute;
  width: ${LoaderSize}px;
  height: ${LoaderSize}px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -${LoaderSize / 2}px;
  margin-top: -${(LoaderSize * 3) / 2}px;
`;
