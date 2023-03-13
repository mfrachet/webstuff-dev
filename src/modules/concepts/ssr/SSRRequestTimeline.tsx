import Browser from "../../../components/Browser";
import NodeServer from "../../../components/NodejsServer";
import { Canvas, Request, Response } from "../../../components/TechStack";
import Timeline, { Legend } from "../../../components/Timeline";

const FirstFrame = () => {
  return (
    <Canvas>
      <Browser />
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
      <NodeServer />
    </Canvas>
  );
};

export const SSRRequestTimeline = () => {
  return (
    <Timeline
      title="Timeline d'une requete HTTP avec du SSR"
      steps={[
        { node: <FirstFrame />, legend: <Legend>Etat initial</Legend> },
        {
          node: <SecondFrame />,
          legend: (
            <Legend>
              Une requete est emise par le navigateur afin d'afficher une page
              web.
            </Legend>
          ),
        },
        {
          node: <ThirdFrame />,
          legend: (
            <Legend>
              Le serveur recoit la requete et genere le HTML necessaire pour
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
