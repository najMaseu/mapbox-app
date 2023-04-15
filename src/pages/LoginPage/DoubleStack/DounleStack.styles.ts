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
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transitionProperty: 'flex-grow, background-color',
  transitionDuration: '.2s',
  transitionTimingFunction: 'ease-in-out',
  '&[aria-expanded="true"]': {
    flexGrow: 8,
    zIndex: 2,
  },
  '&[aria-expanded="false"]': {
    flexGrow: 1,
    zIndex: 1,
  },
  '&[aria-expanded="false"]:hover, &[aria-expanded="false"]:focus': {
    flexGrow: 2,
  },
});

export const mainCard = css({
  backgroundColor: Tokens.mainCardBackground,

  '&[aria-expanded="false"]:hover, &[aria-expanded="false"]:focus': {
    backgroundColor: Tokens.mainCardBackgroundHover,
  },
});

export const secondaryCard = css({
  backgroundColor: Tokens.secondaryCardBackground,

  '&[aria-expanded="false"]:hover, &[aria-expanded="false"]:focus': {
    backgroundColor: Tokens.secondaryCardBackgroundHover,
  },
});

export const cardContentWrapper = css({
  opacity: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'opacity .2s ease-in-out',
  zIndex: 2,
  '&[aria-hidden="true"]': {
    opacity: 0,
  },
});

export const cardTitle = css({
  position: 'absolute',
  fontSize: '7rem',
  textTransform: 'uppercase',
  writingMode: 'vertical-rl',
  cursor: 'default',
  zIndex: 1,
  userSelect: 'none',
});

export const mainCardTitleStyles = css({
  color: Tokens.mainCardTitle,
  transform: 'rotate(180deg)',
  left: 0,
});

export const secondaryCardTitleStyles = css({
  color: Tokens.secondaryCardTitle,
  right: 0,
});
