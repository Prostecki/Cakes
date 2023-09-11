import React, { useState } from 'react';

function Appearmodal() {

    // //declare modal window in constant variable for all functions
    // const modalSent = document.querySelector('.sentModal');

    // //Change opacity = 1
    // modalSent.style.opacity = '1';
    // modalSent.style.transition = 'all 0.7s ease-in-out';
    // //Change default z-index to upper than early, for visible
    // modalSent.style.zIndex = '10';

    // //declare variable closeModal for closing modal after sending values
    // let closeModal = document.getElementById('closeBtn');

    // //During click to button, we change modal's style display to 'none'
    // closeModal.addEventListener('click', ()=> {
    //     modalSent.style.display = 'none';
    // });

    // //During click to any place, we change modal's style display to 'none'
    // window.addEventListener('click', (event)=> {
    //     if (event.target === modalSent) {
    //         modalSent.style.transition = 'all 0.7s ease-in-out';
    //         modalSent.style.display = 'none';
    //     }
    // })
    
    const ModalComponent = ({ isOpen, closeModal }) => {
        if(!isOpen) {
            return null; //if modal window isn't open, nothing to rendering
        }
    }

    return (
        <div className="sentModal dispNone">
            <div className="modalWindow">
                <div className="textSent">Success!</div>
                <p>We'll get in touch with you soon.</p>
                <button id="closeBtn" onClick={() => closeModal(false)}>Close</button>
            </div>
        </div>
    );
}

export default Appearmodal;