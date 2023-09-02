const { REST, Routes } = require('discord.js');
require('dotenv').config();
const { readdirSync } = require('fs');
const path = require('path');

const commandArray = [];

const commandFolders = readdirSync(path.join('src', 'commands'));

for (const folder of commandFolders) {
  const commandFiles = readdirSync(path.join('src', 'commands', `${folder}`)).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(`../src/commands/${folder}/${file}`);
    commandArray.push(command.data.toJSON());
    console.log(`Pushed /${command.data.name} to an array`);
  }
}

console.log(`Pushed ${commandArray.length} commands in total`);

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

try {
  console.log('...Attempting to register guild commands');
  rest.put(Routes.applicationGuildCommands(process.env.APP_ID, process.env.GUILD_ID), { body: commandArray });
  console.log('Successfully registered guild commands!');
}
catch (err) {
  console.error(err);
}