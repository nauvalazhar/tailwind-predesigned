import { useEditorContext } from '@contexts/EditorContext';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ResolutionToast() {
  const [{ resolution }] = useEditorContext();
  const [resolutionFrame, setResolutionFrame] = useState(0);
  const resolutionFrameTimeoutRef = useRef(null);

  useEffect(() => {
    if (resolution !== '0x0') {
      setResolutionFrame(resolution);
    }

    if (resolutionFrameTimeoutRef.current !== null) {
      clearTimeout(resolutionFrameTimeoutRef.current);
    }

    resolutionFrameTimeoutRef.current = setTimeout(() => {
      resolutionFrameTimeoutRef.current = null;
      setResolutionFrame(0);
    }, 1000);
  }, [resolution]);

  return (
    <AnimatePresence>
      {resolutionFrame !== 0 && (
        <motion.div
          className="fixed z-10 top-40 right-0 m-5 bg-slate-700 text-white py-3 px-4 rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          {resolutionFrame}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResolutionToast;
