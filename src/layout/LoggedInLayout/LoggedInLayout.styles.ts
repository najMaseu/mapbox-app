import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const container = css({
  width: '100wh',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Tokens.backgroundNeutral,
  color: Tokens.text,
});

export const content = css({
  maxWidth: '1200px',
  width: '100%',
  height: '100%',
});
