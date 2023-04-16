import Cup from "../components/Cup/Cup.js";
import SaveData from "../assets/SaveData/CaterpieCup.js";


function CaterpieCup () {
  const mascot = "caterpie";

  return (
    <Cup mascot={mascot} data={SaveData} />
  )
}


export default CaterpieCup