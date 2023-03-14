import { IconLoader } from "./icons/IconLoader";

export interface BrowserMoqupProps {
  isFullPageLoading?: boolean;
  children: React.ReactNode;
}

export const BrowserMoqup = ({
  isFullPageLoading,
  children,
}: BrowserMoqupProps) => {
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
        {children}
      </div>
    </div>
  );
};
