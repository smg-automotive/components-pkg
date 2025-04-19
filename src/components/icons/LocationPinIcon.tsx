import React from 'react';
import { createIcon } from '@chakra-ui/react';

export const LocationPinIcon = createIcon({
  displayName: 'LocationPin',
  viewBox: '0 0 24 24',
  path: (
    <>
      <title>Location pin icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 15.3599 13.0603 21.1321 12.6401 21.4816L12.63 21.49L12 22L11.37 21.49L11.3599 21.4816C10.9397 21.1321 4 15.3599 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315ZM6 10C6 13.34 9.87 17.49 12 19.39C13.65 17.9 18 13.63 18 10C18 8.4087 17.3679 6.88258 16.2426 5.75736C15.1174 4.63214 13.5913 4 12 4C10.4087 4 8.88258 4.63214 7.75736 5.75736C6.63214 6.88258 6 8.4087 6 10ZM9.77772 6.67412C10.4355 6.2346 11.2089 6 12 6C13.0609 6 14.0783 6.42143 14.8284 7.17157C15.5786 7.92172 16 8.93913 16 10C16 10.7911 15.7654 11.5645 15.3259 12.2223C14.8864 12.8801 14.2616 13.3928 13.5307 13.6955C12.7998 13.9983 11.9956 14.0775 11.2196 13.9231C10.4437 13.7688 9.73098 13.3878 9.17157 12.8284C8.61216 12.269 8.2312 11.5563 8.07686 10.7804C7.92252 10.0044 8.00173 9.20017 8.30448 8.46927C8.60723 7.73836 9.11993 7.11365 9.77772 6.67412ZM10.8889 11.6629C11.2178 11.8827 11.6044 12 12 12C12.5304 12 13.0391 11.7893 13.4142 11.4142C13.7893 11.0391 14 10.5304 14 10C14 9.60444 13.8827 9.21776 13.6629 8.88886C13.4432 8.55996 13.1308 8.30362 12.7654 8.15224C12.3999 8.00087 11.9978 7.96126 11.6098 8.03843C11.2219 8.1156 10.8655 8.30608 10.5858 8.58579C10.3061 8.86549 10.1156 9.22186 10.0384 9.60982C9.96126 9.99778 10.0009 10.3999 10.1522 10.7654C10.3036 11.1308 10.56 11.4432 10.8889 11.6629Z"
        fill="currentColor"
      />
    </>
  ),
  defaultProps: {
    boxSize: 'sm',
  },
});
