import { TreeViewer, FilesViewer } from '@components';
import clsx from 'clsx';
import { useEditorContext, CHANGE_TREE_MODE } from '@contexts/EditorContext';
import { treeModes, TREE_MODE_DESIGNS, TREE_MODE_FILES } from '@consts';

function Sidebar() {
  const [{ sidebar, treeMode }, dispatch] = useEditorContext();

  return (
    <div
      className={clsx(
        'flex-shrink-0 bg-neutral-900 transition-all w-72 relative z-20',
        !sidebar && '-ml-72'
      )}>
      <div className="p-4 text-white flex flex-col h-full">
        <div className="relative flex items-center mb-6">
          {treeModes.map((tab) => (
            <button
              type="button"
              key={tab.name}
              className={clsx(
                'flex-1 cursor-pointer border-y border-r border-white/20 py-2 first:border-l first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br uppercase text-sm tracking-wider font-semibold transition-all',
                treeMode === tab.name
                  ? 'text-white bg-white/5'
                  : 'text-white/60'
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
        <div className="overflow-auto h-full">
          <h2 className="uppercase font-semibold text-sm tracking-wider text-white/40 mb-2">
            Sponsored
          </h2>
          <div className="h-[400px] p-4 w-full bg-neutral-800 flex items-center justify-center flex-col rounded">
            <h2 className="text-4xl">🚀</h2>
            <h3 className="mt-4 text-xl font-semibold">Upgrade to Pro</h3>
            <p className="text-center mt-2">
              Just kidding, everything is free!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar.displayName = 'Sidebar';

export default Sidebar;
