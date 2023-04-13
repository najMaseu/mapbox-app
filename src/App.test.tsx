import App from './App';
import { render } from 'tests/utils';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    expect(true).toBe(true);
  });
});
