import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";

//pages
import Home from "./page/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
