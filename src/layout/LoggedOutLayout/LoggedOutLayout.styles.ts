import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const container = css({
  width: '100vw',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: Tokens.backgroundNeutral,
});

export const content = css({
  maxWidth: '800px',
  minHeight: '100vh',
  width: '100%',
  height: '100%',
});
