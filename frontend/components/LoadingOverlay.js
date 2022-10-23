import { LoaderIcon } from '@components';

function LoadingOverlay() {
  return (
    <div className="grid place-items-center h-full absolute inset-0 z-10 bg-neutral-900">
      <LoaderIcon className="w-20 text-white/50 animate-spin" />
    </div>
  );
}

export default LoadingOverlay;
