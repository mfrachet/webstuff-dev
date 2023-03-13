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

const SixthFrame = () => {
  return (
    <Canvas>
      <Browser initiallyPainted />
      <NodeServer />
    </Canvas>
  );
};

const SeventhFrame = () => {
  return (
    <Canvas>
      <Browser initiallyPainted />
      <NodeServer />
    </Canvas>
  );
};

const EighthFrame = () => {
  return (
    <Canvas>
      <Browser initiallyPainted />
      <NodeServer />
    </Canvas>
  );
};

const NinethFrame = () => {
  return (
    <Canvas>
      <Browser initiallyPainted hydrated />
      <NodeServer />
    </Canvas>
  );
};

export const AppStartTimeline = () => {
  return (
    <Timeline
      title="Timeline d'une requête HTTP avec du SSR et interactivité dans le navigateur"
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
        {
          node: <SixthFrame />,
          legend: (
            <Legend>
              Le navigateur charge les <code>script</code> présents dans le code
              en tache de fond.
            </Legend>
          ),
        },
        {
          node: <SeventhFrame />,
          legend: (
            <Legend>
              Le navigateur exécute ensuite ces scripts en tache de fond.
            </Legend>
          ),
        },
        {
          node: <EighthFrame />,
          legend: (
            <Legend>
              Lors de l'exécution des scripts, l'application est démarrée.
            </Legend>
          ),
        },
        {
          node: <NinethFrame />,
          legend: (
            <Legend>
              Une fois l'application démarrée, la page est interactive.
            </Legend>
          ),
        },
      ]}
    />
  );
};
