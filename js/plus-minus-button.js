console.log("hola")
export let renderPlusMinusButton = () => {

    let plus = document.querySelectorAll(".plus-button > button");
    let minus = document.querySelectorAll(".minus-button > button");

    plus.forEach(button => {

        button.addEventListener("click", () => {

            let cantidad = button.closest('.plus-minus-button').querySelector('.amount input');

            console.log(cantidad)

            if (cantidad.value < 50){ 
                cantidad.value = (parseInt(cantidad.value) + 1)
            }
        })
    })

    minus.forEach(button => {

        button.addEventListener("click", () => {

            let cantidad = button.closest('.plus-minus-button').querySelector('.amount input');

            if (cantidad.value > 1){
                cantidad.value = (parseInt(cantidad.value) - 1);
            }
        })
    })


}