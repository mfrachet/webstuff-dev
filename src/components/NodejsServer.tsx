import { IconLoader } from "./icons/IconLoader";
import { IconServer } from "./icons/IconServer";

export interface NodejsServerProps {
  isGenerating?: boolean;
}

export default function NodejsServer({ isGenerating }: NodejsServerProps) {
  return (
    <div className="flex flex-col gap-2 w-full md:w-48 rounded-lg items-center justify-center border border-gray-200 h-60 relative">
      <div className="flex flex-col items-center">
        <IconServer className={`text-6xl `} />
        <div className="text-xs">Node.js server</div>
      </div>

      <div className="flex flex-col items-center absolute bottom-6">
        {isGenerating && (
          <>
            <IconLoader className="animate-spin text-2xl" />
            <div className="text-xs">Generation du HTML</div>
          </>
        )}
      </div>
    </div>
  );
}
