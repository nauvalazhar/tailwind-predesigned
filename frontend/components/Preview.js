import { useRef, useEffect } from 'react';
import { useEditorContext, CHANGE_RESOLUTION } from '@contexts/EditorContext';
import { useDesign } from '@hooks';
import { EmptyState, LoaderIcon } from '@components';
import { getQuote } from '@helpers';

function Preview() {
  const { data: design, isLoading: loadingDesign } = useDesign();
  const [{ size }, dispatch] = useEditorContext();
  const previewFrame = useRef(null);
  const quote = useRef([]);

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

  function handleFrameLoaded() {
    const frame = previewFrame.current;
    frame.classList.add('bg-white', 'opacity-100');
    frame.classList.remove('opacity-0');
  }

  const previewUrl = design ? design.data.preview : '';

  return (
    <div className="w-full h-full relative flex justify-center bg-neutral-900">
      {loadingDesign && (
        <EmptyState
          title="Loading Preview"
          icon={
            <div>
              <LoaderIcon className="w-24 text-white animate-spin" />
            </div>
          }
          className="absolute z-10 z-10 bg-neutral-900">
          {quote.current}
        </EmptyState>
      )}
      <iframe
        ref={previewFrame}
        className="w-full h-full transition-all opacity-0"
        title="Demo"
        src={previewUrl}
        onLoad={handleFrameLoaded}
      />
    </div>
  );
}

export default Preview;
