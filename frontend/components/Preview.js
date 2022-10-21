import { useState, useRef, useEffect } from 'react';
import { useEditorContext, CHANGE_RESOLUTION } from '@contexts/EditorContext';
import { useDesign } from '@hooks';
import { EmptyState, LoaderIcon } from '@components';
import { getQuote } from '@helpers';
import clsx from 'clsx';

function Preview() {
  const { data: design, isLoading: loadingDesign } = useDesign();
  const [{ size }, dispatch] = useEditorContext();
  const previewFrame = useRef(null);
  const quote = useRef([]);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    quote.current = getQuote();
  }, [getQuote]);

  useEffect(() => {
    const breakpoint =
      size.breakpoint === -1 ? window.outerWidth : size.breakpoint;

    if (previewFrame.current) {
      previewFrame.current.style.width = `${breakpoint}px`;
      dispatch({
        type: CHANGE_RESOLUTION,
        payload: `${breakpoint}x${previewFrame.current.clientHeight}`,
      });
    }
  }, [size, dispatch]);

  function iframeLoad() {
    setIsIframeLoaded(true);
  }

  const previewUrl = design ? design.data.preview : '';
  const isLoadingIframe = !isIframeLoaded || loadingDesign;

  return (
    <div className="w-full h-full relative flex justify-center bg-neutral-900">
      {isLoadingIframe && (
        <EmptyState
          title="Loading Preview"
          icon={
            <div>
              <LoaderIcon className="w-24 text-white animate-spin" />
            </div>
          }
          className="absolute z-10 z-10">
          {quote.current}
        </EmptyState>
      )}
      <iframe
        onLoad={iframeLoad}
        ref={previewFrame}
        className={clsx(
          'w-full h-full transition-all',
          isLoadingIframe ? 'bg-transparent opacity-0' : 'bg-white opacity-100'
        )}
        title="Demo"
        src={previewUrl}
      />
    </div>
  );
}

export default Preview;
