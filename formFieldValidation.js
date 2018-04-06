

function checkRequiredField(elementID) {
    var inputVal = document.getElementById(elementID);
    if (inputVal.value.trim() == "" || isEmpty(elementID) ) {
        inputVal.style.backgroundColor = "pink";
        return true;
    }
    else{
        inputVal.style.backgroundColor = "";
        return false;
    }
}



function outOfRange(elementID, MinChar, MaxChar) {
    var inputVal = document.getElementById(elementID);
    if (inputVal.value.length < MinChar || inputVal.value.length > MaxChar) {
        inputVal.style.backgroundColor = "yellow";
        return true;
    } else {
        inputVal.style.backgroundColor = "";
        return false;
    }
}



function isEmpty(elementID) {
    var textIn = document.getElementById(elementID).value.trim();
    if (textIn == "" || textIn == null){
        return true;
    } else {
        return false;
    }
}


function isAlphabetOnly(elementID) {
    var textIn = document.getElementById(elementID).value;
    var letterN = 0;
    var alphaOnly = true;
    if(textIn.length > 0) {
        for (n = 0; n < textIn.length; n++) {
            letterN = textIn.charCodeAt(n);
            if (letterN > 31 && (letterN < 65 || letterN > 90) && (letterN < 97 || letterN > 122)) {
                alphaOnly = false;
            }
        }
    }
    return alphaOnly;
}


function checkForYes(elementID) {
    var inputVal = document.getElementById(elementID);
    if (inputVal.checked) {
    }
    return inputVal.checked
}


function isValidEmail(elementID) {
    var inputVal = document.getElementById(elementID);
    var email = inputVal.value;
    var validFormat = /\S+@\S+\S+./;

    if (validFormat.test(email)) {
        //inputVal.style.backgroundColor = "";
        return true
    } else {
        //inputVal.style.backgroundColor = "pink";
        return false
    }
}


function addWarningMessage(elementID, message){
    document.getElementById(elementID).innerText = message
}

function validateForm() {

    var submitFailure = false;

    if (checkRequiredField('field1')) {
        console.log('field1 Submit Failure')
        submitFailure = true;
    }

    if (outOfRange('field2', 0, 8)) {
        console.log('field2 Submit Failure')
        submitFailure = true;
    }

    if (checkRequiredField('field3') || outOfRange('field3', 10, 25)) {
        console.log('field3 Submit Failure')
        submitFailure = true;
    }

    //var input4V = document.getElementById('field4').value;
    if (!isEmpty('field4') && outOfRange('field4', 10, 25)) {
        console.log('field4 submit Failure')
        submitFailure = true;
    }

    if (!isAlphabetOnly('field5')) {
        console.log('field5 Submit Failure')
        submitFailure = true;
    }

    if (checkForYes('field6Y') && isEmpty('field7')) {
        console.log('field7 Submit Failure')
        submitFailure = true;
    }

    if (isValidEmail('field8')){
        console.log('field8 Submit Failure')
        submitFailure = true;
    }

    if(submitFailure) {
        document.getElementById('submitWarning').textContent = 'Form: not submitted, bad user!'
    } else {
        document.getElementById('submitWarning').textContent = 'Form is Goooood!'
    }

}


//FIELD 1
document.getElementById('field1').addEventListener('blur', function() {
    if(checkRequiredField('field1')) {
        checkRequiredField('field1');
        F1_Warning = "Field1 is required";
        addWarningMessage('field1Warning', F1_Warning);
    } else {
        F1_Warning = "";
        addWarningMessage('field1Warning', F1_Warning);
    }
});


//FIELD 2
document.getElementById('field2').addEventListener('blur', function (){
    if(outOfRange('field2', 0, 8)) {
        outOfRange('field2',0, 8);
        F2_Warning = "Feild2 has incorrect length";
        addWarningMessage('field2Warning', F2_Warning);
    } else {
        F2_Warning = "";
        addWarningMessage('field2Warning', F2_Warning);
    }
});


//FIELD 3
document.getElementById('field3').addEventListener('blur', function() {
    if(checkRequiredField('field3')) {
        checkRequiredField('field3');
        F3_Warning = "Field3 is required";
        addWarningMessage('field3Warning', F3_Warning);
    }
    else if (outOfRange('field3', 10, 25)) {
        outOfRange('field3', 10, 25);
        F3_Warning = "Field3 is incorrect length";
        addWarningMessage('field3Warning', F3_Warning);
    }
    else {
        F3_Warning = "";
        addWarningMessage('field3Warning', F3_Warning);
    }
});


//FIELD 4
document.getElementById('field4').addEventListener('blur', function (){
    var inputF = document.getElementById('field4');
    if(isEmpty('field4')) {
        F4_Warning = "";
        addWarningMessage('field4Warning', F4_Warning);
        inputF.style.backgroundColor = "";
    } else if (outOfRange('field4', 10, 25)) {
        outOfRange('field4', 10, 25);
        F4_Warning = "Feild4 has incorrect length";
        addWarningMessage('field4Warning', F4_Warning);
    } else {
        F4_Warning = "";
        addWarningMessage('field4Warning', F4_Warning);
    }
});


//FIELD5
document.getElementById('field5').addEventListener('blur', function (){
    if(isAlphabetOnly('field5')) {
        F5_Warning = "";
        addWarningMessage('field5Warning', F5_Warning);
    } else {
        F5_Warning = "Field5 has invalid characters";
        addWarningMessage('field5Warning', F5_Warning);
    }
});


//FIELD 7 -- field required if Radio = Y
document.getElementById('field7').addEventListener('blur', function() {
    var inputF = document.getElementById('field7');
    if (checkForYes('field6Y')){
           if (checkRequiredField('field7')) {
               checkRequiredField('field7');
               F7_Warning = "If Yes, then must not be empty";
               addWarningMessage('field7Warning', F7_Warning);
           } else {
               F7_Warning = "";
               addWarningMessage('field7Warning', F7_Warning);
           }
    } else {
        F7_Warning = "";
        addWarningMessage('field7Warning', F7_Warning);
        inputF.style.backgroundColor = "";
    }
});


//FIELD 8
document.getElementById('field8').addEventListener('blur', function() {
    var inputF = document.getElementById('field8');
    if(isEmpty('field8')) {
        F8_Warning = "";
        addWarningMessage('field8Warning', F8_Warning);
        inputF.style.backgroundColor = "";
    } else if (isValidEmail('field8')){
        isValidEmail('field8')
        F8_Warning = "";
        addWarningMessage('field8Warning', F8_Warning);
    } else {
        F8_Warning = "Not a valid email";
        addWarningMessage('field8Warning', F8_Warning);
        inputF.style.backgroundColor = "pink";
    }
});


//Add event listener on the button Submit
//get Form Element using its ID
document.getElementById('formID').addEventListener('submit', function(e){
    e.preventDefault();
    validateForm();
});
