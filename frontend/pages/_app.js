import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { EditorProvider } from '@contexts/EditorContext';
import { modes, sizes } from '@consts';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }) {
  const Layout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .linenumber {
            font-style: normal !important;
            opacity: .6 !important;
          }

          .codeblock {
            padding: 0 !important;
            margin: 0 !important;
            background: transparent !important;
            overflow: initial !important;
          }

          .codeblock code {
            background-color: transparent !important;
            font-size: 14px !important;
          }
        `}</style>
      </Head>

      <EditorProvider
        initialValue={{
          resolution: '0x0',
          sidebar: true,
          mode: modes[0],
          size: sizes[0],
        }}>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </EditorProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;
