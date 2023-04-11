function Number (props) {
  let content;

  if (props.row === 0) {
    content = (
      <th className="col-1 d-flex justify-content-center align-content-start pt-1 p-0">
        <i className="bi bi-c-square-fill" alt="Champion" style={{color: "#a88900", fontSize: "22px"}}></i>
      </th>
    )
  } else {
    content = (
      <th className="col-1 text-center" scope="row">{props.row+1}</th>
    );
  }

  return (
    content
  )
}


export default Number