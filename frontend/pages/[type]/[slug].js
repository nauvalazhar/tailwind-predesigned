import { Syntax, Preview, About, EditorLayout } from '@components';
import { useEditorContext } from '@contexts/EditorContext';

function Editor() {
  const [
    {
      mode: { name: modeName },
    },
  ] = useEditorContext();

  if (modeName === 'codes') return <Syntax />;
  if (modeName === 'about') return <About />;

  return <Preview />;
}

Editor.getLayout = EditorLayout;

export default Editor;
