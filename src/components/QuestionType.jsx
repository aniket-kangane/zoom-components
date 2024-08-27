const QuestionType = ({ isCurrent, type }) => {
  const isCritical = type === "critical";
  const iconSrc = isCritical ? "/fire.svg" : "/flag.svg";
  const text = isCritical ? "Critical" : "Follow up";

  // Determine styles based on type
  const bgColor = isCurrent ? "bg-[#FFF9D380]" : "";
  const textColor = isCritical ? "text-[#B62020]" : "text-white";
  const borderColor = isCurrent
    ? ""
    : isCritical
    ? "border border-[#B62020]"
    : "border border-white";

  return (
    <div
      className={`text-[10px] flex items-center gap-1 rounded-[12px] w-fit px-2 py-1 uppercase font-bold ${bgColor} ${textColor} ${borderColor}`}
    >
      <img src={iconSrc} alt={text} aria-label={text} />
      <span>{text}</span>
    </div>
  );
};

export default QuestionType;
