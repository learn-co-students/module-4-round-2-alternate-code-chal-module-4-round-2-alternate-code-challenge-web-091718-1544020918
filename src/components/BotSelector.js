import React from "react";

const BotSelector = props => {

  const healthChanger = (e) => {
    props.receiveData(e.target.value)
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        <h3>Bot Bulk Importer:</h3>
      </div>

      <div className="row">
        <p>
          health: <strong>{props.health}</strong>
        </p>
        <input type="range" name="health" step="1" onChange={(e) => healthChanger(e)} />
      </div>

      <div className="row">
        <p>
          armor: <strong>30</strong>
        </p>
        <input type="range" value="30" name="armor" step="1" />
      </div>

      <button onClick={props.clickListener}>Import bots meeting this criteria</button>
    </div>
  );
};

export default BotSelector;
