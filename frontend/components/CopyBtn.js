import { useState } from 'react';
import { CopyIcon, CheckIcon } from '@components';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function CopyBtn({ text, className }) {
  const [copied, setIsCopied] = useState(false);

  function copy(str) {
    navigator.clipboard.writeText(str);

    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={() => copy(text)}
      className={clsx(
        'w-8 h-8 bg-neutral-700 hover:bg-neutral-600 rounded flex items-center justify-center border border-neutral-600',
        className
      )}>
      {copied ? <CheckIcon className="w-4" /> : <CopyIcon className="w-4" />}
    </button>
  );
}

CopyBtn.defaultProps = {
  className: '',
};

CopyBtn.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CopyBtn;
