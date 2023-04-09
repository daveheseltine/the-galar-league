function Badges (props) {
  let content = [];
  let hallOfFame = props.hallOfFame;
  let badges = props.badges;

  // Hall of Fame:
  if  (hallOfFame === true) {
    content.push(
      <div key={0} className="col-xl-1 col-sm-2 col-4 d-flex justify-content-center mt-1">
          <i className="bi bi-stars" alt="Hall of Fame" style={{color: "#a88900", fontSize: "25px"}}></i>
      </div>
    );
  }

  // Badges:
  badges.forEach((data, index) => {
    let img = require("../../assets/Pokemon/" + data + ".gif");

    content.push(
      <div key={index+1} className="col-xl-1 col-sm-2 col-4 d-flex justify-content-center mt-2">
        <div style={{height: "38px"}}>
          <img src={img} alt={data} height={"30px"}/>
        </div>
      </div>
    )
  });

  return (
    <td className="col-xl-6 col-4 d-flex flex-wrap px-3 py-0">
      {content}
    </td>
  )
}


export default Badges