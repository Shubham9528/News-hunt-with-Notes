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
    <div className="flex flex-col min-h-screen">
  {/* Header */}
  <Header />

  {/* Main Content (CreateArea + Notes) */}
  <main className="flex-grow px-4 py-6 sm:px-8 md:px-12">
    <CreateArea onAdd={newNote} />

    {/* Notes List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {addNotes.map((data, index) => (
        <Note
          key={index}
          id={index}
          title={data.title}
          content={data.content}
          deleteNote={onDelete}
        />
      ))}
    </div>
  </main>

  {/* Footer */}
  <Footer />
</div>
  );
}


