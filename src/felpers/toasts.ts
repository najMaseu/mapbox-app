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
      fontWeight: 700,
      background: Tokens.toastBackground,
    },
  });
};
