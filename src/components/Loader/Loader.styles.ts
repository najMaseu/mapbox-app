import { css, keyframes } from '@emotion/css';
import { Tokens } from 'styles/tokens';

const loaderAnimation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  `;

export const loader = css({
  display: 'inline-block',
  position: 'relative',
  width: '80px',
  height: '80px',
  '& div': {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: '64px',
    height: '64px',
    margin: '8px',
    border: `4px solid ${Tokens.loader}`,
    borderRadius: '50%',
    animation: `${loaderAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    borderColor: `${Tokens.loader} transparent transparent transparent`,
    '& div:nth-child(1)': {
      animationDelay: '-.45s',
    },
    '& div:nth-child(2)': {
      animationDelay: '-.3s;',
    },
    '& div:nth-child(3)': {
      animationDelay: '-.15s',
    },
  },
});

export const container = css({
  width: '100%',
  height: '100%',
  backgroundColor: Tokens.loaderBackdrop,
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
