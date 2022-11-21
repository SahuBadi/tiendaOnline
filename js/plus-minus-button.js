console.log("hola")

export let renderPlusMinusButton = () => {
    let cantidad = document.getElementById("cantidad");
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");

    
    plus.addEventListener("click", () => {
        cantidad.value = (parseInt(cantidad.value) + 1);
    })

    minus.addEventListener("click", () => {
        if (cantidad.value > 1){
            cantidad.value = (parseInt(cantidad.value) - 1);
        }
    })
}