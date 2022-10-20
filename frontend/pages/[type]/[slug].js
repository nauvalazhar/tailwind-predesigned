import {
  Syntax,
  Preview,
  Docs,
  EditorLayout,
  Download,
  EmptyState,
} from '@components';
import { useEditorContext } from '@contexts/EditorContext';
import { MODE_CODES, MODE_DOCS, MODE_DOWNLOAD } from '@consts';
import { useDesign } from '@hooks';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { titlable } from '@helpers';

function Editor() {
  const { data: design, isLoading: loadingDesign } = useDesign();
  const [{ mode }] = useEditorContext();
  const {
    query: { slug: designName },
  } = useRouter();

  if (!design && !loadingDesign) {
    return (
      <EmptyState
        title="Sorry, the design you are looking for does not exist"
        icon="🥺">
        Our mistake was not having the design you were looking for, but maybe
        <br />
        we will create one in the future, or you can contribute.
      </EmptyState>
    );
  }

  let Component = Preview;

  if (mode === MODE_CODES) Component = Syntax;
  else if (mode === MODE_DOCS) Component = Docs;
  else if (mode === MODE_DOWNLOAD) Component = Download;

  return (
    <>
      <Head>
        <title>
          {designName
            ? `${titlable(designName)} – tailwind-predesigned`
            : 'tailwind-predesigned'}
        </title>
      </Head>
      <Component />
    </>
  );
}

Editor.getLayout = EditorLayout;

export default Editor;
