function searchEnter() {
document.getElementById("SearchBar").addEventListener("keypress", function(e) {
        if (e.key === "Enter"){
            searchProd();
        }
    });
}

searchEnter();

function searchProd() {

    let userinput = document.getElementById("SearchBar").value
    let input = userinput.toLowerCase();
    let ProdList = document.getElementsByClassName("card");
        for (let i = 0; i < ProdList.length; i++) {

            let Prod = ProdList[i].textContent.toLowerCase();

                if (Prod.includes(input)) {
                    ProdList[i].scrollIntoView();
                }
        }
}

