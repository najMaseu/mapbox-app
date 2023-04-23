import { container, loader } from './Loader.styles';

export const Loader = () => (
  <div className={container} role='progressbar'>
    <div className={loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
