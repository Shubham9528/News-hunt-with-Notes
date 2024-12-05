import React, { useState } from 'react';
import { Link} from 'react-router-dom';  // Import necessary components for routing
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import SearchBox from './components/SearchBox';


// import AppNotes from './components/Notes/AppNotes';  // Import AppNotes

function App() {
  const [submittedSearch, setSubmittedSearch] = useState("");

  return (
    <div>
  {/* Header Section */}
  <div className="header text-center h-28 bg-gradient-to-r from-white to-blue-200 py-3 text-4xl sm:text-5xl md:text-6xl fixed top-0 left-0 w-full z-50 shadow-lg border-b-2 border-blue-300">
    <Header />
  </div>

  {/* SearchBox Section */}
  <div className="sticky top-28 z-20 w-full bg-white shadow-md">
    <div className="flex justify-center p-4">
      {/* Container for SearchBox and Add Notes Button */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* SearchBox */}
        <SearchBox setSubmittedSearch={setSubmittedSearch} />
        
        {/* Add Notes Button */}
        <nav>
          <Link to="/Notes">
            <button
              className="bg-blue-600 text-white py-2 px-4 mt-3 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Add Notes
            </button>
          </Link>
        </nav>
      </div>
    </div>
  </div>

  {/* Card Section */}
  <div className="flex justify-center mt-48 px-4">
    <Card search={submittedSearch} />
  </div>
</div>
  );
}

export default App;
