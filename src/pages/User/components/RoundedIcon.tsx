import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
const RoundedIcon = ({ disabled = false, icon, onClick }: Props) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick} className="week-btn">
        {icon}
      </button>
    </>
  );
};

export default RoundedIcon;
