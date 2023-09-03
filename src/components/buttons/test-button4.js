const { ButtonInteraction, EmbedBuilder } = require('discord.js');
const Core = require('../../structures/Core');

module.exports = {
  name: 'test-button4',
  /**
   * Executes the 'test-button4' button when clicked
   * @param {ButtonInteraction} interaction
   * @param {Core} client
   */
  async execute(interaction, client) {
    const array = [
      'This is a random message you can get from clicking the Surprise button!',
      'Did you know that you can create up to 5 buttons on the same Action Row?',
      'You can update the message with new data even it\'s hidden!',
      'The amount of characters you can have for most fields on buttons is maxed to 100.',
    ];

    const result = Math.floor(Math.random() * array.length);

    const embed = new EmbedBuilder()
      .setDescription(`${array[result]}`);

    await interaction.update({ embeds: [embed] });
  },
};