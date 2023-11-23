import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  required?: boolean;
}
const InputForm = ({ children, required }: Props) => {
  return (
    <>
      {required && <span style={{ color: "red" }}>* </span>}
      {children}
    </>
  );
};

export default InputForm;
