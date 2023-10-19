import React from 'react';
import './App.css';
import {Card} from "./components/card/card";
import {Header} from "./layout/header/header";

function App() {
  return (
    <div >
        <Header/>
        {/*<img src="./assets/images/image.webp" alt=""/>*/}
      <Card/>
    </div>
  );
}

export default App;
