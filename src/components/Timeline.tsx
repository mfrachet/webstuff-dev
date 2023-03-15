import { useId, useRef, useState } from "react";
import { KeyboardKeys } from "../modules/a11y/KeyboardKeys";
import Card from "./Card";
import { ExampleWrapper } from "./ExampleWrapper";
import { IconArrowBackward } from "./icons/IconArrowBackward";
import { IconArrowForward } from "./icons/IconArrowForward";
import Tag from "./Tag";

interface Step {
  node: React.ReactNode;
  legend: React.ReactNode;
}
export interface TimelineProps {
  steps: Array<Step>;
  title: string;
}

export default function Timeline({ steps, title }: TimelineProps) {
  const id = useId();
  const [step, setStep] = useState(1);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);

  const stepListId = `steplist-${id}`;
  const actualStep = steps[step - 1];

  const goNext = () => {
    setStep((s) => {
      const nextIndex = s + 1;

      return nextIndex > steps.length ? s : nextIndex;
    });
  };

  const goBack = () => {
    setStep((s) => {
      const prevIndex = s - 1;

      return prevIndex <= 0 ? s : prevIndex;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === KeyboardKeys.RIGHT) {
      nextBtnRef.current?.focus();
      goNext();
    }

    if (e.key === KeyboardKeys.LEFT) {
      prevBtnRef.current?.focus();
      goBack();
    }
  };

  const btnClass =
    "bg-slate-800 text-white rounded-lg active:bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:ring-blue-300 outline-none";

  return (
    <ExampleWrapper>
      <figure className="p-0 m-0" tabIndex={-1} onKeyDown={handleKeyDown}>
        <figcaption className=" m-0 text-lg pb-6 text-center font-extrabold">
          {title}
        </figcaption>

        <div>
          {steps
            .filter((_, index) => index + 1 === step)
            .map((s, index) => (
              <Card key={`timeline-${index}`}>
                <div className="p-6">{s.node}</div>
                <div className="bg-slate-100 px-6 py-3 flex flex-col md:flex-row md:gap-4">
                  <div>
                    <Tag>{`${step}/${steps.length}`}</Tag>
                  </div>
                  <div className="pt-1">{actualStep.legend}</div>
                </div>
              </Card>
            ))}
        </div>

        <div className="flex flex-row gap-4 items-center pt-4">
          <button
            ref={prevBtnRef}
            className={btnClass}
            onClick={goBack}
            type="button"
          >
            <IconArrowBackward
              className="text-6xl"
              aria-label="Étape précédente"
            />
          </button>
          <div className="text-center pt-4 w-full">
            <label htmlFor={id} className="sr-only">
              Changer de position sur la timeline
            </label>
            <input
              type="range"
              id={id}
              name={id}
              min="1"
              max={steps.length}
              value={step}
              step="1"
              list={stepListId}
              className="w-full px-8"
              onChange={(e) => {
                setStep(Number(e.target.value));
              }}
            />
            <datalist id={stepListId}>
              {steps.map((_, index) => (
                <option key={`datalist-${index}`}>{index + 1}</option>
              ))}
            </datalist>
          </div>
          <button
            ref={nextBtnRef}
            className={btnClass}
            onClick={goNext}
            type="button"
          >
            <IconArrowForward
              className="text-6xl"
              aria-label="Prochaine étape"
            />
          </button>
        </div>
      </figure>
    </ExampleWrapper>
  );
}

export const Legend = ({ children }: { children: React.ReactNode }) => {
  return <p className="m-0 font-bold leading-normal">{children}</p>;
};
