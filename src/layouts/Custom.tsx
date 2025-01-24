import { ReactNode } from "react";
import CustomBreadcrum from "../components/CustomBreadcrum";

interface IProps {
  children: ReactNode;
}

const CustomLayout = ({ children }: IProps) => {
  return (
    <section className="space-y-4">
      <CustomBreadcrum />
      <div>{children}</div>
    </section>
  );
};

export default CustomLayout;
