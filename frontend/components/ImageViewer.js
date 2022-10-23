import PropTypes from 'prop-types';

function ImageViewer({ src }) {
  return (
    <div className="flex items-center justify-center min-h-full p-20">
      <img src={src} alt={src} className="max-w-full" />
    </div>
  );
}

ImageViewer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImageViewer;
