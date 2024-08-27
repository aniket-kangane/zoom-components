import { useEffect, useRef, useState } from "react";

const QuestionTimer = ({ time }) => {
  const [timer, setTimer] = useState();
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((preTimer) => preTimer + 1);
    }, 1000 * 60);
  }, []);
  return (
    <div>
      <span>{time}</span>
    </div>
  );
};

export default QuestionTimer;
