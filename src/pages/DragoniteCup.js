import Cup from "../components/Cup/Cup.js";
import SaveData from "../assets/SaveData/DragoniteCup.js";


function DragoniteCup () {
  const mascot = "dragonite";

  return (
    <Cup mascot={mascot} data={SaveData} />
  )
}


export default DragoniteCup