import { useRef, useEffect } from 'react';
import { useEditorContext, CHANGE_RESOLUTION } from '@contexts/EditorContext';
import { useDesign } from '@hooks';
import { EmptyState } from '@components';

function Preview() {
  const { data: design, isLoading: loadingDesign } = useDesign();
  const [{ size }, dispatch] = useEditorContext();
  const previewFrame = useRef(null);

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

  if (loadingDesign)
    return (
      <EmptyState title="Loading Preview" icon="⏳">
        Loading
      </EmptyState>
    );

  return (
    <div className="w-full h-full relative flex justify-center">
      <iframe
        ref={previewFrame}
        className="w-full h-full bg-white transition-all"
        title="Demo"
        src={design.data.preview}
      />
    </div>
  );
}

export default Preview;
