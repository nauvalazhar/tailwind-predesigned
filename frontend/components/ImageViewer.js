import { LoadingOverlay } from '@components';
import { useState } from 'react';
import PropTypes from 'prop-types';

function ImageViewer({ src, loading }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  function imageLoaded() {
    setIsImageLoaded(true);
  }

  return (
    <>
      {(!isImageLoaded || loading) && <LoadingOverlay />}
      <div className="flex items-center justify-center min-h-full p-20">
        <img
          src={src}
          alt={src}
          key={src}
          className="max-w-full"
          onLoad={imageLoaded}
        />
      </div>
    </>
  );
}

ImageViewer.defaultProps = {
  loading: false,
};

ImageViewer.propTypes = {
  src: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default ImageViewer;
