const { SlashCommandBuilder } = require('discord.js');

const date = new Date();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Tulostaa tietoa serveristä'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
		console.log(`${interaction.user.username} ran /server command ${date}`)
	},
};

