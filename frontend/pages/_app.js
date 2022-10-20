import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { EditorProvider } from '@contexts/EditorContext';
import { sizes, MODE_PREVIEW } from '@consts';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }) {
  const Layout = Component.getLayout || (({ children }) => children);

  return (
    <>
      <Head>
        <style>{`
          // force hide overlay message such as the 'read-only' overlay
          .overflowingContentWidgets .monaco-editor-overlaymessage {
            display: none !important;
          }
        `}</style>
      </Head>

      <EditorProvider
        initialValue={{
          resolution: '0x0',
          sidebar: true,
          mode: MODE_PREVIEW,
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
