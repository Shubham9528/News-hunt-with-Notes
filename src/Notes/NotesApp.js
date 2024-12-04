import React, { useState } from "react";
import Header from "./Header";
import "../styles.css";
import Footer from "./Footer";
import Note from "./Note";

import CreateArea from "./CreateArea";

export default function NotesApp() {
  const [addNotes, setaddNotes] = useState([]);
  function newNote(notes) {
    setaddNotes((prevValue) => {
      return [...prevValue, notes];
    });
  }

  function onDelete(id) {
    setaddNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Footer />
      <CreateArea onAdd={newNote} />
      {addNotes.map((data, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={data.title}
            content={data.content}
            deleteNote={onDelete}
          />
        );
      })}
    </div>
  );
}


