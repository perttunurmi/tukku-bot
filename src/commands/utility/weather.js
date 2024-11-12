const { SlashCommandBuilder } = require("discord.js");
const { OpenWeatherAPI } = require("openweather-api-node");
const {
  clientId,
  guildId,
  token,
  weatherKey,
} = require("../../../config.json");

let locationName = "Helsinki";
let weather = new OpenWeatherAPI({
  key: weatherKey,
  locationName: locationName,
  units: "metric",
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("weather")
    .setDescription("Tulosta sää. Oletussijainti: Helsinki")
    .addStringOption((option) =>
      option.setName("kaupunki").setDescription("Kaupunki").setRequired(false),
    ),
  async execute(interaction) {
    const date = new Date();
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    console.log(`${interaction.user.username} ran /weather command ${date}`);

    locationName =
      interaction.options.getString("kaupunki", false) || "Helsinki";
    weather.setLocationByName(locationName);

    weather.getCurrent().then((data) => {
      interaction.reply(
        `Current temperature in ${locationName}: \*\*${data.weather.temp.cur}\u00B0C\*\*`,
      );
      console.log(
        `Current temperature in ${locationName}: ${data.weather.temp.cur}\u00B0C`,
      );
    });
  },
};
