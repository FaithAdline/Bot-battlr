import React from "react";

function Enlist({ bot, enlistBot }) {
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
    </div>
  );
}

export default Enlist;
