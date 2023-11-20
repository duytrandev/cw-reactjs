import { ReactNode } from "react";

export interface IPrivateRouteProps {
  children: ReactNode
}

export default function PrivateRoute (props: IPrivateRouteProps) {
  return (
    <>
      <div>
        private route
      </div>
      {props.children}
    </>
  );
}
