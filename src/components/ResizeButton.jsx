const ResizeButton = ({ onClick, isMinimised }) => {
  const iconSrc = !isMinimised ? "/minimize.svg" : "/maximize.svg";
  return (
    <button
      onClick={onClick}
      className="hover:bg-[#EBFFF680] rounded w-8 h-8 flex items-center justify-center duration-150"
    >
      <img src={iconSrc} alt="" />
    </button>
  );
};

export default ResizeButton;
