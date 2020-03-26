import React from 'react';

import { StoryActionItem, ExternalLink, StoryActionItemLabel } from '../styles';

import { FaGetPocket } from 'react-icons/fa';

const openWindowsModal = (url, title, w, h) => {
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth;

  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  const newWindow = window.open(
    url,
    title,
    ` scrollbars=yes,
      width=${w / systemZoom}, 
      height=${h / systemZoom}, 
      top=${top}, 
      left=${left}
      `
  );

  if (window.focus) newWindow.focus();
};

export const SendToPocketAction = props => {
  const { url, title } = props;
  const encodedURI = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const pocketShareURI = `https://getpocket.com/edit?url=${encodedURI}&title=${encodedTitle}&tags=hackernews,tech`;
  return (
    <StoryActionItem>
      <ExternalLink
        href='#'
        onClick={evt => {
          evt.preventDefault();
          openWindowsModal(pocketShareURI, 'Pocket', 550, 325);
        }}
      >
        <StoryActionItemLabel>Pocket story</StoryActionItemLabel>
        <FaGetPocket color='#ef4056'></FaGetPocket>
      </ExternalLink>
    </StoryActionItem>
  );
};
