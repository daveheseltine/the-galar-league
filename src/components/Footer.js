function Footer () {
  return(
    <div>
      <div className="d-flex flex-column justify-content-start pt-2 bg-dark text-center" style={{height: "90px", color: "white"}}>
        <a className="bi bi-github" href="https://github.com/daveheseltine/the-galar-league" alt="GitHub" style={{color: "white", fontSize: "30px"}}> </a>
        <p className="m-0">&copy; 2023 ObsidianVault</p>
      </div>
      <div className="d-flex justify-content-center px-5 pt-2 pb-3 bg-black text-center" style={{color: "grey"}}>
        <p className="col-xl-9 col-12 m-0" style={{fontSize: "12px"}}>The literal and graphical information presented on this website about the Pokémon Trading Card Game, including card images and text, is copyright The Pokémon Company (Pokémon), Nintendo, Game Freak and/or Creatures. This website is not produced by, endorsed by, supported by, or affiliated with Pokémon, Nintendo, Game Freak or Creatures.</p>
      </div>
    </div>
  );
}


export default Footer;