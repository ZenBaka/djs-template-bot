const { Client, Collection, ClientOptions } = require('discord.js');

/**
 * Extends the Client to add additional parameters
 * @extends {Client}
 */
class Core extends Client {
  /**
   * 
   * @param {ClientOptions} options 
   */
  constructor(options) {
    super(options);

    this.commands = new Collection();
    this.buttons = new Collection();
    this.menus = new Collection();
    this.modals = new Collection();
  }
}

module.exports = Core;