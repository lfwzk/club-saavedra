import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/Landing";
import { Club } from "./pages/Club";
import { History } from "./pages/History";
import { School } from "./pages/School";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/club" element={<Club />} />
        <Route path="/historia" element={<History />} />
        <Route path="/escuela" element={<School />} />
      </Routes>
    </>
  );
}

export default App;
