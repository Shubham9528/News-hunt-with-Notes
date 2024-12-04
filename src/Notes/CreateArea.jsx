import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleNote(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  // function alert() {
  //   alert("Enter Proper Data");
  // }

  return (
    <div>
      <form className="createnote">
        <input className="title" onChange={handleNote} name="title" placeholder="Title"  value={note.title}/>
        <textarea
        className="content"
          onChange={handleNote}
          name="content"
          placeholder="Take a note "
          rows="3"
          value={note.content}
        />
        <button className="add" onClick={handleClick} >
          <AddIcon />
        </button>
      </form>
    </div>
  );
}
export default CreateArea;
