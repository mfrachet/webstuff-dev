import React from "react";
import { TbSlash } from "react-icons/tb";

export interface Crumb {
  label: string;
  href: string;
}

export interface BreadCrumbsProps {
  crumbs: Array<Crumb>;
}

export default function BreadCrumbs({ crumbs }: BreadCrumbsProps) {
  return (
    <nav className="py-4">
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
                  <TbSlash className="text-lg text-slate-500" />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
