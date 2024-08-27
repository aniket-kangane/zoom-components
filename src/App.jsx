import CoPilot from "./components/Co-Pilot";
import Question from "./components/Question";
import QuestionType from "./components/QuestionType";
import ResizeButton from "./components/ResizeButton";

const questions = [
  {
    id: 1,
    isAnswered: true,
    isCurrent: true,
    question: "How do you currently handle lead segmentation and nurturing?",
    answer:
      "Finally, integrating the lead management system with other tools and platforms, such as CRM systems, marketing automation software, and analytics tools, poses its own set of difficulties. Poor integration can result in fragmented data and disjointed processes, further hindering the effectiveness of lead management efforts.",
    askTo: "John doe",
    critical: true,
    duration: 12,
  },
  {
    id: 2,
    isAnswered: false,
    isCurrent: false,
    question: "How do you currently handle lead segmentation and nurturing?",
    answer:
      "ta and disjointed processes, further hindering the effectiveness of lead management efforts.",
    askTo: "Jane smith",
    critical: false,
    duration: 5,
  },
];

const App = () => {
  return (
    <div className="bg-[linear-gradient(337.42deg,_#241620_-4.36%,_#00A862_121.88%)]">
      <div className="w-[90vw] md:w-[40vw] mx-auto space-y-8 min-h-screen py-8">
        <div className="flex items-center gap-5">
          <QuestionType isCurrent={true} type={"critical"} />
          <QuestionType isCurrent={false} type={"followup"} />
          <QuestionType isCurrent={true} type={"critical"} />
          <QuestionType isCurrent={false} type={"followup"} />
        </div>
        <ResizeButton isMinimised={true} />
        <ResizeButton isMinimised={false} />
        <CoPilot />
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </div>
    </div>
  );
};

export default App;
