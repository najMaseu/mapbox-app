import { css } from '@emotion/css';
import { toast } from 'react-toastify';
import { Tokens } from 'styles/tokens';

export const displayToastError = (msg: string) => {
  toast.error(msg, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: true,
    theme: 'colored',
    style: {
      fontWeight: 500,
      background: Tokens.toastBackground,
    },
    className: css({
      label: 'test',
      div: {
        color: Tokens.toastText,
      },
      'svg > * ': {
        fill: Tokens.toastText,
      },
    }),
  });
};
