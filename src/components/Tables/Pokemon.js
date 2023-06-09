function Pokemon (props) {
  let content = [];
  let pokemon = props.pokemon;

  pokemon.forEach((data, index) => {
    let dataAbc = data.replace("_", " ");
    dataAbc = dataAbc[0].toUpperCase() + dataAbc.slice(1);

    let img = require("../../assets/img/pokemon/" + data + ".gif");

    content.push(
      <div key={index} className="col-sm-2 col-4 d-flex justify-content-center">
        <div style={{height: "38px"}}>
          <img src={img} alt={dataAbc} title={dataAbc} height="30px"/>
        </div>
      </div>
    )
  });

  return (
    <td className="col-xl-3 col-4 d-flex flex-wrap align-content-start px-3 pt-2 pb-0">
      {content}
    </td>
  )
}


export default Pokemon