const passwordInput = document.getElementById("new-password-field");
const confirmPasswordInput = document.getElementById("confirm-password-field");
const listOfValidations = document.querySelectorAll(".password-requirements li");
document.getElementById("submit-btn").disabled = true;

function passwordValidation(){
    const password = passwordInput.value;

    const lowercaseMet = Boolean(password.match(/[a-z]/));
    requirementUpdateResponse(lowercaseMet,0);

    const uppercaseMet = Boolean(password.match(/[A-Z]/));
    requirementUpdateResponse(uppercaseMet,1);

    
    const numericMet   = Boolean(password.match(/[0-9]/));
    requirementUpdateResponse(numericMet,2);

    const specialMet   = Boolean(password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/));
    requirementUpdateResponse(specialMet,3);

    const lengthMet    = Boolean(password.length >= 8);
    requirementUpdateResponse(lengthMet,4);

    const confirmPassword = confirmPasswordInput.value;
    
   

}

function checkMatchCase(){
    const password = passwordInput.value;
    const  confirmPassword = confirmPasswordInput.value;
    if(confirmPassword == password){
        const passwordMatched = true;
        requirementUpdateResponse(passwordMatched,5);
        document.getElementById("submit-btn").disabled = false;

    }
}
function requirementUpdateResponse(requirementMet, validationIndex){
        validation_HTML_ElementObject = listOfValidations[validationIndex];
    if(requirementMet == true){
        validation_HTML_ElementObject.classList.remove("unmet");
        validation_HTML_ElementObject.classList.add("met");
    }else{
        validation_HTML_ElementObject.classList.remove("met");
        validation_HTML_ElementObject.classList.add("unmet");
    }
}


passwordInput.addEventListener('keyup', passwordValidation);
confirmPasswordInput.addEventListener('keyup', checkMatchCase);
