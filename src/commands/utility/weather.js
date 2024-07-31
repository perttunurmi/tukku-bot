const { SlashCommandBuilder } = require('discord.js');
const { OpenWeatherAPI } = require("openweather-api-node")
const { clientId, guildId, token, weatherKey } = require("../../../config.json")

const date = new Date();

let locationName = "Helsinki"
let weather = new OpenWeatherAPI({
	key: weatherKey,
	locationName: locationName,
	units: "metric"
})

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Tulosta sää. Oletussijainti: Helsinki'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		console.log(`${interaction.user.username} ran /weather command ${date}`)

		/* 
		you can use setters as well:
		weather.setLocationByName("New York")
		...
		*/

		weather.getCurrent().then(data => {
			interaction.reply(`Current temperature in ${locationName}: \*\*${data.weather.temp.cur}\u00B0C\*\*`);
			console.log(`Current temperature in ${locationName}: ${data.weather.temp.cur}\u00B0C`)
		})
	},
};
