const { BaseInteraction } = require("discord.js");
const Core = require("../../structures/Core");

/**
 * Emitted when an interaction is created.
 */
module.exports = {
  name: 'interactionCreate',
  /**
   *
   * @param {BaseInteraction} interaction
   * @param {Core} client
   */
  async execute(interaction, client) {
    const { commands, buttons, menus, modals } = client;

    if (interaction.authorOnly && interaction.user.id !== interaction.member.user.id) return interaction.reply({ content: 'You can not use this!', ephemeral: true });

    if (interaction.isCommand()) {
      const { commandName } = interaction;
      const command = commands.get(commandName);
      if (!command) return interaction.reply({ content: 'No data was found for this command! Please contact the developer!', ephemeral: true });

      await command.execute(interaction, client).catch(e => console.error(e));
    }
    else if (interaction.isButton()) {
      const { customId } = interaction;
      const button = buttons.get(customId);
      if (!button) return interaction.reply({ content: 'No data was found for this button!', ephemeral: true });

      await button.execute(interaction, client).catch(e => console.error(e));
    }
    else if (interaction.isStringSelectMenu()) {
      const { customId } = interaction;
      const menu = menus.get(customId);
      if (!menu) return interaction.reply({ content: 'No data was found for this menu!', ephemeral: true });

      await menu.execute(interaction, client).catch(e => console.error(e));
    }
    else if (interaction.isModalSubmit()) {
      const { customId } = interaction;
      const modal = modals.get(customId);
      if (!modal) return interaction.reply({ content: 'No data was found for this modal!', ephemeral: true });

      await modal.execute(interaction, client).catch(e => console.error(e));
    }
  },
};