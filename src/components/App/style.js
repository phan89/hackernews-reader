import styled from "styled-components"
import {tablet} from "styles/mediaQueries"

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
`
