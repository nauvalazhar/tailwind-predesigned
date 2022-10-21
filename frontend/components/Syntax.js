import { LoadingCodes } from '@components';
import { useSourceCode } from '@hooks';
import Editor from '@monaco-editor/react';
import { editorStyle } from '@utils/editor-style';
import { useState } from 'react';
import clsx from 'clsx';

function Syntax() {
  const { data, isLoading: loadingSourceCode } = useSourceCode();
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme('my-theme', editorStyle);
  }

  function handleEditorMounted() {
    setIsEditorLoaded(true);
  }

  const code = data ? data.code : '';

  return (
    <div className="overflow-auto h-full relative">
      {(loadingSourceCode || !isEditorLoaded) && <LoadingCodes />}

      <Editor
        className={clsx(
          'transition-all',
          isEditorLoaded ? 'opacity-100' : 'opacity-0'
        )}
        loading=""
        height="100%"
        language="html"
        theme="my-theme"
        value={code}
        options={{
          readOnly: true,
          fontSize: 14,
        }}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorMounted}
      />
    </div>
  );
}

export default Syntax;
