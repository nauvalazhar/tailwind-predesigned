import { titlable } from '@helpers';
import { useDesign } from '@hooks';

function Docs() {
  const { data, isLoading: loadingDesign } = useDesign();

  if (loadingDesign) return <div>Loading</div>;

  const design = data.data;

  return (
    <section className="p-8 text-white">
      <h2 className="text-2xl font-semibold">{titlable(design.name)}</h2>
      <p className="text-lg mt-1 text-white/60">{design.description}</p>
    </section>
  );
}

export default Docs;
