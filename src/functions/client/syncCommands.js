const { readdirSync } = require('fs');
const path = require('path');

module.exports = (client) => {
  client.syncCommands = async () => {
    const commandFolders = readdirSync(path.join('commands'));

    const { commands } = client;

    for (const folder of commandFolders) {
      const commandFiles = readdirSync(path.join('commands', `${folder}`)).filter(file => file.endsWith('.js'));

      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        console.log(`Synced /${command.data.name} to local cache`);
      }
    }
    console.log(`Successfully synced ${commands.size} commands in total`);
  }
}