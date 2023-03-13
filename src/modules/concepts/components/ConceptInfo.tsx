import { useRef } from "react";
import Card from "../../../components/Card";
import Title from "../../../components/Title";

export interface ConceptInfoProps {
  lang: string;
  title: string;
  src: string;
  href: string;
  id: string;
  date: string;
}

export default function ConceptInfo({
  href,
  title,
  src,
  id,
  lang,
  date,
}: ConceptInfoProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <Card>
      <article
        tabIndex={0}
        className="p-6 cursor-pointer hover:bg-slate-50 active:bg-slate-100"
        aria-labelledby={id}
        onClick={() => linkRef?.current?.click()}
      >
        <img
          src={src}
          alt=""
          height="100px"
          className="rounded h-[100px] object-cover w-full"
        />

        <div className="h-2"></div>

        <Title id={id} as={"h3"} size={"2xl"}>
          <a ref={linkRef} href={href} lang={lang} className="underline">
            {title}
          </a>
        </Title>

        <div className="h-4"></div>

        <time
          className="text-xs bg-slate-200 rounded-full px-3 py-1"
          dateTime={date}
        >
          {date}
        </time>
      </article>
    </Card>
  );
}
