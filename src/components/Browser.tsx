import { BrowserMoqup } from "./BrowserMoqup";

export interface BrowserProps {
  isFullPageLoading?: boolean;
  initiallyPainted?: boolean;
  hydrated?: boolean;
}

export default function Browser({
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
    <BrowserMoqup isFullPageLoading={Boolean(isFullPageLoading)}>
      {initiallyPainted && (
        <div>
          <div className="flex flex-row gap-2">
            <div className={`h-2 w-4 ${navLinkClass}`} />
            <div className={`h-2 w-6 ${navLinkClass}`} />
            <div className={`h-2 w-3 ${navLinkClass}`} />
          </div>

          <div className="mx-auto md:w-60 pt-4 px-2 md:px-8">
            <div className={heroClass} />
            <div className={`h-4 w-12 ${contentClass}`} />
            <div className={`h-2 w-full ${contentClass}`} />
            <div className={`h-2 w-1/2 ${contentClass}`} />
            <div className={`h-2 w-12 ${contentClass}`} />
          </div>
        </div>
      )}
    </BrowserMoqup>
  );
}
