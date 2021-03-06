import styled, { keyframes, css } from 'styled-components';

const blink = keyframes`
  /**
  * At the start of the animation the dot
  * has an opacity of .2
  */
  0% {
    opacity: .2;
  }
  /**
  * At 20% the dot is fully visible and
  * then fades out slowly
  */
  20% {
    opacity: 1;
  }
  /**
  * Until it reaches an opacity of .2 and
  * the animation can start again
  */
  100% {
    opacity: .2;
  }
`;

export const AnimitedBlink = css`
  /**
   * Use the blink animation, which is defined above
   */
  animation-name: ${blink};
  /**mport
   * The total time of animation
   */
  animation-duration: 1s;
  /**
   * It will repeat itself forever
   */
  animation-iteration-count: infinite;
  /**
   * This makes sure that the starting style (opacity: .2)
   * of the animation is applied before the animation starts.
   * Otherwise we would see a short flash or would have
   * to set the default styling of the dots to the same
   * as the animation. Same applies for the ending styles.
   */
  animation-fill-mode: both;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const Animation = styled.div`
  text-align: center;
  span {
    color: ${({ theme }) => theme.text.secondary};
    display: inline-block;
    margin-left: 4px;
    margin-right: 4px;
    font-size: 80px;
    line-height: 0.1;
    ${AnimitedBlink}
  }
`;
