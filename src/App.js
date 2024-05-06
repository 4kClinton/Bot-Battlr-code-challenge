import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import Botcolletion from "./components/botcollection/botcollection";
import Yourbotarmy from "./components/yourbotarmy/yourbotarmy";
import BotSpecs from "./components/botspecs/Botspecs";

function App() {
  const [botcolletion, setBotcolletion] = useState([]);
  const [armyBots, setArmyBots] = useState([]);
  const [botSpecsShown, setBotspecsShown] = useState({});

  useEffect(() => {
    fetch("https://sammy-ck.github.io/db.json")
      .then((resp) => resp.json())
      .then((data) => {
        setBotcolletion(data.bots);
      });
  }, []);

  return (
    <Router> {/* Wrap Routes in Router */}
      <div className="App">
        <header>Bot Battlr</header>
        <Yourbotarmy armyBots={armyBots} setArmyBots={setArmyBots} />
        <Routes>
          <Route
            exact
            path="/"
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
            exact
            path="/botspecs"
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
    </Router>
  );
}

export default App;
