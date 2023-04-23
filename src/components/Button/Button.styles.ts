import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const buttonCommon = css({
  height: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px 15px',
  border: 'none',
  borderRadius: '3px',
  fontWeight: 700,
  cursor: 'pointer',
  ':disabled': {
    backgroundColor: Tokens.btnDisabledBackground,
    color: Tokens.btnDisabledText,
    cursor: 'not-allowed',
  },
  ':disabled:hover': {
    backgroundColor: Tokens.btnDisabledBackground,
    color: Tokens.btnDisabledText,
  },
});

export const buttonColor = css({
  backgroundColor: Tokens.btnBackgroundColor,
  color: Tokens.btnTextColor,
  transition: 'background-color .2s ease-in, color .2s ease-in',
  '&:hover': {
    backgroundColor: Tokens.btnBackgroundColorHover,
    color: Tokens.btnTextColorHover,
  },
});

export const buttonGrey = css({
  backgroundColor: Tokens.btnBackgroundGrey,
  color: Tokens.btnTextGrey,
  transition: 'background-color .2s ease-in, color .2s ease-in',
  '&:hover': {
    backgroundColor: Tokens.btnBackgroundGreyHover,
    color: Tokens.btnTextGreyHover,
  },
});

export const buttonGhost = css({
  backgroundColor: 'transparent',
  color: Tokens.btnTextGhost,
  position: 'relative',
  padding: '4px',
  ':after': {
    content: '" "',
    position: 'absolute',
    width: '100%',
    transform: 'scaleX(0)',
    height: '2px',
    bottom: 0,
    left: 0,
    backgroundColor: Tokens.btnUnderlineGhostHover,
    transformOrigin: 'bottom right',
    transition: 'transform .2s ease-in',
  },
  '&:hover:after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left',
  },
});
