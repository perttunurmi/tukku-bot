const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('windows-utilities')
		.setDescription('Link utilities that make using windows bearable!'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`https://github.com/ChrisTitusTech/winutil\nhttps://github.com/valinet/Win11DisableRoundedCorners\nhttps://github.com/valinet/ExplorerPatcher`);
		console.log(`${interaction.user.username} ran /windows-utilities command`)
	},
};
