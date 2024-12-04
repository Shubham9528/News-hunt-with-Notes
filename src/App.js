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

      {/* Header section */}
      <div className="header text-center h-28 bg-gradient-to-r from-white to-blue-200 py-3 text-4xl sm:text-5xl md:text-6xl fixed top-0 left-0 w-full z-50 shadow-lg border-b-2 border-blue-300">
        <Header />
      </div>

      {/* SearchBox section, positioned below the header */}
      <div className="sticky top-28 z-20 w-full bg-white shadow-md">
        <div className="flex justify-center p-4">
          {/* Container for SearchBox and Add Notes button */}
          <div className="flex space-x-4">
            {/* Search Box */}
            <SearchBox setSubmittedSearch={setSubmittedSearch} />
            {/* Add Notes Button */}
            <nav>
              <Link to="/Notes">
                <button
                  className="bg-blue-600 text-white py-2 px-2 mx-3 my-4 rounded-lg text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Add Notes
                </button>
              </Link>

            </nav>

          </div>
        </div>
      </div>

      {/* Card section, centered on the page */}
      <div className="flex justify-center flex-row align-middle mt-48">
        <Card search={submittedSearch} />
      </div>
</div>
  );
}

export default App;
