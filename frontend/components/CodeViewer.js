import { editorStyle } from '@utils/editor-style';
import { LoadingOverlay } from '@components';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Editor from '@monaco-editor/react';

function CodeViewer({ code, language, loading }) {
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);

  function handleEditorMounted() {
    setIsEditorLoaded(true);
  }

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme('my-theme', editorStyle);
  }

  return (
    <>
      {(loading || !isEditorLoaded) && <LoadingOverlay />}
      <Editor
        loading=""
        height="100%"
        language={language}
        theme="my-theme"
        value={code}
        options={{
          readOnly: true,
          fontSize: 14,
        }}
        onMount={handleEditorMounted}
        beforeMount={handleEditorWillMount}
      />
    </>
  );
}

CodeViewer.defaultProps = {
  loading: false,
};

CodeViewer.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default CodeViewer;
