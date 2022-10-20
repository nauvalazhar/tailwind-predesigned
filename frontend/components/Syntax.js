import { LoadingCodes } from '@components';
import { useSourceCode } from '@hooks';
import Editor from '@monaco-editor/react';
import { editorStyle } from '@utils/editor-style';

function Syntax() {
  const { data, isLoading: loadingSourceCode } = useSourceCode();

  if (loadingSourceCode) return <LoadingCodes />;

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme('my-theme', editorStyle);
  }

  return (
    <div className="overflow-auto h-full">
      <Editor
        loading={<LoadingCodes />}
        height="100%"
        language="html"
        theme="my-theme"
        value={data.code}
        options={{
          readOnly: true,
          fontSize: 14,
        }}
        beforeMount={handleEditorWillMount}
      />
    </div>
  );
}

export default Syntax;
