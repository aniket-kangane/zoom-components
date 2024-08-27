import { useEffect, useRef, useState } from "react";

const QuestionTimer = ({ duration }) => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((preTimer) => preTimer + 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const styles =
    timer > duration
      ? "bg-[#FF4157] text-white"
      : timer >= duration - 2
      ? "bg-[#FFDF22] text-[#004327]"
      : "text-[#A1A6A6]";

  return (
    <div className={`p-1 rounded-[10px] font-bold ${styles}`}>
      ~ {duration} <span>mins</span>{" "}
    </div>
  );
};

export default QuestionTimer;
