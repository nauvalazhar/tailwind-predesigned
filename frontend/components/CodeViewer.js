import { useState } from 'react';
import { editorStyle } from '@utils/editor-style';
import PropTypes from 'prop-types';
import Editor from '@monaco-editor/react';
import clsx from 'clsx';

function CodeViewer({ code, language }) {
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme('my-theme', editorStyle);
  }

  function handleEditorMounted() {
    setIsEditorLoaded(true);
  }
  return (
    <Editor
      className={clsx(
        'transition-all',
        isEditorLoaded ? 'opacity-100' : 'opacity-0'
      )}
      loading=""
      height="100%"
      language={language}
      theme="my-theme"
      value={code}
      options={{
        readOnly: true,
        fontSize: 14,
      }}
      beforeMount={handleEditorWillMount}
      onMount={handleEditorMounted}
    />
  );
}

CodeViewer.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeViewer;
