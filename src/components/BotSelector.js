import React from "react";

const BotSelector = props => {
  return (
    <div className="ui four column grid">
      <div className="row">
        <h3>Bot Bulk Importer:</h3>
      </div>

      <div className="row">
        <p>
          health: <strong>{props.health}</strong>
        </p>
        <input onChange={props.handleChange} type="range"  value={props.health} name="health" step="1" />
      </div>

      <div className="row">
        <p>
          armor: <strong>{props.strong}</strong>
        </p>
        <input  type="range" value={props.strong} name="armor" step="1" />
      </div>

      <div className="row">
        <p>
          damage: <strong>{props.damage}</strong>
        </p>
        <input  type="range" value={props.damage} name="damage" step="1" />
      </div>

      <h3 onClick={props.importBots}>Import bots meeting this criteria</h3>
    </div>
  );
};

export default BotSelector;
