import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const searchLabel = css({
  display: 'none',
});

export const search = css({
  fill: Tokens.text,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'start',
});
