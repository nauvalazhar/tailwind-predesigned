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

  if (isLoading) {
    return (
      <div className="grid place-items-center h-full">
        <LoaderIcon className="w-20 text-white/50 animate-spin" />
      </div>
    );
  }

  // the file other than 'codes' is not requested via hooks
  if (isError && isError.status === 404) {
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
      {isImages(fileExtension) && <ImageViewer src={fileSrc} />}
      {isVideos(fileExtension) && (
        <VideoViewer src={fileSrc} type={`video/${fileExtension}`} />
      )}
      {isCodes(fileExtension) && <CodeViewer code={code} language={language} />}
    </div>
  );
}

export default Source;
