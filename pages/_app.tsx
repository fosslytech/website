import 'src/styles/fonts.css';
import 'src/styles/base.css';

import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import NProgress from '@module/NProgress/NProgress';

import { getMantineTheme } from '@utils/resources/mantineTheme';
import JoinedCTXProvider from 'src/store/CTX';
import GlobalSEO from '@module/SEO/GlobalSEO';

const App = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <JoinedCTXProvider>
      <ColorSchemeProvider colorScheme={'dark'} toggleColorScheme={() => {}}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={getMantineTheme()}>
          <NotificationsProvider>
            {/* Route transition */}
            <NProgress />

            <GlobalSEO />

            {getLayout(<Component {...pageProps} />)}
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>{' '}
    </JoinedCTXProvider>
  );
};

export default App;
