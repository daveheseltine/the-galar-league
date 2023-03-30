//Function to create a form component
function Pokedex (props) {
  let pokemon = props.pokemon;
  let pokedex = [];

  pokemon.forEach((data) => {
    const img = require("../assets/Pokedex/" + data + ".gif")
    pokedex.push(
      <img src={img} alt={data} width="50" />
    )
  })

  return pokedex
}


// Export:
export default Pokedex