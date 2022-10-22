import { Tree, DownloadIcon } from '@components';
import { useDesign } from '@hooks';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useEditorContext, SWITCH_MODE_EXPLORE } from '@contexts/EditorContext';
import { MODE_SOURCE } from '@consts';
import clsx from 'clsx';

function FilesViewer() {
  const router = useRouter();
  const {
    query: { slug, f: file },
  } = router;
  const { data: design, isLoading: loadingDesign } = useDesign();
  const [{ mode }, dispatch] = useEditorContext();
  const [selected, setSelected] = useState(file || '');

  // this will preserve privious design selected path
  // and change the selected design path on every design change
  useEffect(() => {
    if (file) {
      setSelected(file);
    }
  }, [file]);

  async function changeFile(item) {
    if (mode !== MODE_SOURCE) {
      dispatch({
        type: SWITCH_MODE_EXPLORE,
      });
    }

    router.push({
      pathname: '/[type]/[slug]',
      query: {
        type: 'html',
        slug,
        f: item.path,
      },
    });
  }

  if (loadingDesign) return <div>Loading</div>;
  if (!design && !loadingDesign) return <div>Select design first</div>;

  return (
    <Tree
      selected={selected}
      className="space-y-2"
      files={design.data.tree}
      onClick={changeFile}
      fileAppend={(item, active) => (
        <a
          download={item.displayName}
          href={item.staticPath}
          className={clsx(
            'ml-auto transition-all',
            active ? '' : 'opacity-0 group-hover:opacity-60'
          )}>
          <DownloadIcon className="w-4" />
        </a>
      )}
    />
  );
}

export default FilesViewer;
