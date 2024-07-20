const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('leetify-user')
		.setDescription('Tulostaa pelaajan statsit'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		fs.readFile('/home/pepe/workspaces/discord-bot/src/commands/leetify/leetify.txt', 'utf8', (err, content) => {
			if (err) {
				console.error(err);
				return;
			}
			var answer = "testi";


			interaction.reply(answer);
		});
	},
};
