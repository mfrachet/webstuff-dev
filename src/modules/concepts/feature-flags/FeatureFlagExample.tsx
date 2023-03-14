import { useState } from "react";
import { BrowserMoqup } from "../../../components/BrowserMoqup";
import { Canvas } from "../../../components/Canvas";
import { ExampleWrapper } from "../../../components/ExampleWrapper";
import { Switch } from "../../../components/Switch";

export function FeatureFlagExample() {
  const [checked, setChecked] = useState(false);
  return (
    <ExampleWrapper>
      <Canvas>
        <BrowserMoqup>
          <div className="flex flex-col gap-1">
            {checked && (
              <div className="bg-indigo-700 rounded-lg h-20 flex flex-col items-center justify-center gap-2">
                <div className="bg-indigo-900 rounded-full h-4 w-2/5"></div>
                <div className="bg-indigo-900 rounded-full h-4 w-4/5"></div>
              </div>
            )}
            <div className="bg-gray-100 rounded-full h-4 w-4/5"></div>
            <div className="bg-gray-100 rounded-full h-4 w-1/2"></div>
            <div className="bg-gray-100 rounded-full h-4"></div>
            <div className="bg-gray-100 rounded-full h-4"></div>
            <div className="bg-gray-100 rounded-full h-4"></div>
          </div>
        </BrowserMoqup>
        <BrowserMoqup>
          <div className="text-lg font-bold pb-2">
            Tableau de bord des
            <br /> feature flags
          </div>

          <div className="flex flex-row justify-between gap-2 p-2 bg-slate-50 items-center">
            <div className="">Nouveau hero</div>
            <Switch checked={checked} onChange={setChecked} label="Toggle" />
          </div>
        </BrowserMoqup>
      </Canvas>
    </ExampleWrapper>
  );
}
