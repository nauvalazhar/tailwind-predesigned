import { Tree } from '@components';
import { useDesign } from '@hooks';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useEditorContext, CHANGE_MODE } from '@contexts/EditorContext';
import { MODE_CODES } from '@consts';

function FilesViewer() {
  const router = useRouter();
  const {
    query: { slug, f: file },
  } = router;
  const { data: design, isLoading: loadingDesign } = useDesign();
  const [selected, setSelected] = useState('index.html');
  const [{ mode }, dispatch] = useEditorContext();

  // this will preserve privious design selected path
  // and change the selected design path on every design change
  useEffect(() => {
    if (file) {
      setSelected(file);
    }
  }, [file]);

  async function changeFile(item) {
    if (mode !== MODE_CODES) {
      dispatch({
        type: CHANGE_MODE,
        payload: MODE_CODES,
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

  if (!selected) return [];

  return (
    <Tree
      selected={selected}
      className="space-y-2"
      files={design.data.tree}
      onClick={changeFile}
    />
  );
}

export default FilesViewer;
