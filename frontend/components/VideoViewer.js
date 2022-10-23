import { LoadingOverlay } from '@components';
import PropTypes from 'prop-types';

function VideoViewer({ src, type, loading }) {
  return (
    <>
      {loading && <LoadingOverlay />}
      <div className="flex items-center justify-center min-h-full p-20">
        <video controls>
          <source src={src} type={type} />
        </video>
      </div>
    </>
  );
}

VideoViewer.defaultProps = {
  loading: false,
};

VideoViewer.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default VideoViewer;
