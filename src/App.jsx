import { useState } from 'react';
import { Modal } from 'react-modal-sabrinamouginot';
import 'react-modal-sabrinamouginot/dist/style.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Using My Modal Library with Vite</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>This is a modal!</h2>
      </Modal>
    </div>
  );
}

export default App;
