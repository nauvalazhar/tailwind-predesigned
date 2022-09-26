import { useEditorContext } from '@contexts/EditorContext';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark as shStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import PropTypes from 'prop-types';
import { useDesign, useSourceCode } from '@hooks';

function Syntax() {
  const { data: design, isLoading: loadingDesign } = useDesign();
  const { data, isLoading: loadingSourceCode } = useSourceCode();

  if (loadingDesign || loadingSourceCode) return <div>Loading ...</div>;

  return (
    <div className="overflow-auto h-full">
      {design.type === 'page' ? (
        <div className="w-full h-full flex items-center justify-center flex-col">
          <div className="text-8xl mb-7">🤯</div>
          <h2 className="text-2xl text-white">
            Sorry, file is too large to handle
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            Currently, we can only read block-type design source code.
          </p>
        </div>
      ) : (
        <SyntaxHighlighter
          className="codeblock"
          style={shStyle}
          language="html"
          useInlineStyles
          showLineNumbers>
          {data.code}
        </SyntaxHighlighter>
      )}
    </div>
  );
}

export default Syntax;
