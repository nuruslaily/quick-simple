import { Routes, Route } from "react-router-dom";
import Inbox from "./pages/Inbox";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inbox" element={<Inbox />} />
    </Routes>
  );
}
