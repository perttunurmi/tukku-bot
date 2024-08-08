const { SlashCommandBuilder } = require('discord.js');
const Quote = require('inspirational-quotes');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('viisaus')
		.setDescription('Random viisaus'),
	async execute(interaction) {
		const date = new Date();
		var god = Quote.getRandomQuote()
		await interaction.reply(`${god}`);
		console.log(`${interaction.user.username} ran /viisaus command ${date}`)
		console.log(god);
	},
};
