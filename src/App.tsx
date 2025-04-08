import { Routes, Route } from "react-router-dom";
import Inbox from "./pages/Inbox";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inbox />} />
    </Routes>
  );
}
