import { Collapsible, FolderIcon, FileIcon } from '@components';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function Tree({ files, className, ...props }) {
  const { folderIcon, fileIcon, onClick, selected } = props;

  function handleClick(item) {
    onClick(item);
  }

  return (
    <div className={clsx('relative', className)}>
      {Object.entries(files).map(([key, val]) => {
        const isSelected = selected.startsWith(val.path);

        if (val.dir) {
          return (
            <Collapsible
              key={key}
              trigger={
                <span
                  className={clsx(
                    'flex space-x-2 items-center',
                    isSelected ? 'text-white font-semibold' : 'text-white/80'
                  )}>
                  {folderIcon || <FolderIcon className="w-5 opacity-60" />}
                  <span>{val.displayName}</span>
                </span>
              }
              defaultOpen={isSelected}>
              <Tree
                files={val.nodes}
                className={clsx(className, 'ml-7 mt-2')}
                {...props}
              />
            </Collapsible>
          );
        }

        return (
          <button
            key={key}
            type="button"
            className={clsx(
              'flex items-center space-x-2 mb-3',
              isSelected ? 'text-white font-semibold' : 'text-white/80'
            )}
            onClick={() => handleClick(val)}>
            {fileIcon || <FileIcon className="w-5 opacity-60" />}
            <span>{val.displayName}</span>
          </button>
        );
      })}
    </div>
  );
}

Tree.defaultProps = {
  className: '',
  onClick: undefined,
  selected: undefined,
  folderIcon: undefined,
  fileIcon: undefined,
};

Tree.propTypes = {
  files: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  folderIcon: PropTypes.node,
  fileIcon: PropTypes.node,
  selected: PropTypes.string,
};

export default Tree;
