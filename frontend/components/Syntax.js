import { useState } from 'react';
import { LoadingCodes } from '@components';
import { useSourceCode } from '@hooks';
import Editor from '@monaco-editor/react';
import { editorStyle } from '@utils/editor-style';
import clsx from 'clsx';

function Syntax() {
  const { data, isLoading: loadingSourceCode } = useSourceCode();
  const [isEditorMounted, setIsEditorMounted] = useState(false);

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme('my-theme', editorStyle);
  }

  function handleEditorMounted() {
    setIsEditorMounted(true);
  }

  const code = data ? data.code : '';
  const isLoadingEditor = !isEditorMounted || loadingSourceCode;

  return (
    <div className="overflow-auto h-full">
      {isLoadingEditor && <LoadingCodes />}

      <Editor
        className={clsx(isLoadingEditor && 'opacity-0')}
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
