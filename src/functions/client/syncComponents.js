const { readdirSync } = require('fs');
const path = require('path');

module.exports = (client) => {
  client.syncComponents = async () => {
    const { buttons, menus, modals } = client;

    const componentFolders = readdirSync(path.join('src', 'components'));
    for (const folder of componentFolders) {
      const componentFiles = readdirSync(path.join('src', 'components', `${folder}`)).filter(file => file.endsWith('.js'));

      switch (folder) {
        case 'buttons':
          for (const file of componentFiles) {
            const button = require(`../../components/${folder}/${file}`);
            buttons.set(button.name, button);
          }
          console.log(`Synced ${buttons.size} buttons to cache`);
          break;

        case 'menus':
          for (const file of componentFiles) {
            const menu = require(`../../components/${folder}/${file}`);
            menus.set(menu.name, menu);
          }
          console.log(`Synced ${menus.size} menus to cache`);
          break;

        case 'modals':
          for (const file of componentFiles) {
            const modal = require(`../../components/${folder}/${file}`);
            modals.set(modal.name, modal);
          }
          console.log(`Synced ${modals.size} modals to cache`);
          break;

        default:
          break;
      }
    }
  }
}