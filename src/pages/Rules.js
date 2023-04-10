import Footer from "../components/Footer.js"

const bg = require("../assets/img/pokemon-tcg-2023.png");


function Rules () {
  return (
    <div className="d-flex flex-column justify-content-between" id="wrapper" style={{minHeight: "100vh", backgroundImage: `url(${bg})`}}>
      <div className="d-flex flex-wrap justify-content-center align-content-start">

        {/* Spacer: */}
        <div className="col-12" style={{height: "100px"}}></div>

        <h1 className="col-12 mb-2 py-4 text-center">The Galar League<span className="align-items-center" style={{fontSize: "15px"}}>&copy;</span> Rules</h1>
        
        <div className="col-xl-9 col-12 px-2 pb-3">
          {/* The Galar League: */}
          <div className="mb-3 px-2 py-1" style={{backgroundColor: "white", border: "solid 3px lightgrey", borderRadius: "10px"}}>
            <p>Your deck must have been legal in the official Standard format at any point from the Sword and Shield Base set onwards (including reprints).</p>
            <p className="m-0">The current options are building your deck using only cards with regulation marks:</p>
            <ul className="m-0">
              <li>"D", "E" and "F"</li>
              <li>"E", "F" and "G"</li>
            </ul>
          </div>

          {/* The Dragonite Cup: */}
          <h2>The Dragonite Cup</h2>
          <div className="mb-3 px-2 py-1" style={{backgroundColor: "white", border: "solid 3px lightgrey", borderRadius: "10px"}}>
            <ul className="m-0">
              <li>All Pokemon are allowed.</li>
              <li>Weakness and Resistance are allowed.</li>
            </ul>
          </div>

          {/* The Gaterpie Cup: */}
          <h2>The Caterpie Cup</h2>
          <div className="mb-3 px-2 py-1" style={{backgroundColor: "white", border: "solid 3px lightgrey", borderRadius: "10px"}}>
            <ul className="m-0">
              <li>Evolution pokemon with a Rulebox are not allowed.</li>
              <li>Basic pokemon with a Rulebox are allowed, up to 2 of "V" or "EX" pokemon and 1 "Radiant" pokemon.</li>
              <li>Weakness and Resistance are ignored.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}


export default Rules

