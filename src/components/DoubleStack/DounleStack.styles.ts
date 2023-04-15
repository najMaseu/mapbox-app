import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const stackContainer = css({
  display: 'flex',
  width: '100%',
  height: '100%',
  transition: 'ease',
  boxShadow: '12px 0px 27px -22px rgba(0, 0, 0, 1)',
});

export const innerCard = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transitionProperty: 'flex-grow, transform, background-color',
  transitionDuration: '.2s',
  transitionTimingFunction: 'ease-in-out',
  transform: 'scale(1)',
  '&[aria-expanded="true"]': {
    flexGrow: 15,
  },
  '&[aria-expanded="false"]': {
    flexGrow: 1,
  },
  '&[aria-expanded="false"]:hover, &[aria-expanded="false"]:focus': {
    transform: 'scale(1.1)',
  },
});

export const mainCard = css({
  backgroundColor: Tokens.mainCardBackground,
  transformOrigin: 'right',

  '&[aria-expanded="false"]:hover, &[aria-expanded="false"]:focus': {
    transformOrigin: 'right',
    backgroundColor: Tokens.mainCardBackgroundHover,
  },
});

export const secondaryCard = css({
  backgroundColor: Tokens.secondaryCardBackground,
  transformOrigin: 'left',

  '&[aria-expanded="false"]:hover, &[aria-expanded="false"]:focus': {
    transformOrigin: 'left',
    backgroundColor: Tokens.secondaryCardBackgroundHover,
  },
});

export const cardContentWrapper = css({
  opacity: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  transition: 'opacity .2s ease-in-out, width .3s ease-in-out',
  '&[aria-hidden="true"]': {
    opacity: 0,
    width: 0,
  },
});
