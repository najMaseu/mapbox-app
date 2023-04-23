import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const entry = css({
  padding: '8px',
  width: '100%',
  height: '100%',
  borderBottom: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'background-color .2s ease-in-out',

  '&:hover, &:focus': {
    cursor: 'pointer',
    backgroundColor: Tokens.serverEntryBackgroundHover,
  },
});
