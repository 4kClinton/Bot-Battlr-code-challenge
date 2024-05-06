import React from "react";
import { Link as NavLink } from "react-router-dom";

function BotSpecs({ botSpecsShown, armyBots, setArmyBots }) {
  return (
    <div className="specDiv">
      <img
        src={botSpecsShown.avatar_url}
        width="350px"
        height="400px"
        alt="bot"
        style={{ marginLeft: "40px" }}
      />
      <div className="specContent">
        <h3>
          <b>{botSpecsShown.name}</b>
        </h3>
        <p>
          <b>CATCHPHRASE:</b> {botSpecsShown.catchphrase}
        </p>
        <p>
          <b>CLASS:</b> {botSpecsShown.bot_class}
        </p>
        <div>
          <span>
            <b>Health:</b> {botSpecsShown.health}
          </span>{" "}
          <span>
            <b>Amour:</b> {botSpecsShown.armor}
          </span>{" "}
          <span>
            <b>Damage:</b> {botSpecsShown.damage}
          </span>
        </div>
      </div>

      <div className="btnSpec">
        <button>
          <NavLink className="navSpec btnSpec" to="/">
            Go Back
          </NavLink>
        </button>
        <br></br>
        <br />
        <button>
          <NavLink to="/" className="navSpec btnSpec" onClick={() => {
            const alreadyInBot = armyBots.includes(botSpecsShown);

            if (alreadyInBot) {
              setArmyBots([...armyBots]);
            } else {
              setArmyBots([...armyBots, botSpecsShown]);
            }
          }}>
            Enlist
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default BotSpecs;