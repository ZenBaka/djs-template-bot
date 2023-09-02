require('dotenv').config();
const Core = require('./structures/Core');
const { GatewayIntentBits } = require('discord.js');
const { readdirSync } = require('fs');

const client = new Core({ intents: [GatewayIntentBits.Guilds] });

const functionFiles = readdirSync('./src/functions/client').filter(file => file.endsWith('.js'));

for (const file of functionFiles) {
  require(`./functions/client/${file}`)(client);
}

client.syncCommands();
client.syncComponents();
client.handleEvents();
client.login(prcess.env.TOKEN);