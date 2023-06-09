import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import DragoniteData from "../assets/SaveData/DragoniteCup.js"
import CaterpieData from "../assets/SaveData/CaterpieCup.js"
import Number from "../components/Tables/Number.js"
import Pokemon from "../components/Tables/Pokemon.js"
import DeckList from "../components/Tables/DeckList.js"
import Badges from "../components/Tables/Badges.js"
import Footer from "../components/Footer.js"

const pikachuImg = require("../assets/img/pokemon/pikachu-kantocap.gif");


function Home () {
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

  let DragoniteContent = [];
  DragoniteData.sort((a, b) => (b.champion) - (a.champion) || (b.banned + b.hallOfFame) - (a.banned + a.hallOfFame) || (b.badges.length) - (a.badges.length));
  DragoniteContent.push(
    <tr key={0} className="d-flex">
      <Number row={0} />
      <td className="col-xl-1 col-2">{DragoniteData[0].playerName}</td>
      <Pokemon pokemon={DragoniteData[0].pokemon} />
      <DeckList deckList={DragoniteData[0].deckList} id={DragoniteData[0].id} handleModal={handleModal} />
      <Badges hallOfFame={DragoniteData[0].hallOfFame} banned={DragoniteData[0].banned} badges={DragoniteData[0].badges} />
    </tr>
  )

  let CaterpieContent = [];
  DragoniteData.sort((a, b) => (b.champion) - (a.champion) || (b.banned + b.hallOfFame) - (a.banned + a.hallOfFame) || (b.badges.length) - (a.badges.length));
  CaterpieContent.push(
    <tr key={1} className="d-flex">
      <Number row={0} index={1} />
      <td className="col-xl-1 col-2">{CaterpieData[0].playerName}</td>
      <Pokemon pokemon={CaterpieData[0].pokemon} />
      <DeckList deckList={CaterpieData[0].deckList} id={CaterpieData[0].id} handleModal={handleModal} />
      <Badges hallOfFame={CaterpieData[0].hallOfFame} banned={CaterpieData[0].banned} badges={CaterpieData[0].badges} />
    </tr>
  )

  return (
    // Wrapper (Contains: Main > Content, Footer):
    <div id="wrapper">

      {/* Main > Content: */}
      <div id="main" className="d-flex flex-column" style={{minHeight: "100vh"}}>
        <div id="spacer" style={{height: "100px"}}></div>
        <div id="content" className="d-flex flex-wrap justify-content-center align-content-start">

          {/* Head: */}
          <div className="col-12 py-4">
            <h1 className="mb-2 text-center">Current Champions</h1>
            <div className="d-flex justify-content-center mb-1">
              <img src={pikachuImg} alt="Current Champions" height="60px"/>
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
                {DragoniteContent}
                {CaterpieContent}
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
          <a className="interaction bi-arrow-down-square-fill shadow-none" alt="Download" style={{fontSize: "40px"}} href={modal.href} download> </a>
        </div>
      </Modal>

      {/* Footer: */}
      <Footer />
    </div>
  )
}


export default Home