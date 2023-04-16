import Footer from "../components/Footer.js"


function Rules () {
  return (
    // Wrapper (Contains: Main > Content, Footer):
    <div id="wrapper">

      {/* Main > Content: */}
      <div id="main" className="d-flex flex-column" style={{minHeight: "100vh"}}>
        <div id="spacer" style={{height: "100px"}}></div>
        <div id="content" className="d-flex flex-wrap justify-content-center align-content-start">

          {/* Head: */}
          <h1 className="col-12 mb-2 py-5 text-center">The Galar League<span className="align-items-center" style={{fontSize: "15px"}}>&copy;</span> Rules</h1>
          {/* Body: */}
          <div className="col-xl-9 col-12">
            {/* The Galar League: */}
            <div className="textbox mb-4 p-2">
              <p>Your deck must have been legal in the official Standard format at any point from the Sword and Shield Base set onwards (including reprints).</p>
              <p className="m-0">The current options are building your deck using only cards with regulation marks:</p>
              <ul className="m-0">
                <li>"D", "E" and "F"</li>
                <li>"E", "F" and "G"</li>
              </ul>
            </div>
            {/* The Dragonite Cup: */}
            <h2 className="px-3">The Dragonite Cup</h2>
            <div className="textbox mb-4 px-2 p-2">
              <ul className="m-0">
                <li>All Pokemon are allowed.</li>
                <li>Weakness and Resistance are allowed.</li>
              </ul>
            </div>
            {/* The Gaterpie Cup: */}
            <h2 className="px-3">The Caterpie Cup</h2>
            <div className="textbox px-2 p-2">
              <ul className="m-0">
                <li>Evolution pokemon with a Rulebox are not allowed.</li>
                <li>Basic pokemon with a Rulebox are allowed, up to 3 of "V" or "EX" pokemon and 1 "Radiant" pokemon.</li>
                <li>Weakness and Resistance are ignored.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    
      {/* Footer: */}
      <Footer />
    </div>
  );
}


export default Rules

