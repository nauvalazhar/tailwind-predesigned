import {
  LoaderIcon,
  ImageViewer,
  VideoViewer,
  CodeViewer,
  EmptyState,
} from '@components';
import { useSourceCode } from '@hooks';
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
  const { data: source, isLoading, isError } = useSourceCode(file);

  const fileSrc = designPath(designName, file);
  const fileExtension = fileExt(file);
  const isFileSupported =
    isImages(fileExtension) ||
    isVideos(fileExtension) ||
    isCodes(fileExtension);
  const code = source ? source.data : '';
  const language = source ? determineLanguage(file) : '';

  // the file other than 'codes' is not requested via hooks
  if (!isLoading && isError && isError.status === 404) {
    return (
      <EmptyState title="File not found" icon="👀">
        What are you trying to find? File could not be found, report an issue if
        you think this is a bug.
      </EmptyState>
    );
  }

  if (!isLoading && !isFileSupported) {
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
        <ImageViewer src={fileSrc} loading={isLoading} />
      )}
      {isVideos(fileExtension) && (
        <VideoViewer
          src={fileSrc}
          type={`video/${fileExtension}`}
          loading={isLoading}
        />
      )}
      {isCodes(fileExtension) && (
        <CodeViewer code={code} language={language} loading={isLoading} />
      )}
    </div>
  );
}

export default Source;
