import { css } from '@emotion/css';
import { Tokens } from 'styles/tokens';

export const dashboardContainer = css({
  width: '100%',
  height: '100%',
  padding: '14px',
  h1: {
    fontSize: '4rem',
  },
});

export const serverList = css({
  marginTop: '16px',
});

export const serverListItem = css({
  display: 'flex',
  width: '100%',
  borderTop: `1px solid ${Tokens.accHeaderBorder}`,
  padding: '8px',

  justifyContent: 'space-between',
  backgroundColor: Tokens.accElementBackground,
});

export const serverInfoContainer = css({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16,
});

export const chooseServerInfo = css({
  fontSize: '1.2rem',
});
