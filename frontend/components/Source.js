import Editor from '@monaco-editor/react';
import clsx from 'clsx';
import { LoadingCodes, EmptyState } from '@components';
import { useSourceCode } from '@hooks';
import { editorStyle } from '@utils/editor-style';
import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  isVideos,
  isImages,
  isCodes,
  determineLanguage,
  designPath,
  fileExt,
} from '@helpers';

function Source() {
  const {
    query: { f, slug: designName },
  } = useRouter();
  const file = f || 'index.html';
  const { data, isLoading } = useSourceCode(file);
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);

  function handleEditorWillMount(monaco) {
    monaco.editor.defineTheme('my-theme', editorStyle);
  }

  function handleEditorMounted() {
    setIsEditorLoaded(true);
  }

  const fileSrc = designPath(designName, file);
  const fileExtension = fileExt(file);
  const isFileSupported =
    isImages(fileExtension) ||
    isVideos(fileExtension) ||
    isCodes(fileExtension);
  const code = data ? data.code : '';
  const language = data ? determineLanguage(file) : '';

  // the file other than 'codes' is not requested via hooks
  if (isCodes(fileExtension) && !isLoading && !data) {
    return (
      <EmptyState title="File not found" icon="👀">
        What are you trying to find? File could not be found, report an issue if
        you think this is a bug.
      </EmptyState>
    );
  }

  if (!isFileSupported) {
    return (
      <EmptyState title="What kind of file is this?!" icon="🤯">
        At this time we do not support files with the extension &apos;
        {fileExtension}&apos; to be opened in the browser.
      </EmptyState>
    );
  }

  return (
    <div className="h-full relative overflow-auto">
      {isImages(fileExtension) && (
        <div className="flex items-center justify-center min-h-full p-20">
          <img src={fileSrc} alt={fileSrc} className="max-w-full" />
        </div>
      )}
      {isVideos(fileExtension) && (
        <div className="flex items-center justify-center min-h-full p-20">
          <video controls>
            <source src={fileSrc} type={`video/${fileExtension}`} />
          </video>
        </div>
      )}
      {isCodes(fileExtension) && (
        <>
          {(isLoading || !isEditorLoaded) && <LoadingCodes />}
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
        </>
      )}
    </div>
  );
}

export default Source;
