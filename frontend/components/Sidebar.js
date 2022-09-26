import { TreeViewer, SearchIcon } from '@components';
import clsx from 'clsx';
import { useEditorContext } from '@contexts/EditorContext';

function Sidebar() {
  const [{ sidebar }] = useEditorContext();

  return (
    <div
      className={clsx(
        'flex-shrink-0 bg-slate-900 transition-all w-72 relative z-20',
        !sidebar && '-ml-72'
      )}>
      <div className="p-4 text-white flex flex-col h-full">
        <div className="relative flex items-center mb-6">
          <input
            type="text"
            className="w-full bg-slate-800 pl-4 pr-10 py-2 rounded border border-transparent focus:border-primary-500 focus:bg-transparent focus-visible:outline-none transition"
            placeholder="Search design"
          />
          <SearchIcon className="w-4 absolute right-4 text-white/60" />
        </div>
        <div className="overflow-auto h-3/4 mb-4 border-b border-white/10 -mx-4 px-4">
          <TreeViewer />
        </div>
        <div className="overflow-auto h-full">
          <h2 className="uppercase font-semibold text-sm tracking-wider text-white/40 mb-2">
            Sponsored
          </h2>
          <div className="h-[400px] p-4 w-full gr-primary flex items-center justify-center flex-col rounded">
            <h2 className="text-4xl">🚀</h2>
            <h3 className="mt-4 text-xl font-semibold">Upgrade to Pro</h3>
            <p className="text-center mt-2">
              Get more components by upgrade to pro account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar.displayName = 'Sidebar';

export default Sidebar;
