import { validateForm} from "./validations.js"
import {renderNotification} from "./notifications.js"

export const renderForm = () => {
    let formInputs = document.querySelector('form').elements;
    //let form = document.getElementById('form');
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

        //----NO BORRAR----//
        renderNotification();

        document.dispatchEvent(new CustomEvent('message', {
            detail: {
                text: 'Formulario enviado correctamente',
                type: 'success'
            }
        }))



        let formData = new FormData(formInputs);

        // Podemos añadir un nuevo dato al objeto FormData mediante el método append.
        // formData.append("fingerprint", "123456789");

        // Podemos recorrer el objeto FormData mediante un bucle for...of.
        // for (let pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }

        // Podemos convertir el objeto FormData en un objeto mediante el método entries.
        let formDataJson = Object.fromEntries(formData.entries());
        
        // Podemos convertir el objeto en un json mediante el método stringify.
        // // console.log(JSON.stringify(formDataJson));

        // Accedemos al token almacenado en el sessionStorage mediante el método getItem.

        fetch('http://192.168.1.16:8080/api/admin/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': sessionStorage.getItem('accessToken')
            },
            body: JSON.stringify(formDataJson)
        }).then(response => {
            return response.json();
        }).then(data => {
            
            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Formulario enviado correctamente',
                    type: 'success'
                }
            }));
    
        }).catch(error => {
            console.log(error);
        });

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
