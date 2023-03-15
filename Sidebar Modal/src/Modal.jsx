import { FaWindowClose } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Modal = () => {
  const { modalOpen, setModalOpen } = useGlobalContext();

  return (
    <div className={`${modalOpen ? " overlay-active" : "overlay"}`}>
      <div className="modal">
        <FaWindowClose
          className="close "
          onClick={() => {
            setModalOpen(false);
          }}
        />
        <h2 className="title">Modal Content</h2>
      </div>
    </div>
  );
};

export default Modal;
