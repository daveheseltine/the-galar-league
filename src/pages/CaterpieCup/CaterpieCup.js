import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import CaterpieData from "../../save/CaterpieCup.js"
import Number from "../../components/Tables/Number.js"
import Pokemon from "../../components/Tables/Pokemon.js"
import Badges from "../../components/Tables/Badges.js"

let caterpieImg = require("../../assets/Pokemon/caterpie.gif");


function CaterpieCup () {
  const [modal, setModal] = useState({
    show: false
  });

  const handleModal = (input) => {
    let imgSrc = require("../../assets/img/" + input + ".png");
  
    setModal({
      show: true,
      image: <img src={imgSrc} style={{width: "100%"}}/>
    })
  }


  let content = [];
  CaterpieData.sort((a, b) => (b.champion) - (a.champion) || (b.hallOfFame) - (a.hallOfFame) || (b.badges.length) - (a.badges.length));
  CaterpieData.forEach((data, index) => {
    content.push(
      <tr key={index} className="d-flex">
        <Number row={index}/>
        <td className="col-xl-1 col-2">{data.playerName}</td>
        <Pokemon pokemon={data.pokemon}/>
        {/* text center: */}
        <td className="col-1 d-flex justify-content-center align-content-start mt-1 p-0">
          <i type="button" className="bi bi-card-list" onClick={() => handleModal(data.id)} alt="Hall of Fame" style={{fontSize: "22px"}}></i>
        </td>
        <Badges badges={data.badges} hallOfFame={data.hallOfFame}/>
      </tr>
    )
  })

  return (
    <div className="d-flex flex-wrap justify-content-center" id="wrapper">
      <div className="col-12 py-4">
        <h1 className="text-center">The Caterpie Cup</h1>
        <div className="d-flex justify-content-center">
          <img src={caterpieImg} alt="The Caterpie Cup" height="50px"/>
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
            {content}
          </tbody>
        </table>
      </div>

      <div>
        <Modal size="xl" show={modal.show} onHide={() => setModal({show: false})} centered>
          {modal.image}
        </Modal>
      </div>
    </div>
  );
}


export default CaterpieCup