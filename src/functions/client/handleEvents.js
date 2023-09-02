const { readdirSync } = require('fs');
const path = require('path');

module.exports = (client) => {
  client.handleEvents = async () => {
    const eventFiles = readdirSync(path.join('src', 'events', 'client')).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
      const event = require(`../../events/client/${file}`);
      if (event.once) client.once(event.name, (...args) => event.execute(...args, client));
      else client.on(event.name, (...args) => event.execute(...args, client));
    }
  }
}