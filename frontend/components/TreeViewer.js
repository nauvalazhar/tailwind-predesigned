import { Tree } from '@components';
import { useDesigns, useDesign } from '@hooks';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function TreeViewer() {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  const { data: designs, loadingDesigns } = useDesigns();
  const { data: design } = useDesign();
  const [selected, setSelected] = useState('');

  // this will preserve privious design selected path
  // and change the selected design path on every design change
  useEffect(() => {
    if (design && slug) {
      setSelected(design.data.filepath);
    } else if (!design && !slug) {
      setSelected('');
    }
  }, [design, slug]);

  function changeDesign(item) {
    router.push({
      pathname: '/[type]/[slug]',
      query: {
        type: 'html',
        slug: item.name,
      },
    });
  }

  if (loadingDesigns) return <div>Loading</div>;
  if (design && !selected) return [];

  return (
    <Tree
      selected={selected}
      className="space-y-2"
      files={designs.data}
      onClick={changeDesign}
    />
  );
}

export default TreeViewer;
