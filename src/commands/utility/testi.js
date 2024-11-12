const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("testi")
    .setDescription("toimiiko tää?"),
  async execute(interaction) {
    await interaction.reply("toimii!");
  },
};
