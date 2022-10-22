import { Fragment } from 'react';
import { useDesign } from '@hooks';
import { extractAuthor, npmjsCom } from '@helpers';
import Image from 'next/image';
import { MODE_DOWNLOAD } from '@consts';
import { useEditorContext, CHANGE_MODE } from '@contexts/EditorContext';
import { ExternalIcon } from '@components';
import clsx from 'clsx';

function Docs() {
  const { data, isLoading: loadingDesign } = useDesign();
  const [, dispatch] = useEditorContext();

  function gotoDownload() {
    dispatch({
      type: CHANGE_MODE,
      payload: MODE_DOWNLOAD,
    });
  }

  const design = data ? data.data : {};

  const [authorName, authorUrl] = extractAuthor(design.packageJson.author);

  return (
    <section
      className={clsx(
        'p-8 text-white prose prose-invert min-w-full transition-all',
        loadingDesign ? 'opacity-0' : 'opacity-100'
      )}>
      <h2>{design.name}</h2>
      <p className="lead">{design.description}</p>
      <hr className="border-neutral-800 my-4" />
      <h3 className="uppercase text-sm tracking-wider text-white/60">Author</h3>
      <div className="flex items-center">
        <Image
          src={`${authorUrl}.png?size=50`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <h4 className="mt-0 mb-px">{authorName}</h4>
          <a
            href={authorUrl}
            target="_blank"
            className="m-0 text-white/60 underline flex items-center"
            rel="noreferrer">
            {authorUrl}
            <ExternalIcon className="w-4 ml-2 opacity-60" />
          </a>
        </div>
      </div>
      <hr className="border-neutral-800 mt-4 mb-8" />
      <h3>How to use</h3>
      <p>There are at least two ways to use this design:</p>
      <ul>
        <li>
          Copy the code directly from the specified element in the
          &quot;source&quot; tab
        </li>
        <li>
          Download the entire design project. Go to{' '}
          <button
            type="button"
            className="cursor-pointer p-0 m-0 underline"
            onClick={gotoDownload}>
            download tab
          </button>{' '}
          for more
        </li>
      </ul>

      {['dependencies', 'devDependencies'].map((dep) => {
        if (dep in design.packageJson) {
          return (
            <Fragment key={dep}>
              <h3>{dep}</h3>
              <ul>
                {Object.entries(design.packageJson[dep]).map(([name, ver]) => (
                  <li key={name}>
                    <span className="flex items-center">
                      {name}@{ver}{' '}
                      <a
                        href={npmjsCom(name, ver)}
                        target="_blank"
                        rel="noreferrer">
                        <ExternalIcon className="w-4 ml-2 opacity-60" />
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </Fragment>
          );
        }

        return [];
      })}
    </section>
  );
}

export default Docs;
