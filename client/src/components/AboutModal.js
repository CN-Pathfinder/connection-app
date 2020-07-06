import React from 'react';
import Modal from 'react-modal';
import './AboutModal.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'    
    }
  };

  function AboutModal(){
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    // function afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    // }
   
    function closeModal(){
      setIsOpen(false);
    }
   
      return (
        <div>
          <button onClick={openModal}>About App</button>
          <Modal  id="fullModalDiv"
            isOpen={modalIsOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <button id="modalCloseBtn" onClick={closeModal}>X</button>
            <div id="modalTitle">About the app</div>
            <div id="modalText">This app is to connect people that want to provide help for others during lockdown. <br/>
            To use, register and login.



            </div>
          </Modal>
        </div>
      );
  }
   
  export default AboutModal;