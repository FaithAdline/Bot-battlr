import React from "react";

function BotCard({ bot, enlistBot, releaseBot }) {
  return (
    <div className="bot-card">
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <img src={bot.avatar_url} alt={bot.name} />
      <button onClick={() => enlistBot(bot)}>Enlist</button>
      <button onClick={() => releaseBot(bot)}>Release</button>
    </div>
  );
}

export default BotCard;

