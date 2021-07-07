import React, { useContext } from 'react';
import { ModalContext } from '../Layout/Layout';
import './Modal.css';
import Deposit from '../Deposit/Deposit';
import BetInput from '../BetInput/BetInput';
import Withdraw from '../Withdraw/Withdraw';
const Modal = () => {
    const [open, setOpen] = useContext(ModalContext)
    var modal = document.getElementById("myModal");
    const closeModal = (props) => setOpen({display: 'none'});
    window.onclick = function(event) {
        if (event.target.innerText === 'Withdraw') {
            setOpen({display: 'block', component:'Withdraw'});
        }
      if (event.target === modal) {
        if (open.display === 'block') {
            setOpen({display: 'none'});
        }
      }
    }
    return (
        <div>
            <div id="myModal" style={open} class="modal">
                <div class="modal-content">
                    <span onClick={closeModal} class="close">&times;</span>
                    {open.component === 'deposit' && <Deposit transaction ='deposit' />}
                    {open.component === 'bet' && <BetInput/>}
                    {open.component === 'Withdraw' && <Deposit transaction ='withdraw'/>}
                </div>
            </div>
        </div>
    );
};

export default Modal;