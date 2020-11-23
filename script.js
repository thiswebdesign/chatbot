let customerName = "";
let chosenStage = "";
let vechicleName = "";
let customerEmail = "";
let customerNumber;
let customerEnquiry = "";

// Good afternoon, Welcome to Far2Kleen :D
// Are you interested in any of the following?
function welcomeStage() {
    let chatboxContainer = document.getElementById('chatboxContainer');
    let textContainer = addElement('div', null, null, "textContainer", chatboxContainer);

    let welcomeText = addElement('h2', null, null, null, textContainer);
    welcomeText.innerHTML = "Good afternoon, Welcome to Far2Kleen :D";
    let welcomeText2 = addElement('h2', null, null, null, textContainer);
    welcomeText2.innerHTML = "Are you interested in any of the following?";

    // Buttons to choose service
    let buttonContainer = addElement('div', null, null, 'checkboxContainer', chatboxContainer);
    let button1 = addElement('button', null, 'welcomeButton', 'paintCorrectionButton', buttonContainer);
    button1.innerHTML = 'Paint Correction';
    button1.addEventListener('click', function() {
        getNameStage(this)
    });

    let button2 = addElement('button', null, 'welcomeButton', 'windowCleanButton', buttonContainer);
    button2.innerHTML = 'Window Clean';
    button2.addEventListener('click', function() {
        getNameStage(this)
    });
}

// May I ask you name, please?
function getNameStage(button) {
    chosenStage = button.innerHTML;
    let chatboxContainer = document.getElementById('chatboxContainer');
    
    while(chatboxContainer.firstChild) {
        chatboxContainer.removeChild(chatboxContainer.lastChild);
    }

    let textContainer = addElement('div', null, null, "textContainer", chatboxContainer);
    let nameText = addElement('h2', null, null, null, textContainer);
    nameText.innerHTML = "May I ask your name, please?"

    // Enter name
    let inputNameBox = addElement('input', 'text', null, 'inputNameBox', chatboxContainer);
    inputNameBox.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            if(inputNameBox.value) {
                customerName = inputNameBox.value;
                choseNextStage();
            }
        }
    })
}

// What stage would you like to choose for your paint correction, name?
function choseNextStage() {
    let chatboxContainer = document.getElementById('chatboxContainer');
    
    while(chatboxContainer.firstChild) {
        chatboxContainer.removeChild(chatboxContainer.lastChild);
    }

    let textContainer = addElement('div', null, null, "textContainer", chatboxContainer);
    let nameText = addElement('h2', null, null, null, textContainer);
    nameText.innerHTML = "What stage would you like to choose for your " + chosenStage + ", " + customerName + "?";

    // Buttons to choose next stage
    let buttonContainer = addElement('div', null, null, 'checkboxContainer', chatboxContainer);
    let button1 = addElement('button', null, 'stageButton', 'paintCorrectionButton', buttonContainer);
    button1.innerHTML = 'Stage1';
    button1.addEventListener('click', function() {
        enterVehicle();
    });

    let button2 = addElement('button', null, 'stageButton', 'windowCleanButton', buttonContainer);
    button2.innerHTML = 'Stage2';
    button2.addEventListener('click', function() {
        enterVehicle();
    });
}

// Which vehicle?
function enterVehicle() {
    let chatboxContainer = document.getElementById('chatboxContainer');
    
    while(chatboxContainer.firstChild) {
        chatboxContainer.removeChild(chatboxContainer.lastChild);
    }

    let textContainer = addElement('div', null, null, "textContainer", chatboxContainer);
    let nameText = addElement('h2', null, null, null, textContainer);
    nameText.innerHTML = "Which vehicle?";

    // Enter vechicle name
    let inputVechicleBox = addElement('input', 'text', null, 'inputVechicleBox', chatboxContainer);
    inputVechicleBox.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            if(inputVechicleBox.value) {
                vechicleName = inputVechicleBox.value;
                getPermission();
            }
        }
    })
}

// I need to collect a few contact details to pass on to the team
// By submitting these, you'll be agreeing to the terms of our privacy policy
// Is that ok?
function getPermission() {
    let chatboxContainer = document.getElementById('chatboxContainer');
    
    while(chatboxContainer.firstChild) {
        chatboxContainer.removeChild(chatboxContainer.lastChild);
    }

    let textContainer = addElement('div', null, null, "textContainer", chatboxContainer);
    let nameText = addElement('h2', null, null, null, textContainer);
    nameText.innerHTML = "By submitting this form, you'll be agreeing to the terms of our privacy policy, Is that ok?";

    // Buttons to choose next stage
    // Yes / No
    let buttonContainer = addElement('div', null, null, 'checkboxContainer', chatboxContainer);
    let yesButton = addElement('button', null, 'permissionButton', 'yesButton', buttonContainer);
    yesButton.innerHTML = 'Yes';
    yesButton.addEventListener('click', function() {
        getEmail();
    });

    let noButton = addElement('button', null, 'permissionButton', 'noButton', buttonContainer);
    noButton.innerHTML = 'No';
    noButton.addEventListener('click', function() {
        let nameText = addElement('h2', null, null, null, chatboxContainer);
        nameText.innerHTML = "To move further with your enquiry, you must accept our privacy policy.";
    });
}

// What's the best email address for you, name? / You have to
function getEmail() {
    let chatboxContainer = document.getElementById('chatboxContainer');
    
    while(chatboxContainer.firstChild) {
        chatboxContainer.removeChild(chatboxContainer.lastChild);
    }

    let textContainer = addElement('div', null, null, "textContainer", chatboxContainer);
    let nameText = addElement('h2', null, null, null, textContainer);
    nameText.innerHTML = "What's the best email address for you, " + customerName + "?";

    // Enter email
    let inputEmailBox = addElement('input', 'email', null, 'inputEmailBox', chatboxContainer);
    inputEmailBox.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            if(inputEmailBox.value) {
                customerEmail = inputEmailBox.value;
                getNumber();
            }
        }
    })
}
// and the best number to reach you on?
function getNumber() {
    let chatboxContainer = document.getElementById('chatboxContainer');
    
    while(chatboxContainer.firstChild) {
        chatboxContainer.removeChild(chatboxContainer.lastChild);
    }

    let textContainer = addElement('div', null, null, "textContainer", chatboxContainer);
    let nameText = addElement('h2', null, null, null, textContainer);
    nameText.innerHTML = "and the best number to reach you on?";

    // Enter number
    let inputNumberBox = addElement('input', 'tel', null, 'inputNumberBox', chatboxContainer);
    inputNumberBox.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            if(inputNumberBox.value) {
                customerNumber = inputNumberBox.value;
                getEnquiry();
            }
        }
    })
}

function getEnquiry() {
    let chatboxContainer = document.getElementById('chatboxContainer');
    
    while(chatboxContainer.firstChild) {
        chatboxContainer.removeChild(chatboxContainer.lastChild);
    }

    let textContainer = addElement('div', null, null, "textContainer", chatboxContainer);
    let enquiryText = addElement('h2', null, null, null, textContainer);
    enquiryText.innerHTML = "Please fill in the details of your enquiry below";

    // Enter enquiry
    let inputEnquiryBox = addElement('textarea', null, null, 'inputNumberBox', chatboxContainer);
    inputEnquiryBox.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            if(inputEnquiryBox.value) {
                customerEnquiry = inputEnquiryBox.value;
                submitEnquiry();
            }
        }
    })
}

function submitEnquiry() {
    let chatboxContainer = document.getElementById('chatboxContainer');
    
    while(chatboxContainer.firstChild) {
        chatboxContainer.removeChild(chatboxContainer.lastChild);
    }

    let textContainer = addElement('div', null, null, "textContainer", chatboxContainer);
    let enquiryText = addElement('h2', null, null, null, textContainer);
    enquiryText.innerHTML = "Thanks for you patience, name. A member of the team will be in touch with you shortly. Have a nice day :D";

    //Send details for email
    console.log(customerName, chosenStage, vechicleName, customerEmail, customerNumber, customerEnquiry);
}


// Helper Functions
function addElement(div, type, className, id, appendTo) {
    let newElement = document.createElement(div);
    
    if(type) {
        newElement.type = type;
    }

    if(className) {
        newElement.className = className;
    }

    if(id) {
        newElement.id = id;
    }
    
    appendTo.appendChild(newElement);
    return newElement;
}

// Start
welcomeStage();