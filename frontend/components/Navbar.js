import { GithubBtn } from '@components';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="p-6 bg-neutral-900 border-b border-neutral-800 flex items-center">
      <div className="space-y-1">
        <h1 className="text-lg font-semibold font-mono text-white">
          <Link href="/">tailwind-predesigned</Link>
        </h1>
        <h2 className="text-white/50 text-sm">
          design by{' '}
          <a
            className="text-blue-500 font-semibold"
            href="https://twitter.com/mhdnauvalazhar"
            target="_blank"
            rel="noreferrer">
            @mhdnauvalazhar
          </a>
        </h2>
      </div>
      <GithubBtn />
    </nav>
  );
}

export default Navbar;
