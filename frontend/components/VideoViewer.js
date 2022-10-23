import PropTypes from 'prop-types';

function VideoViewer({ src, type }) {
  return (
    <div className="flex items-center justify-center min-h-full p-20">
      <video controls>
        <source src={src} type={type} />
      </video>
    </div>
  );
}

VideoViewer.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default VideoViewer;
