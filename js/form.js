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
