import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Store from "./Pages/Store.jsx";
import Community from "./Pages/Community.jsx";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import Footer from "./components/Footer/Footer";
import OnGoingGames from "./Pages/OnGoingGames";
import AllGames from "./Pages/AllGames";
import LatestFeedd from "./Pages/LatestFeed";
import { useState } from "react";
import ModalManager from "./ModalManager";

function App() {
  const [modalOpen, setModal] = useState(false);

  const openModal = event => {
    event.preventDefault();
    const {
      target: {
        dataset: { modal },
      },
    } = event;
    if (modal) setModal(modal);
  };

  const closeModal = () => {
    setModal("");
  };
  return (
    <>
      <BrowserRouter>
        <div className="app--shell" onClick={openModal}>
          <AppNavbar openModal={openModal} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/community" element={<Community />} />
            <Route path="/about" element={<About />} />
            <Route path="/ongoingGames" element={<OnGoingGames />} />
            <Route path="/allGames" element={<AllGames />} />
            <Route path="/latestFeed" element={<LatestFeedd />} />
          </Routes>
          <ModalManager closeFn={closeModal} modal={modalOpen} />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
