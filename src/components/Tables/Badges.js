function Badges (props) {
  let content = [];
  let hallOfFame = props.hallOfFame;
  let badges = props.badges;
  let banned = props.banned;

  // Gym Leader:
  if  (banned === true) {
    content.push(
      <div key={0} className="col-xl-1 col-sm-2 col-4 d-flex justify-content-start">
        <i className="bi bi-exclamation-diamond-fill" alt="Banned" title="Banned" style={{color: "grey", fontSize: "18px"}}></i>
      </div>
    );
  }

  // Hall of Fame:
  if  (hallOfFame === true) {
    content.push(
      <div key={1} className="col-xl-1 col-sm-2 col-4 d-flex justify-content-start">
        <i className="bi bi-award-fill" alt="Hall of Fame" title="Hall of Fame" style={{color: "#a88900", fontSize: "18px"}}></i>
      </div>
    );
  }

  // Badges:
  badges.forEach((data, index) => {
    let img = require("../../assets/img/pokemon/" + data + ".gif");

    content.push(
      <div key={index+2} className="col-xl-1 col-sm-2 col-4 d-flex justify-content-center">
        <div style={{height: "38px"}}>
          <img src={img} alt={data} height={"30px"}/>
        </div>
      </div>
    )
  });

  return (
    <td className="col-xl-6 col-4 d-flex flex-wrap align-content-start px-3 pt-2 pb-0">
      {content}
    </td>
  )
}


export default Badges