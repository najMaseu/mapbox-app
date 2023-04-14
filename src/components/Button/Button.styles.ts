import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const buttonCommon = css({
  height: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  verticalAlign: 'middle',
  padding: '4px 15px',
  border: 'none',
  borderRadius: 0,
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

export const buttonPrimary = css({
  backgroundColor: Tokens.btnBackgroundPrimary,
  color: Tokens.btnTextPrimary,
  transition: 'background-color .2s ease-in, color .2s ease-in',
  '&:hover': {
    backgroundColor: Tokens.btnBackgroundPrimaryHover,
    color: Tokens.btnTextPrimaryHover,
  },
});

export const buttonSecondary = css({
  backgroundColor: Tokens.btnBackgroundSecondary,
  color: Tokens.btnTextSecondary,
  transition: 'background-color .2s ease-in, color .2s ease-in',
  '&:hover': {
    backgroundColor: Tokens.btnBackgroundSecondaryHover,
    color: Tokens.btnTextSecondaryHover,
  },
});

export const buttonTertiary = css({
  backgroundColor: 'transparent',
  color: Tokens.btnTextTertiary,
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
    backgroundColor: Tokens.btnUnderlineTertiaryHover,
    transformOrigin: 'bottom right',
    transition: 'transform .2s ease-in',
  },
  '&:hover:after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom left',
  },
});

export const buttonDisabled = css({});
