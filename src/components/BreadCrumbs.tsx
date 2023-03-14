import React from "react";
import { IconArrowBackward } from "./icons/IconArrowBackward";
import { IconSlash } from "./icons/IconSlash";

export interface Crumb {
  label: string;
  href: string;
}

export interface BreadCrumbsProps {
  crumbs: Array<Crumb>;
}

export default function BreadCrumbs({ crumbs }: BreadCrumbsProps) {
  const lastCrumb = crumbs[crumbs.length - 2];

  return (
    <>
      {lastCrumb && (
        <nav className="md:hidden pt-4 md:pt-0">
          <a
            href={lastCrumb.href}
            aria-label="Retour"
            className="h-10 w-10 flex items-center justify-center rounded overflow-hidden active:bg-slate-100"
          >
            <IconArrowBackward className="text-3xl" />
          </a>
        </nav>
      )}
      <nav className="py-4 hidden md:block">
        <ol className="flex flex-row gap-2 items-center">
          {crumbs.map((crumb, index) => {
            const isLast = crumbs.length - 1 === index;

            return (
              <React.Fragment key={crumb.href}>
                <li>
                  <a
                    href={crumb.href}
                    aria-current={isLast}
                    className={
                      isLast
                        ? "text-slate-900 border-b-2 border-b-slate-900 pb-1 hover:text-slate-800 active:text-slate-700 font-bold"
                        : "hover:text-slate-800 active:text-slate-700"
                    }
                  >
                    {crumb.label}
                  </a>
                </li>

                {!isLast && (
                  <li role="separator">
                    <IconSlash className="text-lg text-slate-500" />
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
