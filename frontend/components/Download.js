import { useDesign } from '@hooks';
import { HelpIcon, Popover } from '@components';

function Download() {
  const { data, isLoading: loadingDesign } = useDesign();

  if (loadingDesign) return <div>Loading</div>;

  const design = data.data;
  const command = design
    ? `npx tailwind-predesigned -d ${design.packageJson.name}`
    : 'Loading command';

  return (
    <section className="flex overflow-hidden">
      <div className="w-7/12">
        <div className="min-w-full overflow-auto h-full prose prose-invert prose-pre:bg-neutral-800/75 border-r border-neutral-800 p-8">
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
            <li>
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                Node JS
              </a>{' '}
              version 8 or above
            </li>
          </ul>
          <h3>Download</h3>
          <p>In order to download this design, follow these steps:</p>
          <ol>
            <li>Open your favorite terminal emulator</li>
            <li>
              Copy the following command
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
            The reason we use this method is to speed up and save space without
            having to generate CSS code for each design block.
          </p>
        </div>
      </div>
      <div className="w-5/12 overflow-auto">
        <div className="p-8 text-white">
          <h2 className="uppercase font-semibold text-sm tracking-wider text-white/40 flex items-center">
            Video Instruction{' '}
            <Popover trigger={<HelpIcon className="w-5 ml-2" />}>
              <div className="prose prose-invert">
                <p className="mb-2">Things used in the video:</p>
                <ul className="mt-0">
                  <li>macOS 12.1</li>
                  <li>Alacritty</li>
                  <li>Node JS v16.17.1</li>
                  <li>NPM 8.15.0</li>
                </ul>
              </div>
            </Popover>
          </h2>
          <div className="mt-4">
            <figure className="p-5 bg-neutral-800/50 rounded-lg">
              <video controls>
                <source src="/installation.mp4" type="video/mp4" />
                <a href="/installation.mp4">Download the video here.</a>
              </video>
              <figcaption className="text-white/60 text-center mt-3 text-sm">
                Design download instruction video.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
