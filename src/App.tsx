import "./App.css";
import HomePage from "./pages";
import OpdManagement from "./pages/OpdManagement";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route
        path="/clinical-management/OPD/new-patients"
        element={<OpdManagement />}
      />
    </Routes>
  );
}

export default App;
