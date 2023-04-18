import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const textField = css({
  display: 'inline-flex',
  flexDirection: 'column',
  width: '100%',
  gap: '4px',
  marginBottom: '14px',
});

export const fieldLabel = css({
  fontWeight: 500,
  fontSize: '1.2rem',
  paddingLeft: '2px',
});

export const errorMessage = css({
  color: Tokens.textFieldErrorText,
  fontSize: '.8em',
  paddingLeft: '2px',
});
