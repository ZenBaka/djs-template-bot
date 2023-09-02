/**
 * Emitted when the client becomes ready to start working.
 */

module.exports = {
  name: 'ready',
  async execute(client) {
    console.log(`Successfully logged in as ${client.user.tag}!`);
  },
};