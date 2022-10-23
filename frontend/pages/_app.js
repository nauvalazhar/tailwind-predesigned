import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { EditorProvider } from '@contexts/EditorContext';
import { sizes, MODE_PREVIEW, TREE_MODE_DESIGNS } from '@consts';
import { SWRConfig } from 'swr';

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

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
          treeMode: TREE_MODE_DESIGNS,
        }}>
        <SWRConfig
          value={{
            fetcher,
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
