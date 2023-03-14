import Browser from "../../../components/Browser";
import { Canvas } from "../../../components/Canvas";
import NodeServer from "../../../components/NodejsServer";
import { Request, Response } from "../../../components/TechStack";
import Timeline, { Legend } from "../../../components/Timeline";

const FirstFrame = () => {
  return (
    <Canvas>
      <Browser />
      <div className="h-[60px] w-[60px]" />
      <NodeServer />
    </Canvas>
  );
};

const SecondFrame = () => {
  return (
    <Canvas>
      <Browser isFullPageLoading />
      <Request />
      <NodeServer />
    </Canvas>
  );
};

const ThirdFrame = () => {
  return (
    <Canvas>
      <Browser isFullPageLoading />
      <div className="h-[60px] w-[60px]" />
      <NodeServer isGenerating />
    </Canvas>
  );
};

const FourthFrame = () => {
  return (
    <Canvas>
      <Browser isFullPageLoading />
      <Response />
      <NodeServer />
    </Canvas>
  );
};

const FifthFrame = () => {
  return (
    <Canvas>
      <Browser initiallyPainted />
      <div className="h-[60px] w-[60px]" />
      <NodeServer />
    </Canvas>
  );
};

export const SSRRequestTimeline = () => {
  return (
    <Timeline
      title="Timeline d'une requête HTTP avec du SSR"
      steps={[
        { node: <FirstFrame />, legend: <Legend>Etat initial</Legend> },
        {
          node: <SecondFrame />,
          legend: (
            <Legend>
              Une requête est émise par le navigateur afin d'afficher une page
              web.
            </Legend>
          ),
        },
        {
          node: <ThirdFrame />,
          legend: (
            <Legend>
              Le serveur reçoit la requête et génère le HTML nécessaire pour
              afficher la page.
            </Legend>
          ),
        },
        {
          node: <FourthFrame />,
          legend: <Legend>Le serveur renvoie le HTML au navigateur.</Legend>,
        },
        {
          node: <FifthFrame />,
          legend: (
            <Legend>
              Le navigateur affiche la page et le site est visible.
            </Legend>
          ),
        },
      ]}
    />
  );
};
