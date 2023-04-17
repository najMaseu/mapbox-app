import { container, loader } from './Loader.styles';

const Loader = () => (
  <div className={container} role='progressbar'>
    <div className={loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
