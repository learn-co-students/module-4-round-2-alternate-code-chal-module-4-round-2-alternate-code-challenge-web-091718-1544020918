import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  filterBots = () => {
    let filteredBots = this.props.bots.filter(bot => {
      return bot.health >= this.props.health
    })

    return filteredBots.map(bot => (
      <BotCard key={bot.id} bot={bot} handleClick={this.props.addBotToArmy} />
    ))
  }

  getIdArray = () => {
    let filteredBots = this.props.bots.filter(bot => {
      return bot.health >= this.props.health
    })
    let filteredBotIds = filteredBots.map(bot => bot.id)

    this.props.addFilteredBotsToArmy(filteredBotIds)
  }



  render() {
    const {
      props: { bots, addBotToArmy }
    } = this;
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.listener.length > 0 ? this.getIdArray : null}
          {this.filterBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
