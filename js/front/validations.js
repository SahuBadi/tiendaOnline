import {renderNotification} from "./notifications.js"
export const validateForm = formInputs => {
    let valid = true;

    for(let i = 0; i < formInputs.length; i++) {

        switch (formInputs[i].name) {
            case "fname":
            case "lname":
                if (formInputs[i].value.match(/^[a-zA-Z\s]{2,20}/g) == null) {
                    formInputs[i].classList.add("invalid")
                    valid = false
                } else {
                    formInputs[i].classList.remove("invalid")
                }
                break;
            case "telf":
                if (formInputs[i].value.match(/^\d{9}$/g) == null) {
                    formInputs[i].classList.add("invalid")
                    valid = false
                } else {
                    formInputs[i].classList.remove("invalid")
                }
                break;
            case "email":
                if (formInputs[i].value.match(/\w+@\w+\.\w+/g) == null) {
                    formInputs[i].classList.add("invalid")
                    valid = false
                } else {
                    formInputs[i].classList.remove("invalid")
                }
                break;
            case "text":
                if (formInputs[i].value.match(/^[a-zA-Z\s]{4}/g) == null) {
                    formInputs[i].classList.add("invalid")
                    valid = false
                } else {
                    formInputs[i].classList.remove("invalid")
                }
                break;
            case "city":
                if (formInputs[i].value.match(/^[a-zA-Z\s]{4}/g) == null) {
                    formInputs[i].classList.add("invalid")
                    valid = false
                } else {
                    formInputs[i].classList.remove("invalid")
                }
                break;
            case "cp":
                if (formInputs[i].value.match(/^\d{2-9}$/g) == null) {
                    formInputs[i].classList.add("invalid")
                    valid = false
                } else {
                    formInputs[i].classList.remove("invalid")
                }
                break;
            case "direction":
                if (formInputs[i].value.match(/^[a-zA-Z\s]{4}/g) == null) {
                    formInputs[i].classList.add("invalid")
                    valid = false
                } else {
                    formInputs[i].classList.remove("invalid")
                }
                break;
            default:
                break;
        }
    }
    
    renderNotification();
    if(!valid){
        document.dispatchEvent(new CustomEvent('message', {
            detail: {
                text: 'Los datos del formulario no son válidos',
                type: 'error'
            }
        }))
    }
    return valid;
    
}