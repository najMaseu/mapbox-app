import { css } from '@emotion/css';
import { Colors } from 'styles/colors';

export const infoLabel = css({
  background: Colors.darkOcean,
  color: '#fff',
  padding: 8,
  borderRadius: 6,
  display: 'inline-flex',
  alignItems: 'center',
  marginBottom: '8px',

  '@media (max-width: 570px)': {
    fontSize: '0.7rem',
  },
});

export const flagImg = css({
  marginLeft: 8,
});

export const serverInfoTitle = css({
  marginBottom: '16px',
  fontSize: '3rem',
  '@media (max-width: 625px)': {
    fontSize: '1.5rem',
    marginTop: '16px',
  },
});

export const currentServerContainer = css({
  width: '100%',
  display: 'flex',
  minHeight: '250px',
  alignItems: 'start',
  flexDirection: 'column',
});
