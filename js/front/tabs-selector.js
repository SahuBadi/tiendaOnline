export let renderTextTabs = () => {

    let tabelements = document.querySelectorAll(".tab");
    let tabcontents = document.querySelectorAll(".content-tab");


    tabelements.forEach(tab => {

        tab.addEventListener("click", () => { 

            tabelements.forEach(tab => {
                tab.classList.remove("active");
            })

            tab.classList.add("active");

            tabcontents.forEach(content => {

                if(tab.dataset.index == content.dataset.index) {
                    content.classList.add("active")
                }else{
                    content.classList.remove("active")
                }
            })

        })
    })
}



/*
            if (tab.classList.contains("active")){
                tab.classList.remove("active");
            } else {
                tab.classList.add("active");
            }
*/