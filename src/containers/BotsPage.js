import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSelector from "../components/BotSelector";

const apiAddress = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  state = {
    bots: [],
    myArmy: [],
    health: 50,
    listener: []
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

  receiveData = (value) => {
    this.setState({ health: value })
  }

  // This function should be triggered by the button click in BotSelector
  addFilteredBotsToArmy = (filteredBotIds) => {
    if (filteredBotIds.length() > 0) {
      this.setState({ myArmy: [...this.state.myArmy, filteredBotIds] })
    }
  }
  // This will set the myArmy state to a collection of filtered ids so that myBots() can find the correct objets
  // to pass down to YourBotArmy and render in cards


  clickListener = () => {
    this.setState({ listener: [this.state.listener, ["hi"]] })
  }


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
        <BotSelector receiveData={this.receiveData} addFilteredBotsToArmy={this.addFilteredBotsToArmy} health={this.state.health} clickListener={this.clickListener} listener={this.state.listener}/>
        <YourBotArmy bots={this.myBots()} removeBotToArmy={removeBotToArmy} listener={this.state.listener}/>
        <BotCollection bots={bots} addBotToArmy={addBotToArmy} health={this.state.health} addFilteredBotsToArmy={this.addFilteredBotsToArmy} listener={this.state.listener}/>
      </div>
    );
  }
}

export default BotsPage;
