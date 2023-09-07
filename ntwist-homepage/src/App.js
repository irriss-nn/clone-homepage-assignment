// Importing necessary modules from react-router-dom for routing capabilities.
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing the Navbar and Homepage components.
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Page/Homepage/Homepage";

// Importing global styles.
import "./App.css";

// Main App functional component.
function App() {
  return (
    <div className="App">
      {/* Using BrowserRouter to wrap our entire application for routing. */}
      <BrowserRouter>

        {/* Rendering the Navbar component at the top of the application. */}
        <Navbar />

        {/* This div with flexGrow style allows content to take remaining height, ensuring flexibility in layout. */}
        <div style={{flexGrow: 1}}> 
          
          {/* Using Routes component to define possible routes in the application. */}
          <Routes>
            
            {/* Defining a route for the root URL to render the Homepage component. */}
            <Route path="/" element={<Homepage />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

// Exporting the App component to be used in other parts of the application.
export default App;
