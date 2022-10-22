import { Explorer } from '@components';
import { useEditorContext } from '@contexts/EditorContext';
import clsx from 'clsx';

function Sidebar() {
  const [{ sidebar }] = useEditorContext();

  return (
    <div
      className={clsx(
        'flex-shrink-0 bg-neutral-900 transition-all w-72 relative z-20',
        !sidebar && '-ml-72'
      )}>
      <div className="p-4 text-white flex flex-col h-full">
        <Explorer />
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
