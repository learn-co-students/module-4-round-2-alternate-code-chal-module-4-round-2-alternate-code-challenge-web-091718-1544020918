import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSelector from "../components/BotSelector";

const apiAddress = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  state = {
    filteredBots: [],
    bots: [],
    myArmy: [],
    health: 50,
    strong: 50,
    damage: 50
  };

  importBots = () => {
    // on click event need to take the current state of bots that have been filtered(or not) and add them
    // to state of myArmy, or however myArmy is being rendered in yourBotArmy component
    // need to map over state.filterBots to return array of ids, then need to spread operate into
    // exsisting myArmy array
      let importBotIds = this.state.filteredBots.map(botObj => {
        return botObj.id
      })
      console.log(importBotIds)

      this.setState({
        myArmy: [...this.state.myArmy, parseInt(importBotIds,10)]
      })
    }



  handleChange = (event) => {
    if(event.target.name = 'health') {
      this.setState({health: event.target.value})
    }
    else if (event.target.name = 'armor') {
      this.setState({armor: event.target.value})
    }

    let filterBots = this.state.bots.filter(botObj => {
      return botObj.health >= parseInt(this.state.health, 10)
    })
    this.setState({
      filteredBots: filterBots
    }, console.log(this.state.filteredBots))

  }

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
      state: { botSelectorCriteria },
      addBotToArmy,
      removeBotToArmy
    } = this;

    let filterBots = this.state.bots.filter(botObj => {
      return botObj.health >= parseInt(this.state.health, 10)
    })

    return (
      <div>
        <BotSelector
          handleChange={this.handleChange}
          importBots={this.importBots}
          health={this.state.health}
          strong={this.state.strong}
          damage={this.state.damage}
        />
        <YourBotArmy bots={this.myBots()} removeBotToArmy={removeBotToArmy} />
        <BotCollection bots={filterBots} addBotToArmy={addBotToArmy} />
      </div>
    );
  }
}

export default BotsPage;
