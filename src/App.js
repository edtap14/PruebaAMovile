import React, {useState} from "react";
import style from './App.module.css'
import Modal from "./Modal/Modal";
import ModalContent from "./ModalContent/ModalContent";



function App() {
  const [active, setActive] = useState(false)
  const toggle = () => {
    setActive(!active)
  }
  return (
    <div className={style.divGeneral}>
      <button onClick={toggle}>Mostrar EPG</button>
      <Modal active={active} toggle={toggle}>
        <ModalContent />
      </Modal>
    </div>
  );
}

export default App;
