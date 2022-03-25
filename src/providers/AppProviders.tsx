import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GlobalStyle, theme } from 'theme';
import { ScreenSizeLoader } from 'ui/layout/molecules';
import AbilityProvider from './AbilityProvider';

interface IProps {
  children: React.ReactNode;
}

function AppProviders({ children }: IProps): JSX.Element {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <AbilityProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Suspense fallback={<ScreenSizeLoader />}>{children}</Suspense>
        </ThemeProvider>
      </AbilityProvider>
    </HelmetProvider>
  );
}

export default AppProviders;
