import { useState } from "react";
import ResizeButton from "./ResizeButton";

const CoPilot = () => {
  const [isMaximised, setIsMaximised] = useState(false);

  const handleSwitch = () => {
    setIsMaximised((preState) => !preState);
  };

  return (
    <div className="bg-[linear-gradient(90.42deg,_rgba(255,255,255,0.6)_0%,_rgba(220,255,239,0.48)_100%)] rounded-3xl p-4 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-3 font-bold text-2xl text-[#004327]">
          <img src="/stars.svg" alt="" />
          <div>
            <p>Co-Pilot</p>
            <p className="text-xs uppercase">objection detected</p>
          </div>
        </div>
        <ResizeButton onClick={handleSwitch} isMinimised={!isMaximised} />
      </div>
      {isMaximised ? (
        <div className="space-y-3 bg-white p-4 rounded-[20px]  text-[#193133]">
          <div className="flex items-start gap-4">
            <img src="/question.svg" alt="" />
            <p className="opacity-80">
              What integrations with other software systems do you support?
            </p>
          </div>
          <div className="flex items-start gap-8">
            <img src="/arrow.svg" alt="" />
            <ul className="list-disc font-medium text-xl">
              <li>Our integration specialist can provide details. </li>
              <li>Something similar happened with...</li>
              <li>Link- Integrations list</li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CoPilot;