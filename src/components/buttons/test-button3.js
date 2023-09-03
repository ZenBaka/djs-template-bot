const { ButtonInteraction } = require('discord.js');
const Core = require('../../structures/Core');

module.exports = {
  name: 'test-button3',
  /**
   * Executes the 'test-button3' button when clicked
   * @param {ButtonInteraction} interaction
   * @param {Core} client
   */
  async execute(interaction, client) {
    await interaction.update({ content: 'Removed all the buttons for you!', components: [] });
  },
};