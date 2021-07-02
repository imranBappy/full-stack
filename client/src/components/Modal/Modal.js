import React, { useContext } from 'react';
import { ModalContext } from '../Layout/Layout';
import './Modal.css';
import Deposit from '../Deposit/Deposit';
const Modal = () => {
    const [open, setOpen] = useContext(ModalContext)
    var modal = document.getElementById("myModal");
    const closeModal = () => setOpen({display: 'none'});
    window.onclick = function(event) {
      if (event.target === modal) {
        setOpen({display: 'none'});
      }
    }

    return (
        <div>
            <div id="myModal" style={open} class="modal">
                <div class="modal-content">
                    <span onClick={closeModal} class="close">&times;</span>
                    <Deposit/>
                </div>
            </div>
        </div>
    );
};

export default Modal;