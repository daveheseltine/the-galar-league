import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import DragoniteData from "../assets/SaveData/DragoniteCup.js"
import Number from "../components/Tables/Number.js"
import Pokemon from "../components/Tables/Pokemon.js"
import DeckList from "../components/Tables/DeckList.js"
import Badges from "../components/Tables/Badges.js"
import Footer from "../components/Footer.js"

const dragoniteImg = require("../assets/Pokemon/dragonite.gif");


function DragoniteCup () {
  const [modal, setModal] = useState({
    show: false
  });

  const handleModal = (id) => {
    let imgSrc = require("../../public/DeckLists/" + id + ".png");
    setModal({
      show: true,
      id: id,
      image: <img src={imgSrc} alt="Deck List" style={{width: "100%"}}/>,
      href: "DeckLists/" + id + ".png"
    })
  }

  let content = [];
  DragoniteData.sort((a, b) => (b.champion) - (a.champion) || (b.hallOfFame) - (a.hallOfFame) || (b.gymLeader + b.badges.length) - (a.gymLeader + a.badges.length));
  DragoniteData.forEach((data, index) => {
    content.push(
      <tr key={index} className="d-flex">
        <Number row={index} />
        <td className="col-xl-1 col-2">{data.playerName}</td>
        <Pokemon pokemon={data.pokemon} />
        <DeckList deckList={data.deckList} id={data.id} handleModal={handleModal} />
        <Badges hallOfFame={data.hallOfFame} gymLeader={data.gymLeader} badges={data.badges} />
      </tr>
    )
  })

  return (
    <div className="d-flex flex-column justify-content-between" id="wrapper" style={{minHeight: "100vh", backgroundColor: "white"}}>
      <div className="d-flex flex-wrap justify-content-center align-content-start">

        {/* Spacer: */}
        <div className="col-12" style={{height: "100px"}}></div>

        <div className="col-12 py-4">
          <h1 className="text-center">The Dragonite Cup</h1>
          <div className="d-flex justify-content-center">
            <img src={dragoniteImg} alt="The Dragonite Cup" height="50px"/>
          </div>
        </div>

        {/* Table */}
        <div className="col-xl-9 col-12 px-0">
          <table className="table table-hover">
            {/* Head: */}
            <thead>
              <tr className="d-flex" style={{borderBottom: "solid 3px"}}>
                <th className="col-1 px-0 text-center" scope="col">#</th>
                <th className="col-xl-1 col-2" scope="col">Player</th>
                <th className="col-xl-3 col-4 px-3" scope="col">Deck</th>
                <th className="col-1 px-0 text-center" scope="col">List</th>
                <th className="col-xl-6 col-4 px-3" scope="col">Badges</th>
              </tr>
            </thead>
            {/* Body: */}
            <tbody>
              {content}
            </tbody>
          </table>
        </div>

        <Modal className="d-flex flex-wrap" size="xl" show={modal.show} onHide={() => setModal({show: false})} centered>
          <div className="d-flex flex-wrap justify-content-center p-1">
            <h1 className="col-12 py-1 display-6 text-center">Deck List</h1>
            {modal.image}
            <a className="bi-arrow-down-square-fill" alt="Download" style={{color: "grey", fontSize: "40px"}} href={modal.href} download> </a>
          </div>
        </Modal>
      </div>

      <Footer />
    </div>
  );
}


export default DragoniteCup