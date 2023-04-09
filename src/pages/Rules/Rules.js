function Rules () {
  return (
  <div className="d-flex flex-wrap justify-content-center" id="wrapper">
    <h1 className="col-12 py-4 text-center">Rules</h1>
    
    <div className="col-xl-9 col-12 px-2">
      {/* The Galar League: */}
      <div className="px-2 pt-2">
        <h2>The Galar League</h2>
        <p>Your deck must have been legal in the official Standard format at any point from the Sword and Shield Base set onwards (including reprints).</p>
        <p className="m-0">The current options are building your deck using only cards with regulation marks:</p>
        <ul>
          <li>"D", "E" and "F"</li>
          <li>"E", "F" and "G"</li>
        </ul>
      </div>

      {/* The Dragonite Cup: */}
      <div className="px-2 pt-2">
        <h2>The Dragonite Cup</h2>
        <ul>
          <li>All Pokemon are allowed.</li>
          <li>Weakness and Resistance are allowed.</li>
        </ul>
      </div>

      {/* The Gaterpie Cup: */}
      <div className="px-2 pt-2">
        <h2>The Caterpie Cup</h2>
        <ul>
          <li>Evolution pokemon with a Rulebox are not allowed.</li>
          <li>Basic pokemon with a Rulebox are allowed, up to 2 of "V" or "EX" pokemon and 1 "Radiant" pokemon.</li>
          <li>Weakness and Resistance are ignored.</li>
        </ul>
      </div>
    </div>
  </div>
  );
}


export default Rules

