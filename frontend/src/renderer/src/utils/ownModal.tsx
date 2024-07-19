import Modal from 'react-modal';

const OwnModal = ({ isOpen, onRequestClose, children }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      height: '300px',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      background: '#022c22',
      border: '#000',
      color: '#22c55e',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '1000',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Ejemplo de Modal"
    >
      {children}
    </Modal>
  );
};

export default OwnModal;
