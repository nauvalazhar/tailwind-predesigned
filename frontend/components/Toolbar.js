import { DownloadBtn } from '@components';
import { modes as allModes, sizes, MODE_PREVIEW } from '@consts';
import {
  useEditorContext,
  CHANGE_SIZE,
  CHANGE_MODE,
} from '@contexts/EditorContext';
import clsx from 'clsx';

function Toolbar() {
  const [{ mode, size }, dispatch] = useEditorContext();

  const modes = allModes.filter((m) => m.display !== false);

  return (
    <div className="flex bg-neutral-900 text-white py-3 px-5 border-b border-neutral-800 flex items-center">
      <div className="w-4/12">
        <div className="flex items-center space-x-3">
          {modes.map((m) => (
            <button
              key={m.name}
              type="button"
              className={clsx(
                'flex items-center py-3 px-4 rounded uppercase text-sm tracking-wider font-semibold transition',
                m.name === mode
                  ? 'bg-neutral-800'
                  : 'text-white/60 hover:text-white'
              )}
              onClick={() =>
                dispatch({
                  type: CHANGE_MODE,
                  payload: m.name,
                })
              }>
              {m.displayName}
            </button>
          ))}
        </div>
      </div>
      <div className="w-4/12">
        <div className="flex w-72 mx-auto">
          {sizes.map((s) => (
            <button
              key={s.name}
              className={clsx(
                'w-10 h-10 text-sm flex-1 font-semibold first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br uppercase transition',
                size.name === s.name
                  ? 'bg-neutral-700'
                  : 'bg-neutral-800 hover:bg-neutral-700',
                mode !== MODE_PREVIEW && 'pointer-events-none opacity-60'
              )}
              type="button"
              onClick={() => dispatch({ type: CHANGE_SIZE, payload: s })}>
              {s.displayName}
            </button>
          ))}
        </div>
      </div>
      <div className="w-4/12 text-right">
        <DownloadBtn />
      </div>
    </div>
  );
}

export default Toolbar;
