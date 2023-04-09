import DragoniteData from "../../save/DragoniteCup.js"
import CaterpieData from "../../save/CaterpieCup.js"
import Number from "../../components/Tables/Number.js"
import Pokemon from "../../components/Tables/Pokemon.js"
import Badges from "../../components/Tables/Badges.js"

let pikachuImg = require("../../assets/Pokemon/pikachu-kantocap.gif");


function Home () {
  let DragoniteContent = [];
  DragoniteData.sort((a, b) => (b.champion) - (a.champion) || (b.hallOfFame) - (a.hallOfFame) || (b.badges.length) - (a.badges.length));
  DragoniteContent.push(
    <tr key={0} className="d-flex">
      <Number row={0}/>
      <td className="col-xl-1 col-2">{DragoniteData[0].playerName}</td>
      <Pokemon pokemon={DragoniteData[0].pokemon}/>
      {/* text center: */}
      <td className="col-1 text-center">[#]</td>
      <Badges badges={DragoniteData[0].badges} hallOfFame={DragoniteData[0].hallOfFame}/>
    </tr>
  )

  let CaterpieContent = [];
  DragoniteData.sort((a, b) => (b.champion) - (a.champion) || (b.hallOfFame) - (a.hallOfFame) || (b.badges.length) - (a.badges.length));
  CaterpieContent.push(
    <tr key={1} className="d-flex">
      <Number row={0} index={1}/>
      <td className="col-xl-1 col-2">{CaterpieData[0].playerName}</td>
      <Pokemon pokemon={CaterpieData[0].pokemon}/>
      {/* text center: */}
      <td className="col-1 text-center">[#]</td>
      <Badges badges={CaterpieData[0].badges} hallOfFame={CaterpieData[0].hallOfFame}/>
    </tr>
  )


  return (
    <div className="d-flex flex-wrap justify-content-center" id="wrapper">
      <div className="col-12 py-4">
        <h1 className="text-center">Current Champions</h1>
        <div className="d-flex justify-content-center">
          <img src={pikachuImg} alt="Current Champions" height="50px"/>
        </div>
      </div>

      {/* Table */}
      <div className="col-xl-9 col-12 px-0">
        <table className="table table-hover">
          {/* Head: */}
          <thead>
            <tr className="d-flex" style={{borderBottom: "solid 3px"}}>
              <th className="col-1 text-center" scope="col">#</th>
              <th className="col-xl-1 col-2" scope="col">Player</th>
              <th className="col-xl-3 col-4 px-3" scope="col">Deck</th>
              <th className="col-1 text-center" scope="col">List</th>
              <th className="col-xl-6 col-4 px-3" scope="col">Badges</th>
            </tr>
          </thead>

          {/* Body: */}
          <tbody>
            {DragoniteContent}
            {CaterpieContent}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default Home