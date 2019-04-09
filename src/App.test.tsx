import React from 'react';
import { render } from 'react-testing-library';

import App from './App';

describe('<App />', () => {
  it('правильно отображается', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
