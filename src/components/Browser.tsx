import { IconLoader } from "./icons/IconLoader";

export interface BrowserProps {
  loadedText?: string;
  loadingText?: string;
  isFullPageLoading?: boolean;
  initiallyPainted?: boolean;
  hydrated?: boolean;
}

export default function Browser({
  loadedText,
  loadingText,
  initiallyPainted,
  isFullPageLoading,
  hydrated,
}: BrowserProps) {
  const navLinkClass = `rounded-full ${
    hydrated ? "bg-indigo-600" : "bg-gray-200"
  }`;

  const heroClass = `h-16 rounded ${hydrated ? "bg-pink-300" : "bg-gray-200"}`;
  const contentClass = `${
    hydrated ? "bg-gray-900" : "bg-gray-200"
  } rounded-full mt-2`;

  return (
    <div className="w-full md:w-72">
      <div className="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center gap-2 px-3">
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-400"></span>
        <span className="ml-4 bg-gray-700 drop-shadow-4xl rounded h-6 w-28 items-center flex px-2">
          {isFullPageLoading && (
            <IconLoader
              className="animate-spin text-lg text-slate-100"
              aria-label="La page charge..."
            />
          )}
        </span>
      </div>
      <div className="bg-white w-full h-52 border border-gray-200 border-t-0 rounded-b-lg p-2">
        {initiallyPainted && (
          <div>
            <div className="flex flex-row gap-2">
              <div className={`h-2 w-4 ${navLinkClass}`} />
              <div className={`h-2 w-6 ${navLinkClass}`} />
              <div className={`h-2 w-3 ${navLinkClass}`} />
            </div>

            <div className="mx-auto w-60 pt-4 px-8">
              <div className={heroClass} />
              <div className={`h-4 w-12 ${contentClass}`} />
              <div className={`h-2 w-full ${contentClass}`} />
              <div className={`h-2 w-1/2 ${contentClass}`} />
              <div className={`h-2 w-12 ${contentClass}`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
