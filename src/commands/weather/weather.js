const { SlashCommandBuilder } = require('discord.js');
const { OpenWeatherAPI } = require("openweather-api-node")
const { clientId, guildId, token, weatherKey } = require("../../../config.json")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Get the current weather'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		console.log(`${interaction.user.username} ran /weather command`)


		let weather = new OpenWeatherAPI({
			key: weatherKey,
			locationName: "Alavus",
			units: "metric"
		})

		/* 
		you can use setters as well:
		weather.setKey("put-key-here")
		weather.setLocationByName("New York")
		...
		*/

		weather.getCurrent().then(data => {
			interaction.reply(`Current temperature in Alavus: ${data.weather.temp.cur}\u00B0C`);
			console.log(`Current temperature in Alavus: ${data.weather.temp.cur}\u00B0C`)
		})
	},
};
