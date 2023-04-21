import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const stackContainer = css({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
  transition: 'ease',
  boxShadow: '12px 0px 27px -22px rgba(0, 0, 0, 1)',
  '@media (max-width: 860px)': {
    flexDirection: 'column',
  },
});

export const innerCard = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  transitionProperty: 'flex-grow, background-color',
  transitionDuration: '.2s',
  transitionTimingFunction: 'ease-in-out',
  flexBasis: '20px',

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
  '@media (max-width: 860px)': {
    justifyContent: 'center',
  },
});

export const mainCard = css({
  backgroundColor: Tokens.mainCardBackground,
  justifyContent: 'end',
  '&[aria-expanded="false"]:hover, &[aria-expanded="false"]:focus': {
    backgroundColor: Tokens.mainCardBackgroundHover,
  },
});

export const secondaryCard = css({
  backgroundColor: Tokens.secondaryCardBackground,
  justifyContent: 'start',

  '&[aria-expanded="false"]:hover, &[aria-expanded="false"]:focus': {
    backgroundColor: Tokens.secondaryCardBackgroundHover,
  },
});

export const cardContentWrapper = css({
  opacity: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'opacity .5s ease-in-out',
  zIndex: 2,
  width: '80%',
  '&[aria-hidden="true"]': {
    opacity: 0,
    transitionDuration: '0.1s',
    pointerEvents: 'none',
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

  '@media (max-width: 860px)': {
    writingMode: 'unset',
    top: 10,
  },
  '@media (max-width: 580px)': {
    fontSize: '3rem',
  },
});

export const mainCardTitleStyles = css({
  color: Tokens.mainCardTitle,
  transform: 'rotate(180deg)',
  left: 0,
  '@media (max-width: 860px)': {
    transform: 'unset',
    left: 10,
  },
});

export const secondaryCardTitleStyles = css({
  color: Tokens.secondaryCardTitle,
  right: 0,
  '@media (max-width: 860px)': {
    right: 10,
  },
});
