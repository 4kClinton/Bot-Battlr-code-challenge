import React from "react";

function Yourbotarmy({ armyBots, setArmyBots }) {
  const shownBot = armyBots.map((bot, index) => {
    return (
      <li
        className="botLi"
        key={"bott" + index}
        onClick={(e) => {
          const allNew = armyBots.filter((armyBot) => armyBot.id !== bot.id);
          setArmyBots([...allNew]);
        }}
      >
        <img src={bot.avatar_url} style={{ width: "70%" }} alt="" />
        <div style={{ padding: "15px 0px", borderTop: "thin solid grey" }}>
          <h3 style={{ textAlign: "left", paddingLeft: "10px" }}>{bot.name}</h3>
          <p style={{ fontSize: "80%" }}>{bot.catchphrase}</p>
          <div>
            <span>
              <b>Health:</b> {bot.health}
            </span>{" "}
            <span>
              <b>Amour:</b> {bot.armor}
            </span>{" "}
            <span>
              <b>Damage:</b> {bot.damage}
            </span>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="armyDiv">
      <h1>Your Bot Army</h1>
      <ul className="botUl">{shownBot}</ul>
    </div>
  );
}

export default Yourbotarmy;