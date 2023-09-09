function Feedback () {

    const sendRequest = (text) => {
        //create array whose can send request
        let requestObj = new XMLHttpRequest();
    
        //create link for request
        let link = 'https://api.telegram.org/bot5658228438:AAFGjijllq5VE3ZI8w-ezPabGtEqVKd8Mjo/sendMessage?chat_id=1750693728&text=' + text;
    
        console.log(link);
    
        //Configure object
        requestObj.open('GET', link, false);
            
        //Send request
        requestObj.send();
    
        //Output to console
        console.log('Sent');
    };

    const sendToTelega = () => {

        //declare input name
        let name = document.getElementById('typeYourName').value;
        //declare input email
        let email = document.getElementById('typeYourEmail').value;
        //declaer input message
        let message = document.getElementById('message').value;
    
        if (name === '') {
            alert('Please, enter your name!');
            //stop a function
            return;
        } else if (email === '') {
            alert('Please, enter your email!');
            //stop a function
            return;
        } else if (message === '') {
            alert('Please, enter your message!');
            //stop a function
            return;
        };
    
        // Validate email using regular expression
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address!');
                return;
      }
    
        //declare template for telegram message:
        let text = 'Message from ' + name + ' with adress ' + email + ': ' + message;
    
        //check text on console
        console.log(text);
    
        //function, which created below
        sendRequest(text);
    
        modalSent.style.transition = 'all 0.7s ease-in-out';
        modalSent.style.display = 'flex';
    
        //function, which creates a modal window after success request sending
        appearModal();
    
        //Clear inputs
        document.getElementById('typeYourName').value = '';
        document.getElementById('typeYourEmail').value = '';
        document.getElementById('message').value = '';
    
    };

    return (
        <div className="containerForm">
            <div id="formView" className="flex-box-column" method="post">
                <div>
                    <label htmlFor="typeYourName">Name</label>
                    <input id="typeYourName" type="text" name="name" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="typeYourEmail">Email</label>
                    <input id="typeYourEmail" type="email" placeholder="Write your e-mail" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" type="text" maxLength="5000" placeholder="Write your message"></textarea>
                </div>
                
                <button className="btnSend" id="submitButton" onClick={sendToTelega}>
                    <span className="hitMeBtn">Hit me up!</span>
                </button>
            </div>
        </div>
  );
};

export default Feedback;