import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, releaseBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <BotCard key={bot.id} bot={bot} releaseBot={releaseBot} />
      ))}
    </div>
  );
}

export default YourBotArmy;
