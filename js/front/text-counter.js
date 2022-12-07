export const renderTextCounter = () => {
    let input = document.querySelector('#cmessage');
    let counter = document.querySelector('.counter');

    if(input){
        input.addEventListener('input', () => {
            counter.textContent = input.value.length + input.dataset.max;
        })
    }

}