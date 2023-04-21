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
     
     /*for( let i = 1; i<= 151; i++){
     
    fetch("https://pokeapi.co/api/v2/pokemon-form/"+i)
    .then((response) => response.json())
    .then((data) => {

        console.log(data)

        let pokemonElement = document.createElement('div');
        pokemonElement.className = 'test';
      nbPokemon.innerHTML +=  "<h3>"+ data.name.charAt(0).toUpperCase()+data.name.slice(1) +"</h3><img src="+data.sprites.front_default+"><p>Type : "+data.types[0].type.name+"</p>"
      console.log(nbPokemon.children)
      nbPokemon.appendChild(pokemonElement);

        switch(data.types[0].type.name){
            case 'grass':
        nbPokemon.childNodes.classList.add('test')
        break;
        }
      
       
      
     })
     .catch((error) => nbPokemon.innerHTML = error)
    }*/


    for (let i = 1; i <= 151; i++) {
        fetch("https://pokeapi.co/api/v2/pokemon-form/" + i)
          .then((response) => response.json())
          .then((data) => {
            let pokemonElement = document.createElement('div');
            pokemonElement.style.padding = "0 2rem"
            pokemonElement.innerHTML = "<h3>" + data.name.charAt(0).toUpperCase() + data.name.slice(1) + "</h3><img src=" + data.sprites.front_default + "><p>Type : " + data.types[0].type.name + "</p>";
            nbPokemon.appendChild(pokemonElement);
            
            switch(data.types[0].type.name){
                case 'grass':
            pokemonElement.style.background = "green"
            
            break;
                case 'fire':
                    pokemonElement.style.background = "orange"
            break;
                case 'water':
                    pokemonElement.style.background =  "#4ca4ff"  
            break;
                case 'bug':
                    pokemonElement.style.background =  "#568156"  
            break;
            case 'normal':
                    pokemonElement.style.background =  "grey"  
            break;
            case 'poison':
                    pokemonElement.style.background =  "#8d388d"  
            break;
            case 'electric':
                    pokemonElement.style.background =  "yellow"  
            break;
            case 'ground': 
                    pokemonElement.style.background =  "#99530b"  
            break;
            case 'fighting': 
                    pokemonElement.style.background =  "#db9937"  
            break;
            case 'fairy': 
                    pokemonElement.style.background =  "violet"  
            break;
            case 'psychic': 
                    pokemonElement.style.background =  "rgb(173 15 171)"  
            break;
            case 'ghost': 
                    pokemonElement.style.background =  "rgb(122 44 121)"  
            break;
            case 'rock': 
                    pokemonElement.style.background =  "#b1610f"  
            break;
            case 'ice': 
            pokemonElement.style.background =  "#3b85c5"  
            break;
            case 'dragon': 
            pokemonElement.style.background =  "red"  
            break;
            }
            
          })
          .catch((error) => nbPokemon.innerHTML = error);
      }
      

    