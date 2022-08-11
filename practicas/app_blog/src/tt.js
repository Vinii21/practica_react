import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Header />
          <main>
          <Routes>
              
          </Routes>
          </main>
      </div>
    </BrowserRouter>
  );
}
 
export default App;