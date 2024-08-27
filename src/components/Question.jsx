import { useState } from "react";
import QuestionType from "./QuestionType";

const Question = ({
  askTo,
  question,
  isAnswered,
  answer = "",
  critical,
  isCurrent,
  duration,
}) => {
  const [showFullAnswer, setShowFullAnswer] = useState(false);

  const trimAnswer = (text) => {
    if (text.length < 100 || showFullAnswer) {
      return text;
    }
    return text.slice(0, 100) + " . . . . .";
  };

  const handleReadMoreClick = () => {
    setShowFullAnswer(!showFullAnswer);
  };

  return (
    <div className="text-white space-y-3 pb-8 border-b border-b-[#AAEDD1]">
      <div className="flex justify-end">
        <QuestionType
          type={critical ? "critical" : "follow-up"}
          isCurrent={isCurrent}
        />
      </div>
      <div
        className={`rounded-[20px] p-4 space-y-2 ${
          isCurrent ? "border-2 border-[#FFF9D3]" : ""
        }`}
      >
        <span className="text-[10px] uppercase">TO {askTo}</span>
        <div className="text-[#FFF9D3] flex items-start gap-4 text-xl">
          <img className="mt-1" src="/question-white.svg" alt="Question Icon" />
          <p>{question}</p>
        </div>
        <div className="flex items-start gap-4">
          <img className="mt-1" src="/arrow-white.svg" alt="Answer Icon" />
          {isAnswered ? (
            <p className="border-t w-full">{trimAnswer(answer)}</p>
          ) : (
            <span className="text-[#A1A6A6]">Yet to be answered</span>
          )}
        </div>
        <div className="flex items-center justify-between pl-7 text-[10px] text-[#FFF9D3]">
          <div>
            {answer.length > 100 && (
              <span
                onClick={handleReadMoreClick}
                className="underline underline-offset-4 cursor-pointer"
              >
                {showFullAnswer ? "Read less -" : "Read more +"}
              </span>
            )}
          </div>
          <span>~{duration} mins</span>
        </div>
      </div>
    </div>
  );
};

export default Question;
