import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import TechnicalSkills from "@/pages/TechnicalSkills";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<TechnicalSkills />} />
    </Routes>
  );
}
