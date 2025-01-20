"use client";

interface ToggleProps {
  isToggleOn: boolean;
  setIsToggleOn: React.Dispatch<React.SetStateAction<boolean>>;
}
const Toggle = ({ isToggleOn, setIsToggleOn }: ToggleProps) => {
  return (
    <div
      className="flex flex-row items-center cursor-pointer"
      onClick={() => setIsToggleOn(!isToggleOn)}
    >
      <div
        className={`transition-all duration-300 border-solid border-[1px] border-Grey-300 relative w-[49px] h-[28px] rounded-[14px] shadow-[0_0_12.7px_0_rgba(175,176,187,0.31)] ${
          isToggleOn ? "bg-Pale_Blue_2" : "bg-Grey-200"
        }`}
      >
        <div
          className={`transition-all duration-300 absolute w-5 h-5 top-[3.5px] left-[4px] rounded-full ${
            isToggleOn
              ? "translate-x-5 bg-Main_Blue"
              : "translate-x-0 bg-Grey-400 "
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
