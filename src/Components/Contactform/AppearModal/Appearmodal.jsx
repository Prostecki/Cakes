function Appearmodal() {

    //Change opacity = 1
    modalSent.style.opacity = '1';
    modalSent.style.transition = 'all 0.7s ease-in-out';
    //Change default z-index to upper than early, for visible
    modalSent.style.zIndex = '10';

    //declare variable closeModal for closing modal after sending values
    let closeModal = document.getElementById('closeBtn');

    //During click to button, we change modal's style display to 'none'
    closeModal.addEventListener('click', ()=> {
        modalSent.style.display = 'none';
    });

    //During click to any place, we change modal's style display to 'none'
    window.addEventListener('click', (event)=> {
        if (event.target === modalSent) {
            modalSent.style.transition = 'all 0.7s ease-in-out';
            modalSent.style.display = 'none';
        }
    })
    
    return (
        <div className="sentModal dispNone">
                <div className="modalWindow">
                    <div className="textSent">Success!</div>
                    <p>We get in touch with you soon.</p>
                    <button id="closeBtn">Close</button>
                </div>
            </div>
    );
}

export default Appearmodal;