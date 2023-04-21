const form = document.querySelector('form')
const result = document.querySelector('.result')
const inputCodePostal = document.querySelector(".codepostal")

form.addEventListener('input', (event) => {
    event.preventDefault();
    
    getInfosAPI(inputCodePostal)
})




function getInfosAPI(inputCodePostal){
    

    fetch("https://geo.api.gouv.fr/communes?codePostal="+inputCodePostal.value+"&fields=nom, communes")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        result.innerHTML = " "

        //result.innerHTML = "<option> Nom : " + data[0].nom  + "</option><br>"
        data.forEach((nomville) => {
           result.innerHTML += "<option>" + nomville.nom + "</option>"
           
     })
       
     })
     .catch((error) => result.innerHTML = error)
}

