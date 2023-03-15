import react from "react";
import Modal from "./Modal";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "./Context";

function App() {
  const { setSidebarOpen, setModalOpen } = useGlobalContext();

  return (
    <main>
      <FaBars
        className="ham"
        onClick={() => {
          setSidebarOpen(true);
        }}
      />
      <Modal />
      <Sidebar />
      <button
        className="btn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        show Modal
      </button>
    </main>
  );
}

export default App;
