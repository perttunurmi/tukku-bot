const { SlashCommandBuilder, Guild } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("help").setDescription("Pyydä apua"),
  async execute(interaction) {
    const date = new Date();
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    await interaction.reply("https://mieli.fi/tukea-ja-apua/kriisipuhelin/");
    console.log(`${interaction.user.username} ran /help ${date}`);
  },
};
