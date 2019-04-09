import React, { Fragment } from 'react';

import GlobalStyles from './GlobalStyles';

const App: React.FunctionComponent = function () {
  return (
    <Fragment>
      <GlobalStyles />
      <div>Hello World!</div>
    </Fragment>
  );
};

export default App;
