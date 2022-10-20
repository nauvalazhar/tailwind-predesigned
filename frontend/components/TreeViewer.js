import { FilesTree } from '@components';
import { useDesigns, useDesign } from '@hooks';
import { useRouter } from 'next/router';

function TreeViewer() {
  const router = useRouter();
  const { data: designs, loadingDesigns } = useDesigns();
  const { data: design, isLoading: loadingDesign } = useDesign();

  function changeDesign(item) {
    router.push({
      pathname: '/[type]/[slug]',
      query: {
        type: 'html',
        slug: item.name,
      },
    });
  }

  let selectedDesign = '';

  if (!loadingDesign && design) {
    selectedDesign = design.data.filepath;
  }

  if (loadingDesigns) return <div>Loading</div>;

  return (
    <FilesTree
      files={designs.data}
      onClick={changeDesign}
      selected={selectedDesign}
    />
  );
}

export default TreeViewer;
