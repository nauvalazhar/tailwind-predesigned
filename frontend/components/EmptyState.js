import PropTypes from 'prop-types';
import clsx from 'clsx';

function EmptyState({ prepend, icon, title, children, className }) {
  return (
    <div
      className={clsx(
        'w-full h-full flex items-center justify-center flex-col',
        className
      )}>
      {prepend}
      {icon && <div className="text-8xl mb-7">{icon}</div>}
      <h2 className="text-2xl text-white">{title}</h2>
      <p className="w-6/12 text-white/60 mt-4 text-lg mb-8 text-center">
        {children}
      </p>
    </div>
  );
}

EmptyState.defaultProps = {
  prepend: '',
  icon: '',
  className: '',
};

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  prepend: PropTypes.node,
  className: PropTypes.node,
};

export default EmptyState;
