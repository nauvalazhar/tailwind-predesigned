import { Collapsible, FolderIcon, FileIcon } from '@components';
import clsx from 'clsx';
import PropTypes from 'prop-types';

function Tree({ files, className, ...props }) {
  const { folderIcon, fileIcon, onClick, selected, fileAppend } = props;

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
                  {folderIcon || (
                    <FolderIcon className="w-5 opacity-60 flex-shrink-0" />
                  )}
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
          <div key={key} className="flex items-center mb-3 group">
            <button
              type="button"
              className={clsx(
                'flex items-center space-x-2 overflow-hidden pr-4',
                isSelected ? 'text-white font-semibold' : 'text-white/80'
              )}
              onClick={() => handleClick(val)}>
              {fileIcon || (
                <FileIcon className="w-5 opacity-60 flex-shrink-0" />
              )}
              <span className="truncate">{val.displayName}</span>
            </button>
            {fileAppend(val, isSelected)}
          </div>
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
  fileAppend: () => {},
};

Tree.propTypes = {
  files: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  folderIcon: PropTypes.node,
  fileIcon: PropTypes.node,
  selected: PropTypes.string,
  fileAppend: PropTypes.func,
};

export default Tree;
