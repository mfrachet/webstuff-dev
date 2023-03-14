import { useId, useState } from "react";
import Card from "./Card";
import { ExampleWrapper } from "./ExampleWrapper";
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

  const stepListId = `steplist-${id}`;

  const actualStep = steps[step - 1];

  return (
    <ExampleWrapper>
      <figure className="p-0 m-0">
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

        <div className="text-center pt-4">
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
      </figure>
    </ExampleWrapper>
  );
}

export const Legend = ({ children }: { children: React.ReactNode }) => {
  return <p className="m-0 font-bold leading-normal">{children}</p>;
};
