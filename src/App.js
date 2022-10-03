import { Route, Routes } from "react-router-dom";
import { CreateEventPage } from "./components/CreateEventPage/CreateEventPage";
import { EventPage } from "./components/EventPage/EventPage";
import { HomePage } from "./components/HomePage/HomePage";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </div>
  );
}
