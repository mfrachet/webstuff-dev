import { t } from "i18next";
import { IconSearch } from "./icons/IconSearch";

export default function Search() {
  return (
    <form
      role="search"
      action="/concepts"
      method="get"
      className="flex flex-row relative items-end"
    >
      <div className="w-full md:w-auto">
        <label htmlFor="searchbar" className="font-semibold block pb-1">
          {t("concepts:search")}
        </label>

        <input
          id="searchbar"
          type="text"
          name="search"
          placeholder="e.g: Server Side Rendering"
          className="w-full md:w-auto bg-white px-4 py-2 border-gray-700 rounded-lg drop-shadow pr-12"
        />
      </div>

      <button
        type="submit"
        className="h-8 w-8 bg-white text-slate-900 rounded hover:bg-slate-50 active:bg-slate-100 relative z-10 -ml-9 mb-1 flex items-center justify-center"
        aria-label={t("conceps:search")}
      >
        <IconSearch />
      </button>
    </form>
  );
}
