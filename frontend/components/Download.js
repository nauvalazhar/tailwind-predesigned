import { titlable } from '@helpers';
import { useDesign } from '@hooks';

function Download() {
  const { data, isLoading: loadingDesign } = useDesign();

  if (loadingDesign) return <div>Loading</div>;

  const design = data.data;
  const command = `npx degit nauvalazhar/tailwind-predesigned/frontend/public/designs/html/${design.name} ${design.name}`;

  return (
    <section className="flex overflow-hidden">
      <div className="w-7/12">
        <div className="min-w-full overflow-auto h-full prose prose-invert prose-pre:bg-slate-800/75 border-r border-slate-800 p-8">
          <h2>How to Download</h2>
          <p className="lead">
            We don&apos;t have any opinion about how you use this design. You
            can use it with any of your favorite tech stacks.
          </p>
          <h3>Prerequisite</h3>
          <p>Before downloading, understand the following prerequisites:</p>
          <ul>
            <li>Basic knowledge of Tailwind</li>
            <li>Familiar with command-line interface</li>
            <li>Node JS version 8 or above</li>
          </ul>
          <h3>Download</h3>
          <p>In order to download this design, follow these steps:</p>
          <ol>
            <li>Open your favorite terminal emulator</li>
            <li>
              Copy the following command
              <br />
              <pre>
                <code>{command}</code>
              </pre>
            </li>
            <li>Wait until the cloning process is complete</li>
            <li>Done! 🥳</li>
          </ol>
          <h3>Post-download</h3>
          <p>
            You need to remember, this design is not ready for production,
            because we use Tailwind CDN which is not recommended for production.
          </p>
          <p>
            The reason we use this method is to speed up and save space without
            having to generate CSS code for each design.
          </p>
        </div>
      </div>
      <div className="w-5/12">
        <div className="p-8 text-white">
          <h2 className="uppercase font-semibold text-sm tracking-wider text-white/40 mb-2">
            Pane Right
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Download;
