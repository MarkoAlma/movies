import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import SearchPage from "./pages/SearchPage";
import MyLayout from "./components/MyLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MyLayout/>} >
          <Route path="/" element={<Movies />} />
          <Route path="/tvseries" element={<TVSeries />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
