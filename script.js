const nbPokemon = document.querySelector('.nbPokemon')
const list = document.createElement('div')







    
/*
    fetch("https://pokeapi.co/api/v2/pokemon-form/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results)
        nbPokemon.innerHTML = "<ul>"
        data.results.forEach((element) =>{
            nbPokemon.innerHTML += "<li> <p>" + element.name.charAt(0).toUpperCase() + element.name.slice(1) + "</p></li>"
         
        })
        nbPokemon.innerHTML += "</ul>"
     })
     .catch((error) => nbPokemon.innerHTML = error)*/
     
     for( let i = 1; i<= 151; i++){
     
    fetch("https://pokeapi.co/api/v2/pokemon-form/"+i)
    .then((response) => response.json())
    .then((data) => {

        console.log(data)
       
      nbPokemon.innerHTML +=  "<div ><h3>"+ data.name.charAt(0).toUpperCase()+data.name.slice(1) +"</h3><img src="+data.sprites.front_default+"><p>Type : "+data.types[0].type.name+"</p></div>"

        switch(data.types[0].type.name){
            case 'grass':
        nbPokemon.children.style.background = 'green'
        break;
        }
      
       
      
     })
     .catch((error) => nbPokemon.innerHTML = error)
    }

    