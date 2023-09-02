const {
  SlashCommandBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  CommandInteraction,
} = require('discord.js');
const Core = require('../../structures/Core');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('button')
    .setDescription('A command that tests button usage'),
    /**
     * Executes the /button command
     * @param {CommandInteraction} interaction
     * @param {Core} client
     */
  async execute(interaction, client) {
    const b1 = new ButtonBuilder()
      .setCustomId('test-button')
      .setLabel(`${interaction.user.username} Only`)
      .setStyle(ButtonStyle.Primary);

    const b2 = new ButtonBuilder()
      .setCustomId('test-button2')
      .setLabel('Send Hidden Embed')
      .setStyle(ButtonStyle.Secondary);

    const b3 = new ButtonBuilder()
      .setCustomId('test-button3')
      .setLabel('Remove Buttons')
      .setStyle(ButtonStyle.Danger);

    const b4 = new ButtonBuilder()
      .setCustomId('test-button4')
      .setLabel('Surprise')
      .setStyle(ButtonStyle.Success);

    const row = new ActionRowBuilder().setComponents(b1, b2, b3, b4);

    await interaction.reply({ content: 'Here are some buttons to play with!', components: [row] });
  },
};