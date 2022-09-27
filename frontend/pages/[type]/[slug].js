import { Syntax, Preview, About, EditorLayout, Download } from '@components';
import { useEditorContext } from '@contexts/EditorContext';
import { MODE_CODES, MODE_ABOUT, MODE_DOWNLOAD } from '@consts';

function Editor() {
  const [{ mode }] = useEditorContext();

  if (mode === MODE_CODES) return <Syntax />;
  if (mode === MODE_ABOUT) return <About />;
  if (mode === MODE_DOWNLOAD) return <Download />;

  return <Preview />;
}

Editor.getLayout = EditorLayout;

export default Editor;
