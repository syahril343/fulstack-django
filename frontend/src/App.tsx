import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page
import HomePage from "./pages/Home";
import ExplorePage from "./pages/Explore";
import SavedPage from "./pages/Saved";
import DetailMenu from "./pages/DetailMenu";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/detail-menu" element={<DetailMenu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
