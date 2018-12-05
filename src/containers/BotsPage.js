import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSelector from "../components/BotSelector";

const apiAddress = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  state = {
    bots: [],
    myArmy: []
  };

  componentDidMount() {
    fetch(apiAddress)
      .then(r => r.json())
      .then(bots => this.setState({ bots }));
  }

  addBotToArmy = id => {
    const {
      state: { myArmy }
    } = this;
    if (!myArmy.includes(id)) {
      this.setState({ myArmy: [...myArmy, id] });
    }
  };

  removeBotToArmy = id => {
    const {
      state: { myArmy }
    } = this;
    const updatedArmy = myArmy.filter(botId => botId !== id);
    if (myArmy.includes(id)) {
      this.setState({ myArmy: updatedArmy });
    }
  };

  myBots() {
    const {
      state: { bots, myArmy }
    } = this;

    const result = myArmy.map(botId => bots.find(bObj => bObj.id === botId));
    return result;
  }

  render() {
    const {
      state: { bots, botSelectorCriteria },
      addBotToArmy,
      removeBotToArmy
    } = this;
    return (
      <div>
        <BotSelector />
        <YourBotArmy bots={this.myBots()} removeBotToArmy={removeBotToArmy} />
        <BotCollection bots={bots} addBotToArmy={addBotToArmy} />
      </div>
    );
  }
}

export default BotsPage;
