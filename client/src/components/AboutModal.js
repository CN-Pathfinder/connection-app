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
          <button className="modal-button" onClick={openModal}>About App</button>
          <Modal id="fullModalDiv"
            isOpen={modalIsOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="bigmodaldiv">
            <button id="modalCloseBtn" onClick={closeModal}>X</button>
            <div id="modalTitle">About the app</div>
            <div id="modalText">This app is to connect people that want to provide help for others during lockdown. <br/>
            To use, register and login.
            <br>
            </br>
            <br/> 
            What is it?
            <br>
            </br>
            <br/> 
Anyone can volunteer. It can be very rewarding and is a great way to:

meet new people
gain new or use existing skills
get experience
make a big difference to your community
There are lots of easy ways to give your time to help others – from having a cup of tea with an elderly neighbour, to helping out in your local area or making a regular commitment to volunteer with a charity or community group.


            </div>
            </div>
          </Modal>
        </div>
      );
  }
   
  export default AboutModal;