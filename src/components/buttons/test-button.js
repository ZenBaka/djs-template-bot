const { EmbedBuilder, ButtonInteraction } = require('discord.js');
const Core = require('../../structures/Core');

module.exports = {
  name: 'test-button',
  authorOnly: true,
  /**
   * Executes the 'test-button' button when clicked
   * @param {ButtonInteraction} interaction
   * @param {Core} client
   */
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setDescription('Well, this is it. It isn\'t much but it is honest work');

    await interaction.update({ content: '', embeds: [embed], components: [] });
  },
};