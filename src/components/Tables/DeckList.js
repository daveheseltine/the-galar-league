function DeckList (props) {
  let content;

  if (props.deckList === true) {
    content = (
      <i alt="Champion" className="interaction bi bi-grid-fill" style={{fontSize: "22px"}} onClick={() => props.handleModal(props.id)}></i>
    )
  } else {
    content = ("")
  }


  return (
    <td className="col-1 d-flex justify-content-center align-content-start pt-1 p-0">
      {content}
    </td>
  )
}


export default DeckList