import { Outlet } from "react-router-dom";
import Header from "./Header";

import { useEffect, useState } from "react";
import Modal from "./Model";

export default function AppLayout() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // You can add any side effects or cleanups if needed
  }, []);
  return (
    <>
      <Modal show={showModal} onClose={handleCloseModal} />
      <Header />
      <Outlet />
    </>
  );
}
