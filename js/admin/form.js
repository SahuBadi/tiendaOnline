import {validateForm} from './validator.js';

export let renderForm = () => {

    let form = document.getElementById('form');
    let sendFormButton = document.getElementById('send-form-button');

    sendFormButton.addEventListener('click', event => {

        event.preventDefault();

        if(!validateForm(form.elements)){
            return;
        }

        // Podemos recoger el valor de todos los inputs de un formulario mediante el objeto FormData. 
        // Para ello debemos pasar como parámetro el formulario al que queremos acceder. 
        let formData = new FormData(form);

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

    });
};