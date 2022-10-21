import { getRandomInt, arrayByInt } from '@helpers';

function LoadingCodes() {
  return (
    <div className="p-6 space-y-4 absolute z-10 inset-0 bg-neutral-900">
      {arrayByInt(getRandomInt(10, 15)).map((i) => (
        <div key={i} className="flex items-center space-x-3 animate-pulse">
          {arrayByInt(getRandomInt(1, 10)).map((n) => (
            <div
              key={n}
              className="h-4 bg-neutral-800 rounded-xl"
              style={{ width: getRandomInt(30, 100) }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default LoadingCodes;
