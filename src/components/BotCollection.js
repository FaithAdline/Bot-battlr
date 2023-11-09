import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, releaseBot }) {
  return (
    <div>
      <h2>All Bots</h2>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} enlistBot={enlistBot} releaseBot={releaseBot} />
      ))}
    </div>
  );
}

export default BotCollection;
