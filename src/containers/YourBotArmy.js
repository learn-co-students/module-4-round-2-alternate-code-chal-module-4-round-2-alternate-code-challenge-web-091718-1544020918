import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  render() {
    const {
      props: { bots, removeBotToArmy }
    } = this;
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots.map(bot => (
              <BotCard key={bot.id} bot={bot} handleClick={removeBotToArmy} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
