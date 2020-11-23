let customerName = "";
let chosenStage = "";
let optionStage = "";
let vechicleName = "";
let customerEmail = "";
let customerNumber;
let customerEnquiry = "";

function welcomeStage() {
    let chatboxContainer = document.getElementById('chatboxContainer');
    let textContainer = addElement('div', null, null, "textContainer", chatboxContainer);

    let welcomeText = addElement('h2', null, null, null, textContainer);
    welcomeText.innerHTML = "Good afternoon, Welcome to Far2Kleen :D";
    let welcomeText2 = addElement('h2', null, null, null, textContainer);
    welcomeText2.innerHTML = "Are you interested in any of the following?";

    // Buttons to choose service
    let buttonContainer = addElement('div', null, null, 'checkboxContainer', chatboxContainer);
    let detailingButton = addElement('button', null, 'welcomeButton', 'detailingButton', buttonContainer);
    detailingButton.innerHTML = 'Detailing';
    detailingButton.addEventListener('click', function() {
        getNameStage(this)
    });

    let paintCorrectionButton = addElement('button', null, 'welcomeButton', 'paintCorrectionButton', buttonContainer);
    paintCorrectionButton.innerHTML = 'Paint Correction';
    paintCorrectionButton.addEventListener('click', function() {
        getNameStage(this)
    });

    let ceramicCoatingsButtons = addElement('button', null, 'welcomeButton', 'ceramicCoatingsButtons', buttonContainer);
    ceramicCoatingsButtons.innerHTML = 'Ceramic Coatings';
    ceramicCoatingsButtons.addEventListener('click', function() {
        getNameStage(this)
    });

    let wrappingPPFTintingButton = addElement('button', null, 'welcomeButton', 'wrappingPPFTintingButton', buttonContainer);
    wrappingPPFTintingButton.innerHTML = 'Wrapping/ PPF/ Tinting';
    wrappingPPFTintingButton.addEventListener('click', function() {
        getNameStage(this)
    });

    let remappingAndPerformanceButton = addElement('button', null, 'welcomeButton', 'remappingAndPerformanceButton', buttonContainer);
    remappingAndPerformanceButton.innerHTML = 'Remapping & Performance Parts';
    remappingAndPerformanceButton.addEventListener('click', function() {
        getNameStage(this)
    });

    let airliftAndAcuairButton = addElement('button', null, 'welcomeButton', 'airliftAndAcuairButton', buttonContainer);
    airliftAndAcuairButton.innerHTML = 'Airlift And Acuair';
    airliftAndAcuairButton.addEventListener('click', function() {
        getNameStage(this)
    });
    
    let servicingAndTyresButton = addElement('button', null, 'welcomeButton', 'servicingAndTyresButton', buttonContainer);
    servicingAndTyresButton.innerHTML = 'Servicing and Tyres Button';
    servicingAndTyresButton.addEventListener('click', function() {
        getNameStage(this)
    });

    let accidentRepairButton = addElement('button', null, 'welcomeButton', 'accidentRepairButton', buttonContainer);
    accidentRepairButton.innerHTML = 'Accident Repair';
    accidentRepairButton.addEventListener('click', function() {
        getNameStage(this)
    });

    let shopOurProductsButton = addElement('button', null, 'welcomeButton', 'shopOurProductsButton', buttonContainer);
    shopOurProductsButton.innerHTML = 'Shop Our Products';
    shopOurProductsButton.addEventListener('click', function() {
        window.location.href = 'https://f2kcare.com';
    });

    let sendGeneralEnquiryButton = addElement('button', null, 'welcomeButton', 'sendGeneralEnquiryButton', buttonContainer);
    sendGeneralEnquiryButton.innerHTML = 'Send a General Enquiry';
    sendGeneralEnquiryButton.addEventListener('click', function() {
        getNameStage(this)
    });
}

function getNameStage(button) {
    chosenStage = button.innerHTML;
    let chatboxContainer = document.getElementById('chatboxContainer');

    clearStageShowText(chatboxContainer, "May I ask your name, please?");

    // Enter name
    let inputNameBox = addElement('input', 'text', null, 'inputNameBox', chatboxContainer);
    inputNameBox.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            if(inputNameBox.value) {
                customerName = inputNameBox.value;
                if(chosenStage != 'Airlift And Acuair' || chosenStage != 'Send a General Enquiry') {
                    choseNextStage();
                } else if(chosenStage == 'Airlift And Acuair') {
                    enterVehicle();
                } else if(chosenStage == 'Send a General Enquiry') {
                    getPermission();
                }
            }
        }
    })
}

function choseNextStage() {
    let chatboxContainer = document.getElementById('chatboxContainer');

    clearStageShowText(chatboxContainer, "What stage would you like to choose for your " + chosenStage + ", " + customerName + "?");

    if(chosenStage == 'Detailing') {
        let buttonContainer = addElement('div', null, null, 'checkboxContainer', chatboxContainer);

        let button1 = addElement('button', null, 'stageButton', null, buttonContainer);
        button1.innerHTML = 'General Detailing';
        button1.addEventListener('click', function() {
            optionStage = button1.innerHTML;
            enterVehicle();
        });

        let button2 = addElement('button', null, 'stageButton', null, buttonContainer);
        button2.innerHTML = 'Exterior Detailing';
        button2.addEventListener('click', function() {
            optionStage = button2.innerHTML;
            enterVehicle();
        });

        let button3 = addElement('button', null, 'stageButton', null, buttonContainer);
        button3.innerHTML = 'Interior Detailing';
        button3.addEventListener('click', function() {
            optionStage = button3.innerHTML;
            enterVehicle();
        });

        let button4 = addElement('button', null, 'stageButton', null, buttonContainer);
        button4.innerHTML = 'Not sure! I need some advice';
        button4.addEventListener('click', function() {
            optionStage = button4.innerHTML;
            enterVehicle();
        });
    }

    if(chosenStage == 'Paint Correction') {
        let buttonContainer = addElement('div', null, null, 'checkboxContainer', chatboxContainer);

        let button1 = addElement('button', null, 'stageButton', null, buttonContainer);
        button1.innerHTML = 'Single stage';
        button1.addEventListener('click', function() {
            optionStage = button1.innerHTML;
            enterVehicle();
        });

        let button2 = addElement('button', null, 'stageButton', null, buttonContainer);
        button2.innerHTML = 'Two stage';
        button2.addEventListener('click', function() {
            optionStage = button2.innerHTML;
            enterVehicle();
        });

        let button3 = addElement('button', null, 'stageButton', null, buttonContainer);
        button3.innerHTML = 'Three stage';
        button3.addEventListener('click', function() {
            optionStage = button3.innerHTML;
            enterVehicle();
        });

        let button4 = addElement('button', null, 'stageButton', null, buttonContainer);
        button4.innerHTML = 'Wet sand & multi stage';
        button4.addEventListener('click', function() {
            optionStage = button4.innerHTML;
            enterVehicle();
        });

        let button5 = addElement('button', null, 'stageButton', null, buttonContainer);
        button5.innerHTML = 'Not sure! I need some advice';
        button5.addEventListener('click', function() {
            optionStage = button5.innerHTML;
            enterVehicle();
        });
    }

    if(chosenStage == 'Ceramic Coatings') {
        let buttonContainer = addElement('div', null, null, 'checkboxContainer', chatboxContainer);

        let button1 = addElement('button', null, 'stageButton', null, buttonContainer);
        button1.innerHTML = 'Bronze package';
        button1.addEventListener('click', function() {
            optionStage = button1.innerHTML;
            enterVehicle();
        });

        let button2 = addElement('button', null, 'stageButton', null, buttonContainer);
        button2.innerHTML = 'Silver package';
        button2.addEventListener('click', function() {
            optionStage = button2.innerHTML;
            enterVehicle();
        });

        let button3 = addElement('button', null, 'stageButton', null, buttonContainer);
        button3.innerHTML = 'Gold package';
        button3.addEventListener('click', function() {
            optionStage = button3.innerHTML;
            enterVehicle();
        });

        let button4 = addElement('button', null, 'stageButton', null, buttonContainer);
        button4.innerHTML = 'Lifetime guarantee';
        button4.addEventListener('click', function() {
            optionStage = button4.innerHTML;
            enterVehicle();
        });

        let button5 = addElement('button', null, 'stageButton', null, buttonContainer);
        button5.innerHTML = 'Hydro coat';
        button5.addEventListener('click', function() {
            optionStage = button5.innerHTML;
            enterVehicle();
        });

        let button6 = addElement('button', null, 'stageButton', null, buttonContainer);
        button6.innerHTML = 'Alloy wheel';
        button6.addEventListener('click', function() {
            optionStage = button6.innerHTML;
            enterVehicle();
        });

        let button7 = addElement('button', null, 'stageButton', null, buttonContainer);
        button7.innerHTML = 'Marine & Aviation';
        button7.addEventListener('click', function() {
            optionStage = button7.innerHTML;
            enterVehicle();
        });

        let button8 = addElement('button', null, 'stageButton', null, buttonContainer);
        button8.innerHTML = 'Not sure! I need some advice';
        button8.addEventListener('click', function() {
            optionStage = button8.innerHTML;
            enterVehicle();
        });
    }

    if(chosenStage == 'Wrapping/ PPF/ Tinting') {
        let buttonContainer = addElement('div', null, null, 'checkboxContainer', chatboxContainer);

        let button1 = addElement('button', null, 'stageButton', null, buttonContainer);
        button1.innerHTML = 'Vehicle wrapping';
        button1.addEventListener('click', function() {
            optionStage = button1.innerHTML;
            enterVehicle();
        });

        let button2 = addElement('button', null, 'stageButton', null, buttonContainer);
        button2.innerHTML = 'Paint protection film';
        button2.addEventListener('click', function() {
            optionStage = button2.innerHTML;
            enterVehicle();
        });

        let button3 = addElement('button', null, 'stageButton', null, buttonContainer);
        button3.innerHTML = 'Window tinting';
        button3.addEventListener('click', function() {
            optionStage = button3.innerHTML;
            enterVehicle();
        });

        let button4 = addElement('button', null, 'stageButton', null, buttonContainer);
        button4.innerHTML = 'Headlight tinting';
        button4.addEventListener('click', function() {
            optionStage = button4.innerHTML;
            enterVehicle();
        });

        let button5 = addElement('button', null, 'stageButton', null, buttonContainer);
        button5.innerHTML = 'Not sure! I need some advice';
        button5.addEventListener('click', function() {
            optionStage = button5.innerHTML;
            enterVehicle();
        });
    }

    if(chosenStage == 'Remapping & Performance Parts') {
        let buttonContainer = addElement('div', null, null, 'checkboxContainer', chatboxContainer);

        let button1 = addElement('button', null, 'stageButton', null, buttonContainer);
        button1.innerHTML = 'ECU remapping';
        button1.addEventListener('click', function() {
            optionStage = button1.innerHTML;
            enterVehicle();
        });

        let button2 = addElement('button', null, 'stageButton', null, buttonContainer);
        button2.innerHTML = 'Hardware modifications';
        button2.addEventListener('click', function() {
            optionStage = button2.innerHTML;
            enterVehicle();
        });

        let button3 = addElement('button', null, 'stageButton', null, buttonContainer);
        button3.innerHTML = 'DPF & EGR Solutions';
        button3.addEventListener('click', function() {
            optionStage = button3.innerHTML;
            enterVehicle();
        });

        let button4 = addElement('button', null, 'stageButton', null, buttonContainer);
        button4.innerHTML = 'PPF Solutions';
        button4.addEventListener('click', function() {
            optionStage = button4.innerHTML;
            enterVehicle();
        });

        let button5 = addElement('button', null, 'stageButton', null, buttonContainer);
        button5.innerHTML = '#TRUETUNE';
        button5.addEventListener('click', function() {
            optionStage = button5.innerHTML;
            enterVehicle();
        });

        let button6 = addElement('button', null, 'stageButton', null, buttonContainer);
        button6.innerHTML = 'Not sure! I need some advice';
        button6.addEventListener('click', function() {
            optionStage = button6.innerHTML;
            enterVehicle();
        });
    }

    if(chosenStage == 'Servicing and Tyres Button') {
        let buttonContainer = addElement('div', null, null, 'checkboxContainer', chatboxContainer);

        let button1 = addElement('button', null, 'stageButton', null, buttonContainer);
        button1.innerHTML = 'Maintenance';
        button1.addEventListener('click', function() {
            optionStage = button1.innerHTML;
            enterVehicle();
        });

        let button2 = addElement('button', null, 'stageButton', null, buttonContainer);
        button2.innerHTML = 'Scheduling';
        button2.addEventListener('click', function() {
            optionStage = button2.innerHTML;
            enterVehicle();
        });

        let button3 = addElement('button', null, 'stageButton', null, buttonContainer);
        button3.innerHTML = 'Tyres replacement & check';
        button3.addEventListener('click', function() {
            optionStage = button3.innerHTML;
            enterVehicle();
        });

        let button4 = addElement('button', null, 'stageButton', null, buttonContainer);
        button4.innerHTML = 'Not sure! I need some advice';
        button4.addEventListener('click', function() {
            optionStage = button4.innerHTML;
            enterVehicle();
        });
    }

    if(chosenStage == 'Accident Repair') {
        let buttonContainer = addElement('div', null, null, 'checkboxContainer', chatboxContainer);

        let button1 = addElement('button', null, 'stageButton', null, buttonContainer);
        button1.innerHTML = 'Paintless dent removal';
        button1.addEventListener('click', function() {
            optionStage = button1.innerHTML;
            enterVehicle();
        });

        let button2 = addElement('button', null, 'stageButton', null, buttonContainer);
        button2.innerHTML = 'Wheel refurbishments';
        button2.addEventListener('click', function() {
            optionStage = button2.innerHTML;
            enterVehicle();
        });

        let button3 = addElement('button', null, 'stageButton', null, buttonContainer);
        button3.innerHTML = 'Accident repair';
        button3.addEventListener('click', function() {
            optionStage = button3.innerHTML;
            enterVehicle();
        });

        let button4 = addElement('button', null, 'stageButton', null, buttonContainer);
        button4.innerHTML = 'Custom upgrades';
        button4.addEventListener('click', function() {
            optionStage = button4.innerHTML;
            enterVehicle();
        });

        let button5 = addElement('button', null, 'stageButton', null, buttonContainer);
        button5.innerHTML = 'Not sure! I need some advice';
        button5.addEventListener('click', function() {
            optionStage = button5.innerHTML;
            enterVehicle();
        });
    }
}

function enterVehicle() {
    let chatboxContainer = document.getElementById('chatboxContainer');

    clearStageShowText(chatboxContainer, "Which vehicle?");

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

function getPermission() {
    let chatboxContainer = document.getElementById('chatboxContainer');

    clearStageShowText(chatboxContainer, "By submitting this form, you'll be agreeing to the terms of our privacy policy, Is that ok?");

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
        if(!document.getElementById('nameErrorText')) {
            let nameErrorText = addElement('h2', null, null, nameErrorText, chatboxContainer);
            nameErrorText.innerHTML = "To move further with your enquiry, you must accept our privacy policy.";
        }
    });
}

function getEmail() {
    let chatboxContainer = document.getElementById('chatboxContainer');

    clearStageShowText(chatboxContainer, "What's the best email address for you, " + customerName + "?");

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

function getNumber() {
    let chatboxContainer = document.getElementById('chatboxContainer');
    
    clearStageShowText(chatboxContainer, "and the best number to reach you on?");

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
    
    clearStageShowText(chatboxContainer, "Please fill in the details of your enquiry below");

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
    
    clearStageShowText(chatboxContainer, "Thanks for you patience, name. A member of the team will be in touch with you shortly. Have a nice day :D");

    //Send details for email
    console.log(customerName, chosenStage, vechicleName, customerEmail, customerNumber, customerEnquiry);
}


// ------ Helper Functions ------
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

function clearStageShowText(chatboxContainer, text) {
    while(chatboxContainer.firstChild) {
        chatboxContainer.removeChild(chatboxContainer.lastChild);
    }

    let textContainer = addElement('div', null, null, "textContainer", chatboxContainer);
    let enquiryText = addElement('h2', null, null, null, textContainer);
    enquiryText.innerHTML = text;
}

// Start
welcomeStage();
