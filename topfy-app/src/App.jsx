import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome/Welcome";
import TagSelect from "./Pages/TagSelect/TagSelect";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <main>
      <div className="App">
        <Routes>
          <Route index path="/" element={<Welcome />} />
          <Route path="/tagselect" element={<TagSelect />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
