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
          {checked ? <p>checked</p> : <p>not checked</p>}
        </BrowserMoqup>
        <BrowserMoqup>
          <Switch
            checked={checked}
            onChange={setChecked}
            label="Toggle le flag"
          />
        </BrowserMoqup>
      </Canvas>
    </ExampleWrapper>
  );
}
