import { Devicons } from '@components';
import clsx from 'clsx';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

function FileItem({ item, onClick, active }) {
  const { displayName, dir } = item;

  return (
    <button
      type="button"
      className={clsx(
        'flex items-center text-white transition',
        active ? 'font-semibold' : 'text-opacity-60 hover:text-opacity-100'
      )}
      onClick={onClick}>
      {dir && <Devicons name="folder" className="w-4 mr-3" />}
      {displayName}
    </button>
  );
}

FileItem.defaultProps = {
  active: false,
};

FileItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    dir: PropTypes.bool.isRequired,
    nodes: PropTypes.shape({}),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

function FilesTree({ files, onClick, className, selected }) {
  function handleFile(item) {
    if (!item.dir) {
      return onClick(item);
    }

    return false;
  }

  // display files object recursively
  return (
    <div className={clsx('relative space-y-3', className)}>
      {Object.keys(files).map((key) => {
        const item = files[key];
        const { path, nodes } = item;

        return (
          <Fragment key={path}>
            <FileItem
              item={item}
              onClick={() => handleFile(item)}
              active={selected.startsWith(path)}
            />
            {nodes && (
              <FilesTree
                files={nodes}
                onClick={handleFile}
                className="pl-6 before:absolute before:left-1.5 before:-top-4 before:bottom-1 before:w-px before:border-l before:border-white/20 before:border-dotted"
                selected={selected}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

FilesTree.defaultProps = {
  className: '',
  onClick: undefined,
  selected: undefined,
};

FilesTree.propTypes = {
  files: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.string,
};

export default FilesTree;
