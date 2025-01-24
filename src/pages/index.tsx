import { NavLink } from "react-router";

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <p>This is the home page</p>
      <NavLink
        className="border rounded-lg border-gray-6 px-4 py-2"
        to="/clinical-management/OPD/new-patients"
      >
        Navigate to OPD Management Page.
      </NavLink>
    </div>
  );
};

export default HomePage;
