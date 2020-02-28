import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import * as themes from 'ui/themes';

import { GlobalStyles } from './global-styles';

export const App: React.FunctionComponent<{}> = function() {
  return (
    <ThemeProvider theme={themes.base}>
      <GlobalStyles />
    </ThemeProvider>
  );
};
