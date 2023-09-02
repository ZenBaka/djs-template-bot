const { SlashCommandBuilder, CommandInteraction } = require('discord.js');
const Core = require('../../structures/Core');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDMPermission(false)
    .setDescription('Pong!'),
    /**
     * Executes the /ping command
     * @param {CommandInteraction} interaction
     * @param {Core} client
     */
  async execute(interaction, client) {
    await interaction.reply({ content: `Ping: ${client.ws.ping}ms` });
  },
};