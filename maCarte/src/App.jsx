import React from 'react';
import './style.scss';

function App() {
  return (
    <div>
      <nav>
        {/* use the class list to remove bullet points and align items side-by-side */}
        <ul>
          <li>home</li>
          <li>cv</li>
          <li>Contact</li>
        </ul>
      </nav>
      {/* use the class title to change the title color */}
      <h1>TICON FREDERIC</h1>
      <p>Developpeur Web</p>
    </div>
  );
}
export default App
