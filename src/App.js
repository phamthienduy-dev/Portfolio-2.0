import React, { useState } from "react";
import "./App.css";
import { useInView } from "react-intersection-observer";
import ReactModal from "react-modal";

import Modal from "./Modal/Modal";
import NavBar from "./sections/HeroSection/NavBar";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ProjectSection from "./sections/ProjectSection/ProjectSection";
import CTASection from "./sections/CTASection/CTASection";
import Footer from "./sections/Footer/Footer";

ReactModal.setAppElement("#root");
function App() {
  const [showModal, setShowModal] = useState(false);

  const [vietnamese, setVietnamese] = useState(true);
  const { ref, inView } = useInView({
    rootMargin: "-72px 0px 0px 0px",
    threshold: 0.4,
  });

  if (vietnamese) {
    document.title = "Xin chào, mình là Duy!";
  } else {
    document.title = "Hi I am Duy!";
  }

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <ReactModal
        isOpen={showModal}
        parentSelector={() => document.querySelector("#nav")}
        className="modal"
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModalHandler}
        overlayClassName="overlay"
      >
        <Modal onCloseModal={closeModalHandler} vietnamese={vietnamese} />
      </ReactModal>
      <div className="h-full pt-8 dark:bg-gray-900" id="app">
        <NavBar
          ref={ref}
          vietnamese={vietnamese}
          setVietnamese={setVietnamese}
          inView={inView}
        />
        <HeroSection vietnamese={vietnamese} setVietnamese={setVietnamese} />
        <AboutSection vietnamese={vietnamese} />
        <ProjectSection vietnamese={vietnamese} />
        <CTASection vietnamese={vietnamese} setShowModal={setShowModal} />
        <Footer vietnamese={vietnamese} setVietnamese={setVietnamese} />
      </div>
    </>
  );
}

export default App;
