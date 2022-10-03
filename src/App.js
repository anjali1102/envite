import { Route, Routes } from "react-router-dom";
import { CreatePage } from "./components/CreatePage/CreatePage";
import { EventPage } from "./components/EventPage/EventPage";
import { HomePage } from "./components/HomePage/HomePage";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </div>
  );
}
