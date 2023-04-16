import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Number from "../Tables/Number.js"
import Pokemon from "../Tables/Pokemon.js"
import DeckList from "../Tables/DeckList.js"
import Badges from "../Tables/Badges.js"
import Footer from "../Footer.js"


function Cup (props) {
  const [modal, setModal] = useState({
    show: false
  });

  const handleModal = (id) => {
    let imgSrc = require("../../../public/DeckLists/" + id + ".png");
    setModal({
      show: true,
      id: id,
      image: <img src={imgSrc} alt="Deck List" style={{width: "100%"}}/>,
      href: "DeckLists/" + id + ".png"
    })
  }

  const mascotImg = require("../../assets/img/pokemon/" + props.mascot + ".gif");

  let mascotAbc = props.mascot.replace("_", " ");
  mascotAbc = mascotAbc[0].toUpperCase() + mascotAbc.slice(1);

  let content = [];
  let SaveData = props.data;
  SaveData.sort((a, b) => (b.champion) - (a.champion) || (b.banned + b.hallOfFame) - (a.banned + a.hallOfFame) || (b.badges.length) - (a.badges.length));
  SaveData.forEach((data, index) => {
    content.push(
      <tr key={index} className="d-flex">
        <Number row={index} />
        <td className="col-xl-1 col-2">{data.playerName}</td>
        <Pokemon pokemon={data.pokemon} />
        <DeckList deckList={data.deckList} id={data.id} handleModal={handleModal} />
        <Badges hallOfFame={data.hallOfFame} banned={data.banned} badges={data.badges} />
      </tr>
    )
  })

  return (
    // Wrapper (Contains: Main > Content, Footer):
    <div id="wrapper">

      {/* Main > Content: */}
      <div id="main" className="d-flex flex-column" style={{minHeight: "100vh"}}>
        <div id="spacer" style={{height: "100px"}}></div>
        <div id="content" className="d-flex flex-wrap justify-content-center align-content-start">

          {/* Head: */}
          <div className="col-12 py-4">
            <h1 className="mb-2 text-center">The {mascotAbc} Cup</h1>
            <div className="d-flex justify-content-center mb-1">
              <img src={mascotImg} alt={`The ${mascotAbc} Cup`} height="60px"/>
            </div>
          </div>

          {/* Body: */}
          {/* Table: */}
          <div className="col-xl-9 col-12">
            <table className="table table-borderless table-striped m-0" style={{backgroundColor: "rgb(255, 255, 255, 0.6)"}}>
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

        </div>
      </div>

      {/* Modal: */}
      <Modal className="d-flex flex-wrap" size="xl" show={modal.show} onHide={() => setModal({show: false})} centered>
        <div className="d-flex flex-wrap justify-content-center p-1">
          <h1 className="col-12 py-1 display-6 text-center">Deck List</h1>
          {modal.image}
          <a className="interaction bi-arrow-down-square-fill" alt="Download" style={{fontSize: "40px"}} href={modal.href} download> </a>
        </div>
      </Modal>

      {/* Footer: */}
      <Footer />
    </div>
  )
}


export default Cup