import { Button, DownloadIcon } from '@components';
import { MODE_DOWNLOAD } from '@consts';
import { useEditorContext, CHANGE_MODE } from '@contexts/EditorContext';

function DownloadBtn() {
  const [, dispatch] = useEditorContext();

  function download() {
    dispatch({
      type: CHANGE_MODE,
      payload: MODE_DOWNLOAD,
    });
  }

  return (
    <Button variant="primary" className="shadow-slate-lg" onClick={download}>
      <DownloadIcon className="w-4 mr-3" />
      Download
    </Button>
  );
}

export default DownloadBtn;
