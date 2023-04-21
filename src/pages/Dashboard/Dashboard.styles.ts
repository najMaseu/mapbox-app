import { css } from '@emotion/css';
import { Colors } from 'styles/colors';
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

export const searchLabel = css({
  display: 'none',
});

export const search = css({
  fill: Tokens.text,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'start',
});

export const serverInfoContainer = css({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16,
  '&:nth-child(2)': {
    h2: {
      fontSize: '2rem',
    },
  },
});

export const serverInfo = css({
  width: '100%',
  display: 'flex',
  minHeight: '250px',
  flexDirection: 'column',
  alignItems: 'start',
  gap: 16,
});

export const infoLabel = css({
  background: Colors.darkOcean,
  color: '#fff',
  padding: 8,
  borderRadius: 6,
  display: 'inline-flex',
  alignItems: 'center',
  '@media (max-width: 570px)': {
    fontSize: '0.7rem',
  },
});

export const flagImg = css({
  marginLeft: 8,
});

export const chooseServerInfo = css({
  fontSize: '1.2rem',
});
