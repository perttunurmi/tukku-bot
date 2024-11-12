const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Kehittäjille, lataa uusimman version komennosta.")
    .addStringOption((option) =>
      option
        .setName("komento")
        .setDescription("Komento joka ladataan uudelleen")
        .setRequired(true),
    ),
  async execute(interaction) {
    const commandName = interaction.options
      .getString("komento", true)
      .toLowerCase();
    const command = interaction.client.commands.get(commandName);

    if (!command) {
      return interaction.reply(
        `There is no command with name \`${commandName}\`!`,
      );
    }

    delete require.cache[require.resolve(`./${command.data.name}.js`)];

    try {
      const newCommand = require(`./${command.data.name}.js`);
      interaction.client.commands.set(newCommand.data.name, newCommand);
      await interaction.reply(
        `Command \`${newCommand.data.name}\` was reloaded!`,
      );
    } catch (error) {
      console.error(error);
      await interaction.reply(
        `There was an error while reloading a command \`${command.data.name}\`:\n\`${error.message}\``,
      );
    }
  },
};
