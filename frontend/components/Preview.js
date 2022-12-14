import { useState, useRef, useEffect } from 'react';
import { useEditorContext, CHANGE_RESOLUTION } from '@contexts/EditorContext';
import { useDesign } from '@hooks';
import { EmptyState, LoaderIcon } from '@components';
import clsx from 'clsx';

function Preview() {
  const { data: design, isLoading } = useDesign();
  const [{ size }, dispatch] = useEditorContext();
  const previewFrame = useRef(null);
  const [isFrameLoaded, setIsFrameLoaded] = useState(false);

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
    const firstElement = frame.contentWindow.document.body.querySelector('div');

    if (firstElement) {
      setIsFrameLoaded(true);
    }
  }

  const previewUrl = design ? design.data.preview : '';

  return (
    <div className="w-full h-full relative flex justify-center bg-neutral-900">
      {(isLoading || !isFrameLoaded) && (
        <EmptyState
          title="Loading Preview"
          icon={<LoaderIcon className="w-16 text-white/50 animate-spin" />}
          className="absolute z-10 z-10 bg-neutral-900">
          Maybe it will take some time, let&apos;s have a drink first.
        </EmptyState>
      )}

      <iframe
        ref={previewFrame}
        className={clsx(
          'w-full h-full transition-all',
          isFrameLoaded ? 'bg-white opacity-100' : 'opacity-0'
        )}
        title="Demo"
        src={previewUrl}
        onLoad={handleFrameLoaded}
      />
    </div>
  );
}

export default Preview;
