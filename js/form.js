import { validateForm} from "./validations.js"
import {renderNotification} from "./notifications.js"

export const renderForm = () => {
    let formInputs = document.querySelector('form').elements;
    let send = document.querySelector('.send-form-button');

    for(let i = 0; i < formInputs.length; i++) {
        
        if(formInputs[i].value.length > 0){


        }
    }

    send.addEventListener('click', event => {

        event.preventDefault();
        /*validateForm(formInputs);*/
        if (!validateForm(formInputs)) {
            return;
        }

        renderNotification();

        document.dispatchEvent(new CustomEvent('message', {
            detail: {
                text: 'Formulario enviado correctamente',
                type: 'success'
            }
        }))

    })
}


/*
form.js

       document.dispatchEvent(new CustomEvent('message', {
            detail: {
                text: 'Formulario enviado correctamente',
                type: 'success'
            }
        }));
notification.js

export let renderNotification = () => {

    document.addEventListener("message", (event =>{

        let notification = document.getElementById("notification");
        let notificationText = document.getElementById("notification-message");
       
        notificationText.innerHTML = event.detail.text;
        notification.classList.add(event.detail.type);
        notification.classList.add("active");

        setTimeout(() => {
            notification.classList.remove("active");
            notification.classList.remove(event.detail.type);
        }, 5000);
    }));
}




Validate Form

export let validateForm = formInputs => {

    let validForm = true;
   
    let validators = {
        "only-letters": /^[a-zA-Z\s]+$/g,
        "only-numbers": /\d/g,
        "telephone": /^\d{9}$/g,
        "email": /\w+@\w+\.\w+/g,
        "web": /^(http|https):\/\/\w+\.\w+/g,
        "password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
        "date": /^\d{4}-\d{2}-\d{2}$/g,
        "time": /^\d{2}:\d{2}$/g
    }

    for (let i = 0; i < formInputs.length; i++) {

        if (formInputs[i].dataset.validate && formInputs[i].value.match(validators[formInputs[i].dataset.validate]) == null) {
            formInputs[i].classList.add('invalid');
            validForm = false;
        }else{
            formInputs[i].classList.remove('invalid');
        }
    }

    return validForm;
};

*/
