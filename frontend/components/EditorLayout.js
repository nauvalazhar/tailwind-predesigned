import PropTypes from 'prop-types';
import { Navbar, Sidebar, ResolutionToast, Toolbar } from '@components';
import Head from 'next/head';
import { titlable } from '@helpers';
import { useDesign } from '@hooks';

function EditorLayout({ children }) {
  const { data: design, isLoading: loadingDesign } = useDesign();

  return (
    <main className="h-screen flex flex-col">
      <Navbar />
      <div className="h-full flex overflow-hidden">
        <Sidebar />
        <div className="bg-neutral-900 border-l border-neutral-800 w-full overflow-hidden flex flex-col">
          {!loadingDesign && !!design && (
            <>
              <ResolutionToast />
              <Toolbar />
            </>
          )}
          {children}
        </div>
      </div>
    </main>
  );
}

EditorLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EditorLayout;
