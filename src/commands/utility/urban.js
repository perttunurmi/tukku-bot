const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('urban')
		.setDescription('Urban dictionary')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Mitä haetaan?')),
	async execute(interaction) {
		const term = interaction.options.getString('input');
		const query = new URLSearchParams({ term });
		const dictResult = await request(`https://api.urbandictionary.com/v0/define?${query}`);
		const { list } = await dictResult.body.json();
		if (!list.length) {
			return interaction.editReply(`**${term}** ei löytynyt`);
		}

		var def = trim(list[0].definition, 1_024)

		interaction.reply(`**${term}**\n ${def}`)
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		const date = new Date();
		console.log(`${interaction.user.username} ran /urban command ${date}`)
	},
};

const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
