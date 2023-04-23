import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const input = css({
  outline: 'none',
  height: '40px',
  border: `1px solid ${Tokens.inputBorder}`,
  padding: '4px 8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'border-color .2s ease-in',
  margin: '4px 2px 4px 0',
  width: '100%',
  borderRadius: '3px',
  '&:hover, :focus': {
    borderColor: Tokens.inputBorderActive,
  },
  ':disabled': {
    backgroundColor: Tokens.inputDisabledBackground,
    cursor: 'not-allowed',
    color: Tokens.inputDisabledText,
  },
  ':disabled:hover': {
    borderColor: Tokens.inputBorder,
  },
  '&[type="password"]': {
    padding: '4px 8px 6px',
    fontFamily: 'Verdana',
    letterSpacing: '.125em',
    fontSize: '.75em',
  },
});

export const ghostInput = css({
  backgroundColor: Tokens.inputGhostBackground,
  border: 'none',
  position: 'relative',
  borderBottom: `2px solid ${Tokens.inputGhostUnderline}`,
  borderRadius: 0,
});
