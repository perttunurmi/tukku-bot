const { SlashCommandBuilder } = require('discord.js');

const date = new Date();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Kertoo tietoa komennon käyttäjästä.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
		console.log(`${interaction.user.username} ran /user command ${date}`)
	},
};
