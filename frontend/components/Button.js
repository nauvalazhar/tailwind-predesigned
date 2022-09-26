import PropTypes from 'prop-types';
import clsx from 'clsx';

function Button({ variant, size, children, className, block, ...props }) {
  const variants = {
    primary: 'gr-primary border-transparent text-white',
    red: 'gr-red border-transparent text-white',
    redlight: 'bg-red-100 text-red-500',
    darktrp: 'bg-primary-500 bg-opacity-10 border-transparent text-white',
    outlinewhite: 'bg-transparent text-white border-white border-2',
    yellow: 'gr-yellow border-transparent text-primary-900',
    dark: 'gr-dark text-white',
  };

  const sizes = {
    normal: 'py-2 px-5 rounded',
    lg: 'py-3 px-8 rounded-md',
  };

  const pickedVariant = variants[variant || 'primary'];
  const pickedSize = sizes[size || 'normal'];

  return (
    <a
      className={clsx(
        'cursor-pointer inline-flex font-semibold transition-all',
        'justify-center hover:transform hover:scale-105 uppercase text-sm tracking-wider',
        block && 'w-full',
        pickedSize,
        pickedVariant,
        className
      )}
      {...props}>
      {children}
    </a>
  );
}

Button.defaultProps = {
  variant: 'primary',
  size: 'normal',
  block: false,
  className: '',
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'darktrp', 'outlinewhite', 'yellow']),
  size: PropTypes.oneOf(['normal', 'lg']),
  children: PropTypes.node.isRequired,
  block: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
