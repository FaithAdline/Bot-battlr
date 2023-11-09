import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]); // Fetch and store bot data
  const [army, setArmy] = useState([]); // Store enlisted bots

  // Implement functions to fetch data, enlist and release bots
  useEffect(() => {
    // Fetch the bot data here and update the 'bots' state
    // You can use the fetch API, axios, or any other method to fetch data
    // Example:
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bot data: ", error));
  }, []);

  const enlistBot = (bot) => {
    // Implement the logic to enlist a bot into the army here
    // You can use the 'setArmy' function to update the 'army' state
    // Example:
    setArmy([...army, bot]);
  };

  const releaseBot = (bot) => {
    // Implement the logic to release a bot from the army here
    // You can use the 'setArmy' function to update the 'army' state
    // Example:
    setArmy(army.filter((enlistedBot) => enlistedBot.id !== bot.id));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} releaseBot={releaseBot} />
      <YourBotArmy army={army} releaseBot={releaseBot} />
    </div>
  );
}

export default App;






