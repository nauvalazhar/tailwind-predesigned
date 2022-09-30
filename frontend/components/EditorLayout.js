import PropTypes from 'prop-types';
import { Navbar, Sidebar, ResolutionToast, Toolbar } from '@components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { titlable } from '@helpers';

function EditorLayout({ children }) {
  const {
    query: { slug: designName },
  } = useRouter();

  return (
    <>
      <Head>
        <title>{titlable(designName || '')}</title>
      </Head>
      <main className="h-screen flex flex-col">
        <Navbar />
        <div className="h-full flex overflow-hidden">
          <Sidebar />
          <div className="bg-neutral-900 border-l border-neutral-800 w-full overflow-hidden flex flex-col">
            <ResolutionToast />
            <Toolbar />
            {children}
          </div>
        </div>
      </main>
    </>
  );
}

EditorLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EditorLayout;
