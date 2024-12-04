import React from "react";
import { Route, Routes } from 'react-router-dom';

import NotesApp from "./Notes/NotesApp";
import App from "./App";

export default function MainApp() { 
    return (
        <div>
             <Routes>
        <Route path="/" element={<App  />} />
        <Route path="/Notes" element={<NotesApp />} />
       
      </Routes>
            
        </div>
    )
}