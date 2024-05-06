import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Botcolletion from "./components/botcollection/botcollection";
import Yourbotarmy from "./components/yourbotarmy/yourbotarmy";
import BotSpecs from "./components/botspecs/Botspecs.js";

function App() {
  const [botcolletion, setBotcolletion] = useState([]);
  const [armyBots, setArmyBots] = useState([]);
  const [botSpecsShown, setBotspecsShown] = useState({});

  useEffect(() => {
    fetch("https://json-server-2-4qi6.onrender.com/bots")
      .then((resp) => resp.json())
      .then((data) => {
        setBotcolletion(data);
      });
  }, []);

  return (
    <div className="App">
      <header>Bot Battlr</header>
      <Yourbotarmy armyBots={armyBots} setArmyBots={setArmyBots} />
      <Routes>
        <Route
        
          path="/bot-battlr-code-challenge"
          element={
            <Botcolletion
              setBotspecsShown={setBotspecsShown}
              setArmyBots={setArmyBots}
              armyBots={armyBots}
              botcolletion={botcolletion}
              setBotcolletion={setBotcolletion}
            />
          }
        />
        <Route
    
          path="/bot-battlr-code-challenge/botspecs"
          element={
            <BotSpecs
              botSpecsShown={botSpecsShown}
              setArmyBots={setArmyBots}
              armyBots={armyBots}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;