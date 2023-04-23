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
  backgroundColor: Tokens.loggedOutContentBackground,
  maxWidth: '1200px',
  minHeight: '100vh',
  width: '100%',
  height: '100%',
});

export const navbar = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'end',
  padding: '8px 16px',
});
