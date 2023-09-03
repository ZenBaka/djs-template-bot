const { EmbedBuilder, ButtonInteraction } = require('discord.js');
const Core = require('../../structures/Core');

module.exports = {
  name: 'test-button2',
  /**
   * Executes the 'test-button2' button when clicked
   * @param {ButtonInteraction} interaction
   * @param {Core} client
   */
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setDescription('Shhh this is a hidden embed for your eyes only!');

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};