import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const container = css({
  border: `1px solid ${Tokens.accHeaderBorder}`,
  minHeight: '32px',
  margin: '8px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: '3px',
  svg: {
    fill: Tokens.text,
    transform: 'rotate(0deg)',
  },
  '&[aria-expanded="true"]': {
    svg: {
      transform: 'rotate(90deg)',
    },
  },
});

export const content = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1rem',
  overflow: 'hidden',
  backgroundColor: Tokens.accElementBackground,
  maxHeight: '500px',
  transition: 'max-height .2s ease-in-out',

  '&[aria-hidden="true"]': {
    maxHeight: 0,
  },
});

export const title = css({
  textAlign: 'left',
  fontSize: '1.2rem',
  marginLeft: '16px',
});

export const collapHeader = css({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'start',
  padding: '8px',
  borderBottom: `1px solid ${Tokens.accHeaderBorder}`,
  backgroundColor: Tokens.accHeaderBackground,
  transition: 'background-color .2s ease-in-out',

  '&:hover, &:focus': {
    backgroundColor: Tokens.accHeaderBackgroundHover,
    cursor: 'pointer',
  },
});
