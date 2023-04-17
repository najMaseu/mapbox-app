import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const container = css({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Tokens.backgroundNeutral,
  color: Tokens.text,
});

export const content = css({
  maxWidth: '800px',
  width: '100%',
  height: '100%',
});
