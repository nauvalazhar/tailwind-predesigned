import { TreeViewer, FilesViewer } from '@components';
import {
  useEditorContext,
  CHANGE_TREE_MODE,
  SWITCH_MODE_EXPLORE,
} from '@contexts/EditorContext';
import { treeModes, TREE_MODE_DESIGNS, TREE_MODE_FILES } from '@consts';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

function Explorer() {
  const [{ treeMode }, dispatch] = useEditorContext();
  const {
    query: { f: file },
  } = useRouter();

  useEffect(() => {
    if (treeMode !== TREE_MODE_FILES && file) {
      dispatch({
        type: SWITCH_MODE_EXPLORE,
      });
    }
  }, [file]);

  return (
    <>
      <div className="relative flex items-center mb-6">
        {treeModes.map((tab) => (
          <button
            type="button"
            key={tab.name}
            className={clsx(
              'flex-1 cursor-pointer border-y border-r border-white/10 py-2 first:border-l first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br uppercase text-sm tracking-wider font-semibold transition-all',
              treeMode === tab.name ? 'text-white bg-white/5' : 'text-white/60'
            )}
            onClick={() =>
              dispatch({
                type: CHANGE_TREE_MODE,
                payload: tab.name,
              })
            }>
            {tab.displayName}
          </button>
        ))}
      </div>
      <div className="overflow-auto h-3/4 mb-4 border-b border-white/10 -mx-4 px-4 pb-4">
        {treeMode === TREE_MODE_DESIGNS && <TreeViewer />}
        {treeMode === TREE_MODE_FILES && <FilesViewer />}
      </div>
    </>
  );
}

export default Explorer;
