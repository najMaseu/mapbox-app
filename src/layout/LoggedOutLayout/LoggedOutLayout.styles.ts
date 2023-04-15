import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const container = css({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Tokens.backgroundNeutral,
});

export const content = css({
  maxWidth: '1200px',
  width: '100%',
  height: '100%',
});
